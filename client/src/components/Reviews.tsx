// import React, { useState, useEffect, useRef } from "react";
// import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

// const Reviews: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isVisible, setIsVisible] = useState(false);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const reviews = [
//     {
//       name: "Sejal",
//       text: "It was good south indian cuisine restaurant. Food is really good in taste.",
//       rating: 5,
//     },
//     {
//       name: "Mohit Khare",
//       text: "Absolutely incredible breakfast experience. Situated at Kemp's Corner in Grant Road, this place served me one of the best and authentic south Indian cuisine ever.",
//       rating: 5,
//     },
//     {
//       name: "SIDDHESH GANDHE",
//       text: "One of very few Vegetarian South Indian restaurant near Grant Road.",
//       rating: 5,
//     },
//     {
//       name: "Priya Sharma",
//       text: "Amazing dosas and filter coffee! The ambiance is perfect for family dining. Highly recommended for authentic South Indian flavors.",
//       rating: 5,
//     },
//     {
//       name: "Rahul Menon",
//       text: "The sambar and coconut chutney here are exceptional. Staff is courteous and the service is quick. Will definitely visit again!",
//       rating: 5,
//     },
//   ];

//   // Intersection Observer for lazy animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated) {
//           setIsVisible(true);
//           setHasAnimated(true);
//         }
//       },
//       { threshold: 0.2 },
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, [hasAnimated]);

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === reviews.length - 1 ? 0 : prevIndex + 1,
//       );
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [reviews.length, isAutoPlaying]);

//   const nextReview = () => {
//     setIsAutoPlaying(false);
//     setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
//     setTimeout(() => setIsAutoPlaying(true), 8000);
//   };

//   const prevReview = () => {
//     setIsAutoPlaying(false);
//     setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
//     setTimeout(() => setIsAutoPlaying(true), 8000);
//   };

//   const goToReview = (index: number) => {
//     setIsAutoPlaying(false);
//     setCurrentIndex(index);
//     setTimeout(() => setIsAutoPlaying(true), 8000);
//   };

//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <Star
//         key={index}
//         className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
//           index < rating
//             ? "text-yellow-400 fill-current transform hover:scale-110"
//             : "text-gray-300"
//         }`}
//       />
//     ));
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="reviews"
//       className="py-12 sm:py-20 bg-gradient-to-br from-green-800 via-green-700 to-green-900 relative overflow-hidden min-h-screen"
//     >
//       {/* Enhanced animated decorative elements */}
//       <div
//         className={`absolute top-10 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-green-600 rounded-full opacity-20 transition-all duration-1000 ${
//           isVisible ? "animate-pulse scale-100" : "scale-0"
//         }`}
//       ></div>

//       <div
//         className={`absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-green-600 rounded-full opacity-20 transform translate-x-16 translate-y-16 sm:translate-x-32 sm:translate-y-32 transition-all duration-1500 ${
//           isVisible ? "scale-100" : "scale-0"
//         }`}
//       ></div>

//       <div
//         className={`absolute top-1/3 right-4 sm:right-20 w-8 h-8 sm:w-16 sm:h-16 bg-orange-500 rounded-full opacity-30 transition-all duration-1200 ${
//           isVisible ? "animate-bounce scale-100" : "scale-0"
//         }`}
//         style={{ animationDelay: "2s" }}
//       ></div>

//       <div
//         className={`absolute bottom-1/4 left-4 sm:left-20 w-12 h-12 sm:w-24 sm:h-24 bg-yellow-400 rounded-full opacity-20 transition-all duration-1300 ${
//           isVisible ? "animate-pulse scale-100" : "scale-0"
//         }`}
//         style={{ animationDelay: "1s" }}
//       ></div>

