import React, { useState } from 'react'
import Hero from './components/Hero'
import PresentationSection from './components/PresentationSection'
import ModeSelector from './components/ModeSelector'
import StudentMode from './components/StudentMode'
import TeacherMode from './components/TeacherMode'

function App() {
  const [mode, setMode] = useState('student') // 'student' or 'teacher'

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <Hero />
      
      {/* Presentation Section */}
      <PresentationSection />
      
      {/* Mode Selector */}
      <ModeSelector mode={mode} setMode={setMode} />
      
      {/* Conditional Rendering based on mode */}
      {mode === 'student' ? (
        <StudentMode />
      ) : (
        <TeacherMode />
      )}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 sm:py-6 mt-8 sm:mt-12 md:mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs sm:text-sm md:text-base break-words">
            NCERT Class 10 Physics | Chapter 10: Light – Reflection and Refraction
          </p>
          <p className="text-xs md:text-sm text-gray-400 mt-1 sm:mt-2">
            © 2024 Educational Platform | Built for Smart Classrooms
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
