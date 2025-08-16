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

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Authentic <span className="text-orange-400">South Indian</span> Cuisine
                </h1>
                <p className="text-xl sm:text-2xl text-green-100 leading-relaxed">
                  Experience the true flavors of South India at Sai Krishna Restaurant
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="h-px bg-orange-400 w-16"></div>
                <span className="text-orange-400 text-lg font-semibold tracking-wide">Since 43+ Years</span>
                <div className="h-px bg-orange-400 w-16"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-green-100">Traditional recipes passed down through generations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-green-100">Fresh ingredients sourced daily</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-green-100">Authentic flavors in every dish</span>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-4">
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

            {/* Right - Image Carousel */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentSlide 
                        ? 'opacity-100 scale-110 z-30' 
                        : index === (currentSlide + 1) % slides.length
                        ? 'opacity-70 scale-95 z-20 translate-x-4'
                        : 'opacity-40 scale-90 z-10 translate-x-8'
                    }`}
                    style={{
                      transform: `
                        ${index === currentSlide ? 'translateX(0) scale(1.1)' : 
                          index === (currentSlide + 1) % slides.length ? 'translateX(20px) scale(0.95)' :
                          'translateX(40px) scale(0.9)'}
                      `
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover rounded-2xl shadow-2xl"
                      data-testid={`img-hero-${index + 1}`}
                    />
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