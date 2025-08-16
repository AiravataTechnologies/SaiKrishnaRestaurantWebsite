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
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header Text */}
          <div className="text-center mb-20">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
                Serving Authentic &
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/90 drop-shadow-xl">
                Creative South Indian Cuisine
              </h2>
            </div>
            
            {/* Decorative line with "Since 43+ Years" */}
            <div className="flex items-center justify-center space-x-6 mt-8">
              <div className="h-px bg-orange-400 w-24"></div>
              <span className="text-orange-400 text-xl font-semibold italic tracking-wider drop-shadow-lg">
                Since 43+ Years
              </span>
              <div className="h-px bg-orange-400 w-24"></div>
            </div>
          </div>

          {/* Horizontal Sliding Images Carousel */}
          <div className="relative w-full max-w-6xl mx-auto mb-20">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentSlide * 100}%)`,
                  width: `${slides.length * 100}%`
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="w-full flex-shrink-0"
                    style={{ width: `${100 / slides.length}%` }}
                  >
                    <div className="relative h-96 lg:h-[500px]">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-contain bg-white/5 backdrop-blur-sm"
                        style={{
                          objectFit: 'contain',
                          objectPosition: 'center'
                        }}
                        onError={(e) => {
                          console.error(`Failed to load image: ${slide.image}`);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {/* Optional overlay with title */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                        <h3 className="text-white text-2xl font-semibold text-center drop-shadow-lg">
                          {slide.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-12 h-3 bg-orange-500 rounded-full shadow-lg' 
                      : 'w-3 h-3 bg-white/60 rounded-full hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
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
              className="group border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm bg-white/10"
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