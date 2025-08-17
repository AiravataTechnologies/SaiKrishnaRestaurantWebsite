import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      name: "Sejal Patel",
      text: "What an incredible dining experience! I've been searching for authentic South Indian cuisine in Mumbai and finally found this gem. The dosas are perfectly crispy with the right amount of ghee, and the sambhar has that homemade taste that reminds me of my grandmother's cooking.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Arjun Sharma",
      text: "Absolutely phenomenal breakfast experience! Located conveniently at Kemp's Corner near Grant Road, this restaurant has exceeded all my expectations. The masala dosa here is hands down the best I've had in Mumbai - crispy, golden brown exterior with perfectly spiced potato filling.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Kavya Iyer",
      text: "Finally discovered a pure vegetarian South Indian restaurant that serves food exactly like back home in Kerala! Their appam with stew is exceptional, the rava dosa is crispy and light, and don't even get me started on their rasam - it's perfectly tangy and spiced.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Priya Nair",
      text: "This restaurant has completely won my heart! The dosas here are absolutely divine - perfectly golden, crispy on the outside and soft on the inside. Their filter coffee is exactly how it should be - strong, aromatic, and served piping hot in traditional steel glasses.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Rahul Krishnan",
      text: "Exceptional dining experience from start to finish! The sambar here is outstanding - rich, flavorful, and perfectly balanced with the right mix of vegetables and spices. The coconut chutney is fresh and creamy, clearly made in-house daily.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format",
    },
  ];

  // Font Loading
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Dancing+Script:wght@400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length, isAutoPlaying]);

  const nextReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToReview = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 transition-all duration-300 ${
          index < rating
            ? "text-orange-500 fill-current transform hover:scale-110"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      <div
        className={`absolute top-4 left-4 w-16 h-16 sm:w-20 sm:h-20 bg-green-600/20 rounded-full transition-all duration-1000 ${
          isVisible ? "animate-pulse scale-100" : "scale-0"
        }`}
      />
      <div
        className={`absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-orange-500/20 rounded-full transform translate-x-10 translate-y-10 transition-all duration-1500 ${
          isVisible ? "scale-100" : "scale-0"
        }`}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 bg-clip-text text-transparent">
              Customer
            </span>
            <span
              className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent ml-3"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              Reviews
            </span>
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-orange-500 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full mx-3 animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-green-600 rounded-full"></div>
          </div>
        </div>

        {/* Reviews Display */}
        <div
          className={`bg-white/80 backdrop-blur-lg rounded-2xl p-4 sm:p-8 shadow-xl border border-white/20 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          {/* Review Cards Container */}
          <div className="relative mb-6 sm:mb-8">
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-2 sm:px-4"
                  >
                    <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100/50 transform transition-all duration-500 hover:shadow-xl hover:scale-[1.01] min-h-80 sm:min-h-96 flex flex-col justify-between">
                      {/* Profile Section */}
                      <div className="text-center mb-4">
                        <div className="relative mb-3 flex justify-center">
                          <div className="relative">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-3 border-orange-200 shadow-lg transition-all duration-500 hover:scale-110"
                            />
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                          </div>
                        </div>
                        <h4
                          className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2"
                          style={{ fontFamily: "Merriweather, serif" }}
                        >
                          {review.name}
                        </h4>
                        <div className="flex justify-center mb-3 space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>

                      {/* Quote Icon */}
                      <div className="text-center mb-3">
                        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500/60 mx-auto" />
                      </div>

                      {/* Review Text */}
                      <div className="flex-1 flex items-start justify-center">
                        <p
                          className="text-gray-700 italic leading-relaxed text-sm sm:text-base font-medium text-center overflow-y-auto max-h-32 sm:max-h-40 scrollbar-hide"
                          style={{ fontFamily: "Crimson Text, serif" }}
                        >
                          "{review.text}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-300 z-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-300 z-10"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-2 mb-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none transform hover:scale-125 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 scale-125 shadow-md"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                <span className="sr-only">Go to review {index + 1}</span>
              </button>
            ))}
          </div>

          {/* Auto-play Status & Progress */}
          <div className="text-center">
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-xs mb-3 bg-green-100/80 text-green-700"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <div
                className={`w-2 h-2 rounded-full mr-2 ${isAutoPlaying ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}
              />
              <span>{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
              <div
                className="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${((currentIndex + 1) / reviews.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS to hide scrollbars */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* Internet Explorer 10+ */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      `}</style>
    </section>
  );
};

export default Reviews;
