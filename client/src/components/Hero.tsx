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
      image: '/images/hero3.png',
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

  // Get the order of images based on current slide
  const getImageOrder = () => {
    const order = [];
    for (let i = 0; i < slides.length; i++) {
      const index = (currentSlide + i) % slides.length;
      order.push(slides[index]);
    }
    return order;
  };

  const orderedSlides = getImageOrder();

  return (
    <section 
      id="home" 
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/Hero-bg.jpg)',
        height: 'fit-content',
        minHeight: '100vh'
      }}
    >
      {/* Content overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header Text */}
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

          {/* Food Images with Rotating Positions */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-5xl h-80 lg:h-96">
              
              {/* Three images in rotating positions */}
              <div className="absolute inset-0 flex items-center justify-center">
                
                {/* Left Image (position 0) */}
                <div 
                  className="absolute transition-all duration-1000 ease-in-out"
                  style={{
                    left: '10%',
                    top: '50%',
                    transform: 'translateY(-50%) scale(0.8)',
                    zIndex: 20,
                    width: '240px',
                    height: '240px'
                  }}
                >
                  <img
                    src={orderedSlides[0]?.image}
                    alt={orderedSlides[0]?.alt}
                    className="w-full h-full object-cover shadow-2xl"
                    data-testid="img-hero-left"
                  />
                </div>

                {/* Center Image (position 1) - Always zoomed */}
                <div 
                  className="absolute transition-all duration-1000 ease-in-out"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translateX(-50%) translateY(-50%) scale(1.2)',
                    zIndex: 30,
                    width: '320px',
                    height: '320px'
                  }}
                >
                  <img
                    src={orderedSlides[1]?.image}
                    alt={orderedSlides[1]?.alt}
                    className="w-full h-full object-cover shadow-2xl"
                    data-testid="img-hero-center"
                  />
                </div>

                {/* Right Image (position 2) */}
                <div 
                  className="absolute transition-all duration-1000 ease-in-out"
                  style={{
                    right: '10%',
                    top: '50%',
                    transform: 'translateY(-50%) scale(0.8)',
                    zIndex: 20,
                    width: '240px',
                    height: '240px'
                  }}
                >
                  <img
                    src={orderedSlides[2]?.image}
                    alt={orderedSlides[2]?.alt}
                    className="w-full h-full object-cover shadow-2xl"
                    data-testid="img-hero-right"
                  />
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
    </section>
  );
};

export default Hero;