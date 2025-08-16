import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 0,
      image: '/images/hero1.png',
      alt: 'Traditional South Indian Thali',
      title: 'Authentic Thali'
    },
    {
      id: 1,
      image: '/images/hero2.png',
      alt: 'Authentic South Indian Dishes',
      title: 'Traditional Dishes'
    },
    {
      id: 2,
      image: '/images/hero3.png',
      alt: 'Fresh South Indian Cuisine',
      title: 'Fresh Cuisine'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700"></div>
        
        {/* Secondary overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-green-800/20"></div>
        
        {/* Decorative pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-orange-300 rounded-full blur-2xl"></div>
        </div>
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="geometric" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="white"/>
                <circle cx="0" cy="0" r="1" fill="white"/>
                <circle cx="60" cy="60" r="1" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric)"/>
          </svg>
        </div>
      </div>

      {/* Content with enhanced layout */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Enhanced Top Content */}
          <div className="text-center text-white mb-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  Serving Authentic &
                </h1>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                    Creative South Indian Cuisine
                  </span>
                </h2>
              </div>
              
              <div className="flex items-center justify-center space-x-6 mt-8">
                <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-24"></div>
                <span className="text-orange-300 text-xl font-semibold tracking-wider italic bg-green-800/30 px-6 py-2 rounded-full border border-orange-400/30">
                  Since 43+ Years
                </span>
                <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-24"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Centered Image Carousel with sliding center focus */}
          <div className="flex justify-center items-center mb-20">
            <div className="relative w-full max-w-6xl h-96 lg:h-[400px]">
              {/* Main container for the sliding effect */}
              <div className="relative w-full h-full overflow-hidden">
                <div 
                  className="flex transition-transform duration-1000 ease-in-out h-full"
                  style={{
                    transform: `translateX(calc(-${currentSlide * 33.333}% + ${currentSlide * 2}rem))`,
                    width: '300%'
                  }}
                >
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className="relative flex-1 px-4"
                    >
                      <div
                        className={`relative h-full transition-all duration-1000 ease-in-out ${
                          index === currentSlide 
                            ? 'scale-110 z-30' 
                            : 'scale-90 z-20'
                        }`}
                      >
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          className="w-full h-full object-cover rounded-3xl shadow-2xl"
                          data-testid={`img-hero-${index + 1}`}
                        />
                        
                        {/* Enhanced overlay for active image */}
                        {index === currentSlide && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>
                            <div className="absolute inset-0 ring-4 ring-orange-400/50 rounded-3xl"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4">
                                <h3 className="text-white font-bold text-lg">{slide.title}</h3>
                                <p className="text-orange-300 text-sm">Authentic South Indian flavors</p>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {/* Subtle overlay for non-active images */}
                        {index !== currentSlide && (
                          <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced Slide Indicators */}
              <div className="flex justify-center mt-8 space-x-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-12 h-3 bg-orange-400 rounded-full' 
                        : 'w-3 h-3 bg-white/50 rounded-full hover:bg-white/70'
                    }`}
                    data-testid={`indicator-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex justify-center space-x-6">
            <button 
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              data-testid="button-view-menu"
            >
              <span className="flex items-center space-x-2">
                <span>View Menu</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            <button 
              className="group border-2 border-white text-white hover:bg-white hover:text-green-800 px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              data-testid="button-order-online"
            >
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 8M7 13l2.5 8m0 0h8.5M7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
                <span>Order Online</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Wave with better styling */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-white">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 animate-pulse opacity-20">
        <div className="w-20 h-20 border-2 border-orange-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/3 right-10 animate-pulse opacity-20 animation-delay-2000">
        <div className="w-16 h-16 border-2 border-yellow-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;