//       {/* Floating particles */}
//       {[...Array(6)].map((_, i) => (
//         <div
//           key={i}
//           className={`absolute w-2 h-2 bg-white rounded-full opacity-30 transition-all duration-2000 ${
//             isVisible ? "animate-ping scale-100" : "scale-0"
//           }`}
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${i * 0.5}s`,
//             animationDuration: "3s",
//           }}
//         ></div>
//       ))}

//       <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
//         {/* Enhanced white content box with lazy animation */}
//         <div
//           className={`bg-white/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-2xl border border-white/20 transition-all duration-1000 transform ${
//             isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
//           }`}
//         >
//           {/* Header with staggered animations */}
//           <div className="text-center mb-12 sm:mb-16">
//             <div
//               className={`flex justify-center mb-4 sm:mb-6 transition-all duration-1000 transform ${
//                 isVisible
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-8 opacity-0"
//               }`}
//               style={{ transitionDelay: "0.2s" }}
//             >
//               <div className="text-orange-500 text-2xl sm:text-4xl animate-pulse">
//                 ✦ ❋ ✦
//               </div>
//             </div>

//             <h2
//               className={`text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 sm:mb-6 transition-all duration-1000 transform ${
//                 isVisible
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-8 opacity-0"
//               }`}
//               style={{ transitionDelay: "0.4s" }}
//             >
//               Customer Reviews
//             </h2>

//             <div
//               className={`flex justify-center mb-4 sm:mb-6 transition-all duration-1000 transform ${
//                 isVisible
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-8 opacity-0"
//               }`}
//               style={{ transitionDelay: "0.6s" }}
//             >
//               <div
//                 className="text-orange-500 text-2xl sm:text-4xl animate-pulse"
//                 style={{ animationDelay: "0.5s" }}
//               >
//                 ❋ ✦ ❋
//               </div>
//             </div>
//           </div>

//           {/* Mobile-optimized review display */}
//           <div
//             className={`relative max-w-5xl mx-auto mb-8 sm:mb-12 transition-all duration-1000 transform ${
//               isVisible
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-12 opacity-0"
//             }`}
//             style={{ transitionDelay: "0.8s" }}
//           >
//             <div className="overflow-hidden rounded-xl sm:rounded-2xl">
//               <div
//                 className="flex transition-transform duration-700 ease-in-out"
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//               >
//                 {reviews.map((review, index) => (
//                   <div
//                     key={index}
//                     className="w-full flex-shrink-0 px-2 sm:px-4"
//                   >
//                     <div className="bg-gradient-to-br from-gray-50/80 to-white/90 backdrop-blur-sm p-6 sm:p-12 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 transform transition-all duration-500 hover:shadow-xl hover:scale-[1.02] min-h-[300px] sm:min-h-[350px] flex flex-col justify-center">
//                       <div className="text-center">
//                         {/* Animated quote icon */}
//                         <div className="relative mb-6 sm:mb-8 transform transition-all duration-700 hover:scale-110">
//                           <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500/20 mx-auto" />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-orange-500 animate-pulse" />
//                           </div>
//                         </div>

//                         {/* Review text with typing animation effect */}
//                         <p className="text-gray-700 italic leading-relaxed text-base sm:text-lg mb-6 sm:mb-8 font-medium px-2 transform transition-all duration-700 hover:text-gray-800">
//                           "{review.text}"
//                         </p>

//                         {/* Animated star rating */}
//                         <div className="flex justify-center mb-4 sm:mb-6 space-x-1 transform transition-all duration-500">
//                           {renderStars(review.rating)}
//                         </div>

//                         {/* Author name with gradient and hover effects */}
//                         <h4 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent transform transition-all duration-500 hover:scale-105">
//                           {review.name}
//                         </h4>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Mobile-optimized navigation arrows */}
//             <button
//               onClick={prevReview}
//               className="absolute left-0 sm:left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full p-2 sm:p-4 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 active:scale-95 z-10"
//             >
//               <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
//             </button>

//             <button
//               onClick={nextReview}
//               className="absolute right-0 sm:right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full p-2 sm:p-4 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 active:scale-95 z-10"
//             >
//               <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
//             </button>
//           </div>

//           {/* Enhanced dot indicators with animations */}
//           <div
//             className={`flex justify-center space-x-2 sm:space-x-3 mb-6 sm:mb-8 transition-all duration-1000 transform ${
//               isVisible
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-8 opacity-0"
//             }`}
//             style={{ transitionDelay: "1s" }}
//           >
//             {reviews.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToReview(index)}
//                 className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 focus:outline-none transform hover:scale-125 active:scale-95 ${
//                   index === currentIndex
//                     ? "bg-gradient-to-r from-orange-500 to-orange-600 scale-125 shadow-lg animate-pulse"
//                     : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
//                 }`}
//                 style={{
//                   animationDelay: `${index * 0.1}s`,
//                 }}
//               >
//                 <span className="sr-only">Go to review {index + 1}</span>
//               </button>
//             ))}
//           </div>

//           {/* Enhanced auto-play indicator */}
//           <div
//             className={`text-center transition-all duration-1000 transform ${
//               isVisible
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-8 opacity-0"
//             }`}
//             style={{ transitionDelay: "1.2s" }}
//           >
//             <div
//               className={`inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-500 transform hover:scale-105 ${
//                 isAutoPlaying
//                   ? "bg-green-100/80 text-green-700 shadow-sm"
//                   : "bg-gray-100/80 text-gray-600"
//               }`}
//             >
//               <div
//                 className={`w-2 h-2 rounded-full mr-2 transition-all duration-300 ${
//                   isAutoPlaying
//                     ? "bg-green-500 animate-pulse scale-110"
//                     : "bg-gray-400"
//                 }`}
//               ></div>
//               <span className="font-medium">
//                 {isAutoPlaying ? "Auto-playing" : "Paused"}
//               </span>
//             </div>
//           </div>

//           {/* Progress bar for current review */}
//           <div
//             className={`mt-6 sm:mt-8 transition-all duration-1000 transform ${
//               isVisible
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-8 opacity-0"
//             }`}
//             style={{ transitionDelay: "1.4s" }}
//           >
//             <div className="w-full bg-gray-200 rounded-full h-1 sm:h-2 overflow-hidden">
//               <div
//                 className="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full transition-all duration-700 ease-out"
//                 style={{
//                   width: `${((currentIndex + 1) / reviews.length) * 100}%`,
//                   boxShadow: "0 0 10px rgba(249, 115, 22, 0.5)",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;
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
      name: "Sejal",
      text: "It was good south indian cuisine restaurant. Food is really good in taste.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c1ad?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Mohit Khare",
      text: "Absolutely incredible breakfast experience. Situated at Kemp's Corner in Grant Road, this place served me one of the best and authentic south Indian cuisine ever.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "SIDDHESH GANDHE",
      text: "One of very few Vegetarian South Indian restaurant near Grant Road.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Priya Sharma",
      text: "Amazing dosas and filter coffee! The ambiance is perfect for family dining. Highly recommended for authentic South Indian flavors.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Rahul Menon",
      text: "The sambar and coconut chutney here are exceptional. Staff is courteous and the service is quick. Will definitely visit again!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format",
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
                    <div className="bg-gradient-to-br from-gray-50/80 to-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg border border-gray-100/50 transform transition-all duration-500 hover:shadow-xl hover:scale-[1.02] min-h-[240px] sm:min-h-[280px] flex flex-col justify-center">
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
                        <p className="text-gray-700 italic leading-relaxed text-sm sm:text-base mb-3 sm:mb-4 font-medium px-1 line-clamp-3">
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
