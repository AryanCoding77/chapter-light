import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 md:py-20 lg:py-24 smartboard:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Chapter Badge */}
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm md:text-base lg:text-lg smartboard:text-2xl font-medium mb-4 md:mb-6">
            Chapter 10 | NCERT Class 10 Physics
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl smartboard:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Light: Reflection and Refraction
          </h1>
          
          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl smartboard:text-3xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore the fascinating world of light, mirrors, and lenses. Learn how light behaves when it reflects and refracts through different mediums.
          </p>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
