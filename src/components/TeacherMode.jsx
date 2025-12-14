import React, { useState } from 'react'
import { getRandomQuestion } from '../data/questions'

const TeacherMode = () => {
  const [startRoll, setStartRoll] = useState('')
  const [endRoll, setEndRoll] = useState('')
  const [difficulty, setDifficulty] = useState('easy')
  const [selectedRoll, setSelectedRoll] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [askedQuestions, setAskedQuestions] = useState([])

  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const handleAskQuestion = () => {
    // Validate inputs
    const start = parseInt(startRoll)
    const end = parseInt(endRoll)
    
    if (isNaN(start) || isNaN(end) || start > end) {
      alert('Please enter valid roll number range')
      return
    }

    // Generate random roll number
    const randomRoll = Math.floor(Math.random() * (end - start + 1)) + start
    
    // Get random question based on difficulty (avoiding recently asked)
    const question = getRandomQuestion(difficulty, askedQuestions)
    setAskedQuestions(prev => [...prev, question.id])
    
    // Shuffle options to randomize correct answer position
    const shuffledQuestion = {
      ...question,
      options: shuffleArray(question.options)
    }
    
    setSelectedRoll(randomRoll)
    setCurrentQuestion(shuffledQuestion)
    setShowAnswer(false)
  }

  const difficultyConfig = {
    easy: { emoji: '🟢', label: 'Easy', color: 'bg-green-500' },
    medium: { emoji: '🟡', label: 'Medium', color: 'bg-yellow-500' },
    hard: { emoji: '🔴', label: 'Hard', color: 'bg-red-500' }
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 smartboard:py-28 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl smartboard:text-6xl font-bold text-gray-900 mb-3">
              👨‍🏫 Teacher Control Panel
            </h2>
            <p className="text-base md:text-lg smartboard:text-2xl text-gray-600">
              Randomly select students and ask questions in class
            </p>
          </div>

          {/* Control Panel */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10 smartboard:p-16 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
              {/* Roll Number Range */}
              <div>
                <label className="block text-sm md:text-base smartboard:text-2xl font-semibold text-gray-700 mb-3">
                  Roll Number Range
                </label>
                <div className="flex gap-3">
                  <input
                    type="number"
                    placeholder="Start"
                    value={startRoll}
                    onChange={(e) => setStartRoll(e.target.value)}
                    className="flex-1 px-4 py-3 md:py-4 smartboard:py-6 smartboard:text-2xl border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-base md:text-lg"
                  />
                  <span className="flex items-center text-gray-500 text-xl md:text-2xl smartboard:text-4xl">→</span>
                  <input
                    type="number"
                    placeholder="End"
                    value={endRoll}
                    onChange={(e) => setEndRoll(e.target.value)}
                    className="flex-1 px-4 py-3 md:py-4 smartboard:py-6 smartboard:text-2xl border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-base md:text-lg"
                  />
                </div>
              </div>

              {/* Difficulty Selector */}
              <div>
                <label className="block text-sm md:text-base smartboard:text-2xl font-semibold text-gray-700 mb-3">
                  Question Difficulty
                </label>
                <div className="flex gap-2 md:gap-3">
                  {Object.entries(difficultyConfig).map(([key, config]) => (
                    <button
                      key={key}
                      onClick={() => setDifficulty(key)}
                      className={`flex-1 py-3 md:py-4 smartboard:py-6 rounded-lg font-medium text-sm md:text-base smartboard:text-2xl transition-all ${
                        difficulty === key
                          ? `${config.color} text-white shadow-lg scale-105`
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {config.emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Ask Question Button */}
            <button
              onClick={handleAskQuestion}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 md:py-5 smartboard:py-8 rounded-xl font-bold text-lg md:text-xl smartboard:text-3xl transition-all shadow-lg hover:shadow-xl"
            >
              🎲 Ask Next Question
            </button>
          </div>

          {/* Display Area */}
          {selectedRoll && currentQuestion && (
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10 smartboard:p-16 animate-fadeIn">
              {/* Selected Student */}
              <div className="text-center mb-8 md:mb-12 pb-8 border-b-2 border-gray-200">
                <p className="text-base md:text-lg smartboard:text-2xl text-gray-600 mb-3">
                  Selected Student
                </p>
                <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 md:px-12 md:py-6 smartboard:px-16 smartboard:py-10 rounded-2xl">
                  <p className="text-sm md:text-base smartboard:text-2xl font-medium mb-2">Roll Number</p>
                  <p className="text-5xl md:text-6xl lg:text-7xl smartboard:text-9xl font-bold">
                    {selectedRoll}
                  </p>
                </div>
              </div>

              {/* Question Display */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl md:text-4xl smartboard:text-6xl">
                    {difficultyConfig[difficulty].emoji}
                  </span>
                  <span className="bg-gray-100 px-4 py-2 md:px-6 md:py-3 smartboard:px-8 smartboard:py-4 rounded-full text-sm md:text-base smartboard:text-2xl font-medium text-gray-700">
                    {currentQuestion.marks} Mark{currentQuestion.marks > 1 ? 's' : ''}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl smartboard:text-5xl font-bold text-gray-900 mb-8 leading-relaxed">
                  {currentQuestion.question}
                </h3>

                {/* Options (if MCQ) */}
                {currentQuestion.options.length > 0 && (
                  <div className="space-y-3 md:space-y-4 mb-8">
                    {currentQuestion.options.map((option, index) => (
                      <div
                        key={index}
                        className={`p-4 md:p-5 smartboard:p-8 rounded-xl text-base md:text-lg smartboard:text-3xl ${
                          showAnswer && option === currentQuestion.answer
                            ? 'bg-green-500 text-white font-bold'
                            : 'bg-gray-50 text-gray-800'
                        }`}
                      >
                        <span className="font-bold mr-3">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Answer Section */}
              <div className="flex gap-4">
                <button
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 md:py-5 smartboard:py-8 rounded-xl font-bold text-base md:text-lg smartboard:text-2xl transition-colors"
                >
                  {showAnswer ? '🙈 Hide Answer' : '👁️ Show Answer'}
                </button>
              </div>

              {/* Answer Display */}
              {showAnswer && (
                <div className="mt-6 p-6 md:p-8 smartboard:p-12 bg-green-50 rounded-xl border-2 border-green-200 animate-fadeIn">
                  <h4 className="text-lg md:text-xl smartboard:text-3xl font-bold text-green-900 mb-4">
                    ✅ Correct Answer
                  </h4>
                  <p className="text-base md:text-lg smartboard:text-2xl text-green-800 font-semibold mb-4">
                    {currentQuestion.answer}
                  </p>
                  <div className="pt-4 border-t border-green-200">
                    <p className="text-sm md:text-base smartboard:text-xl text-green-700 leading-relaxed">
                      <strong>Explanation:</strong> {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Instructions */}
          {!selectedRoll && (
            <div className="bg-blue-50 rounded-xl p-6 md:p-8 smartboard:p-12 text-center">
              <p className="text-base md:text-lg smartboard:text-2xl text-gray-700">
                💡 Enter roll number range and select difficulty, then click "Ask Next Question"
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default TeacherMode
