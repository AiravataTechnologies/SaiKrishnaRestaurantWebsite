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
      text: "What an incredible dining experience! I've been searching for authentic South Indian cuisine in Mumbai and finally found this gem. The dosas are perfectly crispy with the right amount of ghee, and the sambhar has that homemade taste that reminds me of my grandmother's cooking. The coconut chutney is fresh and flavorful. The staff is extremely courteous and knowledgeable about the menu. The ambiance is warm and inviting, perfect for both family dinners and casual meetings with friends. I particularly loved their filter coffee - it's strong, aromatic, and served in traditional steel tumblers. Will definitely be coming back soon!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Arjun Sharma",
      text: "Absolutely phenomenal breakfast experience! Located conveniently at Kemp's Corner near Grant Road, this restaurant has exceeded all my expectations. The masala dosa here is hands down the best I've had in Mumbai - crispy, golden brown exterior with perfectly spiced potato filling. The idli is soft and fluffy, paired with multiple types of chutneys that complement each other beautifully. What impressed me most was their attention to traditional cooking methods. You can taste the authenticity in every bite. The service is prompt, staff is friendly, and the prices are very reasonable considering the quality. This place has become my go-to spot for South Indian food.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Kavya Iyer",
      text: "Finally discovered a pure vegetarian South Indian restaurant that serves food exactly like back home in Kerala! As someone who has been living in Mumbai for years, finding authentic South Indian cuisine was always a challenge until I found this place. Their appam with stew is exceptional, the rava dosa is crispy and light, and don't even get me started on their rasam - it's perfectly tangy and spiced. The restaurant maintains high standards of cleanliness and hygiene. The traditional banana leaf serving adds to the authentic experience. The owner personally ensures every customer is satisfied. This is definitely one of the very few genuine South Indian restaurants near Grant Road area.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Priya Nair",
      text: "This restaurant has completely won my heart! The dosas here are absolutely divine - perfectly golden, crispy on the outside and soft on the inside. Their filter coffee is exactly how it should be - strong, aromatic, and served piping hot in traditional steel glasses. The ambiance strikes the perfect balance between traditional and modern, making it ideal for family dining, casual dates, or even business meetings. What I love most is their commitment to authenticity - every dish tastes like it's been prepared with love and traditional recipes passed down through generations. The staff goes above and beyond to ensure you have a memorable dining experience. Highly recommended for anyone craving authentic South Indian flavors in Mumbai!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Rahul Krishnan",
      text: "Exceptional dining experience from start to finish! The sambar here is outstanding - rich, flavorful, and perfectly balanced with the right mix of vegetables and spices. The coconut chutney is fresh and creamy, clearly made in-house daily. What sets this place apart is their attention to detail and commitment to quality. The staff is incredibly courteous, well-trained, and always ready to recommend dishes based on your preferences. The service is remarkably quick without compromising on quality. The restaurant maintains excellent hygiene standards, which is very important to me. The pricing is very fair for the quality and portion sizes they offer. I've already recommended this place to all my friends and colleagues. Will definitely be a regular customer!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format",
    },
  ];

  // Intersection Observer for lazy animations
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
        className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 ${
          index < rating
            ? "text-yellow-400 fill-current transform hover:scale-110"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="py-8 sm:py-12 bg-gradient-to-br from-green-800 via-green-700 to-green-900 relative overflow-hidden"
    >
      {/* Simplified decorative elements */}
      <div
        className={`absolute top-4 left-4 w-12 h-12 sm:w-20 sm:h-20 bg-green-600 rounded-full opacity-20 transition-all duration-1000 ${
          isVisible ? "animate-pulse scale-100" : "scale-0"
        }`}
      ></div>

      <div
        className={`absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-green-600 rounded-full opacity-20 transform translate-x-10 translate-y-10 transition-all duration-1500 ${
          isVisible ? "scale-100" : "scale-0"
        }`}
      ></div>

      <div
        className={`absolute top-1/4 right-4 w-6 h-6 sm:w-12 sm:h-12 bg-orange-500 rounded-full opacity-30 transition-all duration-1200 ${
          isVisible ? "animate-bounce scale-100" : "scale-0"
        }`}
      ></div>

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Compact content box */}
        <div
          className={`bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-2xl border border-white/20 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          {/* Compact header */}
          <div className="text-center mb-6 sm:mb-8">
            <div
              className={`flex justify-center mb-2 transition-all duration-1000 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="text-orange-500 text-xl sm:text-2xl">✦ ❋ ✦</div>
            </div>

            <h2
              className={`text-xl sm:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2 transition-all duration-1000 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Customer Reviews
            </h2>
          </div>

          {/* Compact review display */}
          <div
            className={`relative max-w-4xl mx-auto mb-4 sm:mb-6 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="overflow-hidden rounded-lg sm:rounded-xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-2 sm:px-4"
                  >
                    <div className="bg-gradient-to-br from-gray-50/80 to-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg border border-gray-100/50 transform transition-all duration-500 hover:shadow-xl hover:scale-[1.02] min-h-[320px] sm:min-h-[350px] flex flex-col justify-center">
                      <div className="text-center">
                        {/* Profile Image */}
                        <div className="relative mb-3 sm:mb-4 flex justify-center">
                          <div className="relative">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-3 border-orange-200 shadow-lg transition-all duration-500 hover:scale-110"
                            />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-white"></div>
                          </div>
                        </div>

                        {/* Compact quote icon */}
                        <div className="relative mb-3 sm:mb-4">
                          <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500/60 mx-auto" />
                        </div>

                        {/* Review text */}
                        <p className="text-gray-700 italic leading-relaxed text-sm sm:text-base mb-3 sm:mb-4 font-medium px-1 max-h-24 sm:max-h-28 overflow-y-auto">
                          "{review.text}"
                        </p>

                        {/* Compact star rating */}
                        <div className="flex justify-center mb-2 sm:mb-3 space-x-1">
                          {renderStars(review.rating)}
                        </div>

                        {/* Author name */}
                        <h4 className="text-base sm:text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                          {review.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compact navigation arrows */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-300 z-10"
            >
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>

            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-300 z-10"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Compact dot indicators */}
          <div className="flex justify-center space-x-2 mb-3 sm:mb-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none transform hover:scale-125 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 scale-125 shadow-md"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                <span className="sr-only">Go to review {index + 1}</span>
              </button>
            ))}
          </div>

          {/* Compact auto-play indicator and progress */}
          <div className="text-center">
            <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs mb-2 bg-green-100/80 text-green-700">
              <div
                className={`w-1.5 h-1.5 rounded-full mr-1 ${isAutoPlaying ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}
              ></div>
              <span>{isAutoPlaying ? "Auto" : "Paused"}</span>
            </div>

            {/* Compact progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
              <div
                className="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${((currentIndex + 1) / reviews.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
