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
      image: "/images/ab2.png",
      alt: "Traditional South Indian Cuisine",
      title: "Authentic Meal",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const getImagePosition = (slideIndex: number) => {
    const relativePosition =
      (slideIndex - currentSlide + slides.length) % slides.length;

    const baseStyles = {
      position: "absolute" as const,
      top: "50%",
      transition: "all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      objectFit: "contain" as const,
      objectPosition: "center" as const,
      borderRadius: "12px", // Added rounded corners
    };

    // Different positioning for mobile vs desktop
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

    if (isMobile) {
      // Mobile positioning - more spread out with better spacing
      switch (relativePosition) {
        case 0: // Far left
          return {
            ...baseStyles,
            left: "3%",
            transform: "translateY(-50%) scale(0.65)",
            zIndex: 15,
            opacity: 0.6,
            width: "clamp(140px, 18vw, 220px)",
            height: "clamp(140px, 18vw, 220px)",
          };
        case 1: // Left
          return {
            ...baseStyles,
            left: "22%",
            transform: "translateY(-50%) scale(0.8)",
            zIndex: 20,
            opacity: 0.8,
            width: "clamp(180px, 22vw, 280px)",
            height: "clamp(180px, 22vw, 280px)",
          };
        case 2: // Center
          return {
            ...baseStyles,
            left: "50%",
            transform: "translateX(-50%) translateY(-50%) scale(1)",
            zIndex: 30,
            opacity: 1,
            width: "clamp(220px, 28vw, 350px)",
            height: "clamp(220px, 28vw, 350px)",
          };
        case 3: // Right
          return {
            ...baseStyles,
            left: "78%",
            transform: "translateX(-100%) translateY(-50%) scale(0.8)",
            zIndex: 20,
            opacity: 0.8,
            width: "clamp(180px, 22vw, 280px)",
            height: "clamp(180px, 22vw, 280px)",
          };
        case 4: // Far right
          return {
            ...baseStyles,
            left: "97%",
            transform: "translateX(-100%) translateY(-50%) scale(0.65)",
            zIndex: 15,
            opacity: 0.6,
            width: "clamp(140px, 18vw, 220px)",
            height: "clamp(140px, 18vw, 220px)",
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
    } else {
      // Desktop positioning - original layout with better sizing
      switch (relativePosition) {
        case 0:
          return {
            ...baseStyles,
            left: "6%",
            transform: "translateY(-50%) scale(0.7)",
            zIndex: 15,
            opacity: 0.7,
            width: "clamp(160px, 20vw, 260px)",
            height: "clamp(160px, 20vw, 260px)",
          };
        case 1:
          return {
            ...baseStyles,
            left: "24%",
            transform: "translateY(-50%) scale(0.85)",
            zIndex: 20,
            opacity: 0.85,
            width: "clamp(200px, 24vw, 300px)",
            height: "clamp(200px, 24vw, 300px)",
          };
        case 2:
          return {
            ...baseStyles,
            left: "50%",
            transform: "translateX(-50%) translateY(-50%) scale(1)",
            zIndex: 30,
            opacity: 1,
            width: "clamp(240px, 30vw, 380px)",
            height: "clamp(240px, 30vw, 380px)",
          };
        case 3:
          return {
            ...baseStyles,
            left: "76%",
            transform: "translateX(-100%) translateY(-50%) scale(0.85)",
            zIndex: 20,
            opacity: 0.85,
            width: "clamp(200px, 24vw, 300px)",
            height: "clamp(200px, 24vw, 300px)",
          };
        case 4:
          return {
            ...baseStyles,
            left: "94%",
            transform: "translateX(-100%) translateY(-50%) scale(0.7)",
            zIndex: 15,
            opacity: 0.7,
            width: "clamp(160px, 20vw, 260px)",
            height: "clamp(160px, 20vw, 260px)",
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
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full bg-cover bg-center bg-no-repeat -mt-20 pt-16"
      style={{
        backgroundImage: "url(/images/Hero-bg.jpg)",
        minHeight: "100vh", // Increased from 90vh
      }}
    >
      {/* Font Loading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Dancing+Script:wght@400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap"
        rel="stylesheet"
      />

      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start py-2 sm:py-4 min-h-[100vh] pt-4 sm:pt-6 md:pt-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full flex flex-col justify-center flex-1">
          {/* Header Text - Reduced margins */}
          <div
            className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2 sm:px-4"
                style={{
                  fontFamily: "Playfair Display, serif",
                  textShadow:
                    "0 0 0 1px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <span className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Where Authentic Tradition
                </span>
              </h1>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2 sm:px-4"
                style={{
                  fontFamily: "Playfair Display, serif",
                  textShadow:
                    "0 0 0 1px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                  Meets Creative Vegetarian Cuisine
                </span>
              </h2>
            </div>

            {/* Decorative line with "Since 10+ Years" - Reduced margin */}
            <div
              className={`flex items-center justify-center space-x-3 sm:space-x-4 md:space-x-6 mt-4 sm:mt-5 px-2 sm:px-4 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="w-12 sm:w-16 md:w-24 h-px bg-gradient-to-r from-green-600 to-orange-500 rounded-full"></div>
              <span
                className="text-orange-600 text-xl sm:text-2xl md:text-3xl font-semibold italic tracking-wider drop-shadow-sm whitespace-nowrap"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                Since 10+ Years
              </span>
              <div className="w-12 sm:w-16 md:w-24 h-px bg-gradient-to-r from-orange-500 to-green-600 rounded-full"></div>
            </div>
          </div>

          {/* All 5 Images Visible - Increased height and better spacing */}
          <div
            className={`relative w-full max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Increased container height to prevent cropping */}
            <div className="relative h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[420px] w-full overflow-visible px-2">
              {slides.map((slide, index) => (
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.alt}
                  style={getImagePosition(index)}
                  className="drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-300"
                  onError={(e) => {
                    console.error(`Failed to load image: ${slide.image}`);
                    e.currentTarget.style.display = "none";
                  }}
                />
              ))}
            </div>

            {/* Slide Indicators - Better spacing */}
            <div className="flex justify-center space-x-4 mt-8 sm:mt-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? "w-4 h-4 bg-orange-500 rounded-full shadow-lg scale-125"
                      : "w-4 h-4 bg-gray-400 rounded-full hover:bg-orange-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Single Action Button - Better spacing */}
          <div
            className={`flex justify-center px-2 sm:px-4 pb-6 transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button
              className="group bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg border-2 border-white text-sm"
              style={{ fontFamily: "Poppins, sans-serif" }}
              onClick={() => {
                document
                  .getElementById("menu")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>View Our Menu</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
