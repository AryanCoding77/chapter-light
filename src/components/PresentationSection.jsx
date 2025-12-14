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
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 smartboard:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl smartboard:text-6xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              📚 Chapter Presentation
            </h2>
            <p className="text-sm sm:text-base md:text-lg smartboard:text-2xl text-gray-600 px-2">
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
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/50 hover:bg-black/70 text-white px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded text-xs md:text-sm smartboard:text-xl smartboard:px-6 smartboard:py-3 transition-colors duration-200 z-20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle fullscreen"
            >
              {isFullscreen ? '✕' : '⛶'} <span className="hidden sm:inline">{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PresentationSection
