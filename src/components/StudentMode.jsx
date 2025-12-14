import React, { useState, useEffect } from 'react'
import { getRandomQuestion } from '../data/questions'

const StudentMode = ({ progress, updateProgress }) => {
  const [difficulty, setDifficulty] = useState('easy')
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [askedQuestions, setAskedQuestions] = useState([])

  // Load a random question when difficulty changes
  useEffect(() => {
    loadNewQuestion()
  }, [difficulty])

  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const loadNewQuestion = () => {
    const question = getRandomQuestion(difficulty, askedQuestions)
    // Shuffle options to randomize correct answer position
    const shuffledQuestion = {
      ...question,
      options: shuffleArray(question.options)
    }
    setCurrentQuestion(shuffledQuestion)
    setAskedQuestions(prev => [...prev, question.id])
    setSelectedAnswer(null)
    setShowFeedback(false)
  }

  const handleAnswerSelect = (answer) => {
    if (showFeedback) return
    setSelectedAnswer(answer)
  }

  const handleSubmit = () => {
    if (!selectedAnswer) return
    
    const correct = selectedAnswer === currentQuestion.answer
    setIsCorrect(correct)
    setShowFeedback(true)
    
    // Calculate points based on difficulty
    const points = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 20 : 30
    updateProgress(correct ? points : 0, correct)
  }

  const difficultyConfig = {
    easy: { emoji: '🟢', label: 'Easy', color: 'green', points: 10 },
    medium: { emoji: '🟡', label: 'Medium', color: 'yellow', points: 20 },
    hard: { emoji: '🔴', label: 'Hard', color: 'red', points: 30 }
  }

  if (!currentQuestion) return null

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Difficulty Selector */}
          <div className="mb-8 md:mb-12">
            <h3 className="text-lg md:text-xl smartboard:text-3xl font-semibold mb-4 text-center text-gray-800">
              Select Difficulty
            </h3>
            <div className="flex gap-3 md:gap-4 justify-center">
              {Object.entries(difficultyConfig).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => setDifficulty(key)}
                  className={`px-4 py-2 md:px-6 md:py-3 smartboard:px-8 smartboard:py-4 rounded-lg font-medium text-sm md:text-base smartboard:text-2xl transition-all ${
                    difficulty === key
                      ? `bg-${config.color}-500 text-white shadow-lg scale-105`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {config.emoji} {config.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 smartboard:p-12 shadow-xl">
            {/* Question Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl md:text-3xl smartboard:text-5xl">
                {difficultyConfig[difficulty].emoji}
              </span>
              <span className="bg-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm smartboard:text-xl font-medium text-gray-700">
                +{difficultyConfig[difficulty].points} XP
              </span>
            </div>

            {/* Question Text */}
            <h4 className="text-lg md:text-xl lg:text-2xl smartboard:text-4xl font-bold text-gray-900 mb-6 md:mb-8 leading-relaxed">
              {currentQuestion.question}
            </h4>

            {/* Options */}
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showFeedback}
                  className={`w-full text-left p-4 md:p-5 smartboard:p-7 rounded-xl text-sm md:text-base smartboard:text-2xl font-medium transition-all ${
                    selectedAnswer === option
                      ? showFeedback
                        ? option === currentQuestion.answer
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-blue-500 text-white'
                      : showFeedback && option === currentQuestion.answer
                      ? 'bg-green-500 text-white'
                      : 'bg-white hover:bg-gray-50 text-gray-800'
                  } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <span className="mr-3">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              ))}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`p-4 md:p-6 smartboard:p-8 rounded-xl mb-6 ${
                isCorrect ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl md:text-4xl smartboard:text-6xl">
                    {isCorrect ? '🎉' : '💡'}
                  </span>
                  <h5 className="text-lg md:text-xl smartboard:text-3xl font-bold">
                    {isCorrect ? 'Correct!' : 'Not quite right'}
                  </h5>
                </div>
                <p className="text-sm md:text-base smartboard:text-2xl text-gray-700 leading-relaxed">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 md:gap-4">
              {!showFeedback ? (
                <button
                  onClick={handleSubmit}
                  disabled={!selectedAnswer}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 md:py-4 smartboard:py-6 rounded-xl font-bold text-base md:text-lg smartboard:text-2xl transition-colors"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={loadNewQuestion}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 md:py-4 smartboard:py-6 rounded-xl font-bold text-base md:text-lg smartboard:text-2xl transition-colors"
                >
                  Next Question →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentMode
