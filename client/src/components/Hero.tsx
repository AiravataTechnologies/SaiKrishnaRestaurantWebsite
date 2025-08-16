import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 0,
      image: '/images/hero1.png',
      alt: 'Traditional South Indian Vada',
      title: 'Crispy Vada'
    },
    {
      id: 1,
      image: '/images/hero2.png',
      alt: 'Authentic South Indian Thali',
      title: 'Complete Thali'
    },
    {
      id: 2,
      image: '/images/Hero3.png',
      alt: 'Fresh Idli and Sambar',
      title: 'Soft Idli'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Calculate positions for overlapping images with responsive positioning
  const getImageStyle = (index: number) => {
    const currentIndex = currentSlide;
    const totalImages = slides.length;
    
    // Calculate the position relative to current slide
    let position = (index - currentIndex + totalImages) % totalImages;
    
    // Responsive base styles
    const baseStyles = {
      position: 'absolute' as const,
      transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
      objectFit: 'contain' as const,
      objectPosition: 'center' as const,
    };

    // True overlapping positioning - much closer together
    switch (position) {
      case 0: // Left position - overlapping center
        return {
          ...baseStyles,
          left: 'calc(50% - 80px)', // Much closer to center
          top: '50%',
          transform: 'translateY(-50%) scale(0.85)',
          zIndex: 20,
          opacity: 0.9,
          width: 'clamp(220px, 28vw, 320px)',
          height: 'clamp(220px, 28vw, 320px)',
        };
      case 1: // Center position (main) - front and center
        return {
          ...baseStyles,
          left: '50%',
          top: '50%',
          transform: 'translateX(-50%) translateY(-50%) scale(1)',
          zIndex: 30,
          opacity: 1,
          width: 'clamp(250px, 32vw, 380px)',
          height: 'clamp(250px, 32vw, 380px)',
        };
      case 2: // Right position - overlapping center
        return {
          ...baseStyles,
          left: 'calc(50% + 80px)', // Much closer to center
          top: '50%',
          transform: 'translateY(-50%) scale(0.85)',
          zIndex: 20,
          opacity: 0.9,
          width: 'clamp(220px, 28vw, 320px)',
          height: 'clamp(220px, 28vw, 320px)',
        };
      default:
        return {
          ...baseStyles,
          opacity: 0,
          transform: 'scale(0.5)',
          zIndex: 0,
          width: '0px',
          height: '0px',
        };
    }
  };

  return (
    <section 
      id="home" 
      className="relative w-full bg-cover bg-center bg-no-repeat -mt-20 pt-20"
      style={{
        backgroundImage: 'url(/images/Hero-bg.jpg)',
        minHeight: 'calc(100vh + 80px)'
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Content overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header Text - Mobile responsive */}
          <div className="text-center mb-12 md:mb-16">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-800 drop-shadow-lg px-4">
                Serving Authentic &
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700 drop-shadow-md px-4">
                Creative South Indian Cuisine
              </h2>
            </div>
            
            {/* Decorative line with "Since 43+ Years" */}
            <div className="flex items-center justify-center space-x-4 md:space-x-6 mt-6 md:mt-8 px-4">
              <div className="h-px bg-orange-400 w-16 md:w-24"></div>
              <span className="text-orange-600 text-lg md:text-xl font-semibold italic tracking-wider drop-shadow-sm whitespace-nowrap">
                Since 43+ Years
              </span>
              <div className="h-px bg-orange-400 w-16 md:w-24"></div>
            </div>
          </div>

          {/* Overlapping Images - No containers, pure overlapping with responsive positioning */}
          <div className="relative w-full max-w-4xl mx-auto mb-16 md:mb-20">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] w-full overflow-hidden">
              {slides.map((slide, index) => (
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.alt}
                  style={getImageStyle(index)}
                  className="drop-shadow-lg"
                  onError={(e) => {
                    console.error(`Failed to load image: ${slide.image}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ))}
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-12 h-3 bg-orange-500 rounded-full shadow-lg' 
                      : 'w-3 h-3 bg-gray-400 rounded-full hover:bg-orange-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows - Responsive positioning */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-gray-700 p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 z-40"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-gray-700 p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 z-40"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Action Buttons - Mobile responsive */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4">
            <button 
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
              onClick={() => {
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="flex items-center justify-center space-x-2">
                <span className="text-sm md:text-base">View Menu</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            <button 
              className="group border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg bg-white/80 backdrop-blur-sm"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 8M7 13l2.5 8m0 0h8.5M7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
                <span className="text-sm md:text-base">Order Online</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;