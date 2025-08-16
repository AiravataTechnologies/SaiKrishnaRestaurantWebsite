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
          
          {/* Header Text */}
          <div className="text-center mb-16">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-800 drop-shadow-lg">
                Serving Authentic &
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700 drop-shadow-md">
                Creative South Indian Cuisine
              </h2>
            </div>
            
            {/* Decorative line with "Since 43+ Years" */}
            <div className="flex items-center justify-center space-x-6 mt-8">
              <div className="h-px bg-orange-400 w-24"></div>
              <span className="text-orange-600 text-xl font-semibold italic tracking-wider drop-shadow-sm">
                Since 43+ Years
              </span>
              <div className="h-px bg-orange-400 w-24"></div>
            </div>
          </div>

          {/* Overlapping Images Container */}
          <div className="relative w-full max-w-4xl mx-auto mb-20 flex justify-center">
            <div className="relative h-96 lg:h-[500px] w-[600px]">
              
              {/* All images in one container that slides together */}
              <div 
                className="absolute inset-0 transition-transform duration-1500 ease-in-out"
                style={{
                  transform: `translateX(${-currentSlide * 120}px)` // Slide all images together
                }}
              >
                {slides.map((slide, index) => {
                  // Calculate z-index and scale based on current slide
                  const isActive = index === currentSlide;
                  const isNext = index === (currentSlide + 1) % slides.length;
                  const isPrev = index === (currentSlide - 1 + slides.length) % slides.length;
                  
                  let zIndex = 10;
                  let scale = 0.85;
                  let opacity = 0.7;
                  let translateX = index * 120; // Base horizontal offset
                  
                  if (isActive) {
                    zIndex = 30;
                    scale = 1;
                    opacity = 1;
                  } else if (isNext || isPrev) {
                    zIndex = 20;
                    scale = 0.9;
                    opacity = 0.8;
                  }

                  return (
                    <img
                      key={slide.id}
                      src={slide.image}
                      alt={slide.alt}
                      className="absolute transition-all duration-1500 ease-in-out"
                      style={{
                        left: `${translateX}px`,
                        top: '50%',
                        transform: `translateY(-50%) scale(${scale})`,
                        width: '400px',
                        height: '400px',
                        objectFit: 'contain',
                        objectPosition: 'center',
                        zIndex: zIndex,
                        opacity: opacity,
                        transformOrigin: 'center'
                      }}
                      onError={(e) => {
                        console.error(`Failed to load image: ${slide.image}`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  );
                })}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-gray-700 p-3 rounded-full transition-all duration-300 hover:scale-110 z-40"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-gray-700 p-3 rounded-full transition-all duration-300 hover:scale-110 z-40"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mb-12">
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

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
              onClick={() => {
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>View Menu</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            <button 
              className="group border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg bg-white/80 backdrop-blur-sm"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 8M7 13l2.5 8m0 0h8.5M7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
                <span>Order Online</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;