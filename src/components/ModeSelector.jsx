import React from 'react'

const ModeSelector = ({ mode, setMode }) => {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl smartboard:text-5xl font-bold text-center mb-6 md:mb-8 text-gray-900">
            Choose Your Mode
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Student Mode */}
            <button
              onClick={() => setMode('student')}
              className={`p-6 md:p-8 rounded-xl transition-all duration-300 ${
                mode === 'student'
                  ? 'bg-blue-600 text-white shadow-2xl scale-105'
                  : 'bg-white text-gray-700 hover:shadow-lg hover:scale-102'
              }`}
              aria-pressed={mode === 'student'}
            >
              <div className="text-4xl md:text-5xl smartboard:text-7xl mb-3 md:mb-4">🎓</div>
              <h3 className="text-lg md:text-xl smartboard:text-3xl font-bold mb-2">Student Mode</h3>
              <p className="text-sm md:text-base smartboard:text-xl opacity-90">
                Practice questions, earn XP, and track your progress
              </p>
            </button>
            
            {/* Teacher Mode */}
            <button
              onClick={() => setMode('teacher')}
              className={`p-6 md:p-8 rounded-xl transition-all duration-300 ${
                mode === 'teacher'
                  ? 'bg-purple-600 text-white shadow-2xl scale-105'
                  : 'bg-white text-gray-700 hover:shadow-lg hover:scale-102'
              }`}
              aria-pressed={mode === 'teacher'}
            >
              <div className="text-4xl md:text-5xl smartboard:text-7xl mb-3 md:mb-4">👨‍🏫</div>
              <h3 className="text-lg md:text-xl smartboard:text-3xl font-bold mb-2">Teacher Mode</h3>
              <p className="text-sm md:text-base smartboard:text-xl opacity-90">
                Control classroom, ask random students questions
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModeSelector
