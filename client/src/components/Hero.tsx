import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 0,
      image: '/images/hero1.png',
      alt: 'Traditional South Indian Thali'
    },
    {
      id: 1,
      image: '/images/hero2.png',
      alt: 'Authentic South Indian Dishes'
    },
    {
      id: 2,
      image: '/images/hero3.png',
      alt: 'Fresh South Indian Cuisine'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-green-600 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        {/* Curved decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full transform -translate-x-48 translate-y-48"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
      </div>

      {/* Content with centered layout */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Top Content - Text */}
          <div className="text-center text-white mb-16">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Serving Authentic &
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-400">
                Creative South Indian Cuisine
              </h2>
            </div>
            
            <div className="flex items-center justify-center space-x-4 mt-8">
              <div className="h-px bg-orange-400 w-16"></div>
              <span className="text-orange-400 text-lg font-semibold tracking-wide italic">Since 43+ Years</span>
              <div className="h-px bg-orange-400 w-16"></div>
            </div>
          </div>

          {/* Centered Image Carousel - Similar to reference */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-4xl h-80 lg:h-96">
              {/* Container for all three images in horizontal layout */}
              <div className="flex justify-center items-center h-full space-x-8">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`relative transition-all duration-1000 ease-in-out ${
                      index === currentSlide 
                        ? 'w-80 h-64 lg:w-96 lg:h-72 z-30 scale-110' 
                        : 'w-64 h-48 lg:w-72 lg:h-56 z-20 scale-95 opacity-70'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover rounded-2xl shadow-2xl"
                      data-testid={`img-hero-${index + 1}`}
                    />
                    {/* Overlay for active image */}
                    {index === currentSlide && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-orange-400 scale-125' : 'bg-white/50'
                    }`}
                    data-testid={`indicator-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex justify-center space-x-4 mt-16">
            <button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              data-testid="button-view-menu"
            >
              View Menu
            </button>
            <button 
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              data-testid="button-order-online"
            >
              Order Online
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;