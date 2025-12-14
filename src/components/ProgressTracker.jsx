import React from 'react'

const ProgressTracker = ({ progress }) => {
  const accuracy = progress.questionsAnswered > 0 
    ? Math.round((progress.correctAnswers / progress.questionsAnswered) * 100) 
    : 0

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4">
          {/* Level Badge */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base smartboard:text-2xl">
              Level {progress.level}
            </div>
            <div className="text-xs md:text-sm smartboard:text-xl text-gray-600">
              {progress.xp} XP
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm smartboard:text-xl">
            <div className="flex items-center gap-1 md:gap-2">
              <span className="text-lg md:text-xl smartboard:text-3xl">✅</span>
              <span className="text-gray-700 font-medium">{progress.correctAnswers}</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <span className="text-lg md:text-xl smartboard:text-3xl">📊</span>
              <span className="text-gray-700 font-medium">{accuracy}%</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <span className="text-lg md:text-xl smartboard:text-3xl">🎯</span>
              <span className="text-gray-700 font-medium">{progress.questionsAnswered}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressTracker
