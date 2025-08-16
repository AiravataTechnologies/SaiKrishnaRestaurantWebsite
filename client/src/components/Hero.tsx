import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 0,
      image: '/images/hero1.png',
      alt: 'Traditional South Indian Vada',
      title: 'Crispy Vada',
      position: 'left'
    },
    {
      id: 1,
      image: '/images/hero2.png',
      alt: 'Authentic South Indian Thali',
      title: 'Complete Thali',
      position: 'center'
    },
    {
      id: 2,
      image: '/images/hero3.png',
      alt: 'Fresh Idli and Sambar',
      title: 'Soft Idli',
      position: 'right'
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
      {/* Enhanced Background matching reference */}
      <div className="absolute inset-0">
        {/* Primary cream to green gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-orange-100 to-green-700"></div>
        
        {/* Curved design elements like in reference */}
        <div className="absolute inset-0">
          {/* Top curved section - cream/beige */}
          <div className="absolute top-0 left-0 right-0 h-3/5 bg-gradient-to-b from-orange-50 to-orange-100"></div>
          
          {/* Curved transition */}
          <svg 
            className="absolute top-1/2 left-0 right-0 w-full h-64 z-10" 
            viewBox="0 0 1200 300" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,150 Q300,50 600,100 Q900,150 1200,80 L1200,300 L0,300 Z" 
              fill="url(#curveGradient)"
            />
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="50%" stopColor="#fdba74" />
                <stop offset="100%" stopColor="#15803d" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Bottom green section */}
          <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-b from-green-600 to-green-800"></div>
        </div>
        
        {/* Decorative pattern overlay matching reference style */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 right-10 w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <pattern id="traditional" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white"/>
                <path d="M5,5 L15,15 M15,5 L5,15" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100" height="100" fill="url(#traditional)"/>
            </svg>
          </div>
        </div>

        {/* Palm leaf decoration like in reference */}
        <div className="absolute top-20 left-0 z-20 opacity-80">
          <svg width="200" height="150" viewBox="0 0 200 150" className="text-green-600">
            <path d="M10,140 Q50,20 100,50 Q150,80 190,10" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M20,130 Q40,60 70,80 Q100,100 130,40" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M30,120 Q50,80 80,90 Q110,100 140,60" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Content with reference-style layout */}
      <div className="relative z-30 min-h-screen flex flex-col items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header Text matching reference */}
          <div className="text-center mb-16">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-800">
                Serving Authentic &
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700">
                Creative South Indian Cuisine
              </h2>
            </div>
            
            {/* Decorative line with "Since 43+ Years" */}
            <div className="flex items-center justify-center space-x-6 mt-8">
              <div className="h-px bg-orange-400 w-24"></div>
              <span className="text-orange-600 text-xl font-semibold italic tracking-wider">
                Since 43+ Years
              </span>
              <div className="h-px bg-orange-400 w-24"></div>
            </div>
          </div>

          {/* Food Images in Curved Layout like Reference */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-5xl h-80 lg:h-96">
              
              {/* Curved arrangement of food images */}
              <div className="absolute inset-0 flex items-end justify-center">
                
                {/* Left Image - Vada/Round items */}
                <div 
                  className={`absolute left-0 bottom-0 transition-all duration-1000 ease-in-out ${
                    currentSlide === 0 
                      ? 'w-72 h-72 z-30 scale-110 -rotate-6' 
                      : 'w-56 h-56 z-20 scale-90 opacity-75'
                  }`}
                  style={{ transform: `translateX(10%) translateY(-20%) ${currentSlide === 0 ? 'scale(1.1) rotate(-6deg)' : 'scale(0.9)'}` }}
                >
                  <img
                    src={slides[0].image}
                    alt={slides[0].alt}
                    className="w-full h-full object-cover rounded-full shadow-2xl"
                    data-testid="img-hero-1"
                  />
                  {currentSlide === 0 && (
                    <div className="absolute inset-0 ring-4 ring-orange-400 rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Center Image - Main Thali */}
                <div 
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-in-out ${
                    currentSlide === 1 
                      ? 'w-80 h-64 z-30 scale-115' 
                      : 'w-64 h-48 z-20 scale-90 opacity-75'
                  }`}
                  style={{ transform: `translateX(-50%) translateY(-10%) ${currentSlide === 1 ? 'scale(1.15)' : 'scale(0.9)'}` }}
                >
                  <img
                    src={slides[1].image}
                    alt={slides[1].alt}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    data-testid="img-hero-2"
                  />
                  {currentSlide === 1 && (
                    <div className="absolute inset-0 ring-4 ring-orange-400 rounded-2xl animate-pulse"></div>
                  )}
                </div>

                {/* Right Image - Idli/Round items */}
                <div 
                  className={`absolute right-0 bottom-0 transition-all duration-1000 ease-in-out ${
                    currentSlide === 2 
                      ? 'w-72 h-72 z-30 scale-110 rotate-6' 
                      : 'w-56 h-56 z-20 scale-90 opacity-75'
                  }`}
                  style={{ transform: `translateX(-10%) translateY(-20%) ${currentSlide === 2 ? 'scale(1.1) rotate(6deg)' : 'scale(0.9)'}` }}
                >
                  <img
                    src={slides[2].image}
                    alt={slides[2].alt}
                    className="w-full h-full object-cover rounded-full shadow-2xl"
                    data-testid="img-hero-3"
                  />
                  {currentSlide === 2 && (
                    <div className="absolute inset-0 ring-4 ring-orange-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Active image title overlay */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-40">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg border border-orange-200">
                  <h3 className="text-green-800 font-bold text-lg text-center">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-orange-600 text-sm text-center">
                    Authentic South Indian Delicacy
                  </p>
                </div>
              </div>
              
              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-8 h-3 bg-orange-500 rounded-full' 
                        : 'w-3 h-3 bg-white/60 rounded-full hover:bg-white/80'
                    }`}
                    data-testid={`indicator-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-6 mt-20">
            <button 
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
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
              className="group border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
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

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;