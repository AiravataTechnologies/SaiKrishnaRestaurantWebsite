import React, { useState, useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const slides = [
    {
      id: 0,
      image: "/images/hero1.png",
      alt: "Traditional South Indian Vada",
      title: "Crispy Vada",
    },
    {
      id: 1,
      image: "/images/hero2.png",
      alt: "Authentic South Indian Thali",
      title: "Complete Thali",
    },
    {
      id: 2,
      image: "/images/Hero3.png",
      alt: "Fresh Idli and Sambar",
      title: "Soft Idli",
    },
    {
      id: 3,
      image: "/images/hero4.png",
      alt: "Delicious South Indian Speciality",
      title: "Special Dish",
    },
    {
      id: 4,
      image: "/images/hero5.png",
      alt: "Traditional South Indian Cuisine",
      title: "Authentic Meal",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Longer interval for smoother experience

    return () => clearInterval(timer);
  }, [slides.length]);

  // Show all 5 images at once with smooth sliding transitions
  const getImagePosition = (slideIndex: number) => {
    const relativePosition =
      (slideIndex - currentSlide + slides.length) % slides.length;

    const baseStyles = {
      position: "absolute" as const,
      top: "50%",
      transition: "all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      objectFit: "contain" as const,
      objectPosition: "center" as const,
    };

    // Position all 5 images across the screen using consistent left positioning - centered vertically
    switch (relativePosition) {
      case 0: // Far left
        return {
          ...baseStyles,
          left: "5%",
          transform: "translateY(-50%) scale(0.7)",
          zIndex: 15,
          opacity: 0.7,
          width: "clamp(150px, 18vw, 250px)",
          height: "clamp(150px, 18vw, 250px)",
        };
      case 1: // Left
        return {
          ...baseStyles,
          left: "22.5%",
          transform: "translateY(-50%) scale(0.85)",
          zIndex: 20,
          opacity: 0.85,
          width: "clamp(180px, 22vw, 280px)",
          height: "clamp(180px, 22vw, 280px)",
        };
      case 2: // Center (main focus)
        return {
          ...baseStyles,
          left: "50%",
          transform: "translateX(-50%) translateY(-50%) scale(1)",
          zIndex: 30,
          opacity: 1,
          width: "clamp(220px, 28vw, 350px)",
          height: "clamp(220px, 28vw, 350px)",
        };
      case 3: // Right - using left positioning instead of right
        return {
          ...baseStyles,
          left: "77.5%",
          transform: "translateX(-100%) translateY(-50%) scale(0.85)",
          zIndex: 20,
          opacity: 0.85,
          width: "clamp(180px, 22vw, 280px)",
          height: "clamp(180px, 22vw, 280px)",
        };
      case 4: // Far right - using left positioning instead of right
        return {
          ...baseStyles,
          left: "95%",
          transform: "translateX(-100%) translateY(-50%) scale(0.7)",
          zIndex: 15,
          opacity: 0.7,
          width: "clamp(150px, 18vw, 250px)",
          height: "clamp(150px, 18vw, 250px)",
        };
      default:
        return {
          ...baseStyles,
          left: "50%",
          transform: "translateX(-50%) translateY(-50%) scale(0)",
          zIndex: 10,
          opacity: 0,
          width: "0px",
          height: "0px",
        };
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full bg-cover bg-center bg-no-repeat -mt-20 pt-20"
      style={{
        backgroundImage: "url(/images/Hero-bg.jpg)",
        minHeight: "60vh",
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start py-8 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header Text - Mobile responsive */}
          <div
            className={`text-center mb-2 md:mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-1 md:space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight gradient-text px-4">
                Serving Authentic &
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight gradient-text px-4">
                Creative Vegetarian Cuisine
              </h2>
            </div>

            {/* Decorative line with "Since 43+ Years" */}
            <div
              className={`flex items-center justify-center space-x-4 md:space-x-6 mt-2 md:mt-3 px-4 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="h-px bg-orange-400 w-16 md:w-24"></div>
              <span className="text-orange-600 text-lg md:text-xl font-semibold italic tracking-wider drop-shadow-sm whitespace-nowrap">
                Since 10+ Years
              </span>
              <div className="h-px bg-orange-400 w-16 md:w-24"></div>
            </div>
          </div>

          {/* All 5 Images Visible - Rotating Focus */}
          <div
            className={`relative w-full max-w-7xl mx-auto mb-8 md:mb-12 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative h-48 sm:h-60 md:h-72 lg:h-80 w-full overflow-hidden">
              {slides.map((slide, index) => (
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.alt}
                  style={getImagePosition(index)}
                  className="drop-shadow-lg"
                  onError={(e) => {
                    console.error(`Failed to load image: ${slide.image}`);
                    e.currentTarget.style.display = "none";
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
                      ? "w-12 h-3 bg-orange-500 rounded-full shadow-lg"
                      : "w-3 h-3 bg-gray-400 rounded-full hover:bg-orange-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Action Buttons - Mobile responsive */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4">
            <button
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
              onClick={() => {
                document
                  .getElementById("menu")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="flex items-center justify-center space-x-2">
                <span className="text-sm md:text-base">View Menu</span>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
            <button
              className="group border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg bg-white/80 backdrop-blur-sm"
              onClick={() => {
                document
                  .getElementById("online-ordering")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="flex items-center justify-center space-x-2">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                  />
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
