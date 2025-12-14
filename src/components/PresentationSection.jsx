import React, { useState } from 'react'

const PresentationSection = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const toggleFullscreen = () => {
    const iframe = document.getElementById('gamma-presentation')
    if (!document.fullscreenElement) {
      iframe.requestFullscreen().catch(err => {
        console.log('Fullscreen error:', err)
      })
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 smartboard:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl smartboard:text-6xl font-bold text-gray-900 mb-3 md:mb-4">
              📚 Chapter Presentation
            </h2>
            <p className="text-base md:text-lg smartboard:text-2xl text-gray-600">
              Interactive slides covering all concepts of reflection and refraction
            </p>
          </div>

          {/* Presentation Container */}
          <div className="relative bg-gray-100 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
            {/* Loading Indicator */}
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-10">
                <div className="text-center">
                  <div className="animate-pulse text-4xl md:text-5xl mb-4">📖</div>
                  <p className="text-gray-600 text-sm md:text-base">Loading presentation...</p>
                </div>
              </div>
            )}

            {/* Iframe Container */}
            <div className="iframe-container relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                id="gamma-presentation"
                src="https://gamma.app/embed/wux7ypowv85snut"
                className="absolute top-0 left-0 w-full h-full"
                allow="fullscreen"
                title="Light – Reflection and Refraction"
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
              />
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm smartboard:text-xl smartboard:px-6 smartboard:py-3 transition-colors duration-200 z-20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle fullscreen"
            >
              {isFullscreen ? '✕ Exit Fullscreen' : '⛶ Fullscreen'}
            </button>
          </div>

          {/* Tips */}
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <span className="text-2xl md:text-3xl smartboard:text-5xl mb-2 block">💡</span>
              <p className="text-xs md:text-sm smartboard:text-xl text-gray-700">Use arrow keys to navigate slides</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <span className="text-2xl md:text-3xl smartboard:text-5xl mb-2 block">🖱️</span>
              <p className="text-xs md:text-sm smartboard:text-xl text-gray-700">Click fullscreen for better view</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <span className="text-2xl md:text-3xl smartboard:text-5xl mb-2 block">📱</span>
              <p className="text-xs md:text-sm smartboard:text-xl text-gray-700">Optimized for all devices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PresentationSection
