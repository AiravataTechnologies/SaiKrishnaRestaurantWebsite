import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Sejal",
      text: "It was good south indian cuisine restaurant. Food is really good in taste.",
      rating: 5
    },
    {
      name: "Mohit Khare",
      text: "Absolutely incredible breakfast experience. Situated at Kemp's Corner in Grant Road, this place served me one of the best and authentic south Indian cuisine ever.",
      rating: 5
    },
    {
      name: "SIDDHESH GANDHE",
      text: "One of very few Vegetarian South Indian restaurant near Grant Road.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
  };

  const prevReview = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-green-800 via-green-700 to-green-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-600 rounded-full opacity-20 transform translate-x-32 translate-y-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* White content box */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-16">
            {/* Decorative ornament */}
            <div className="flex justify-center mb-6">
              <div className="text-orange-500 text-3xl">✦ ❋ ✦</div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Customer Review
            </h2>
            <div className="flex justify-center mb-6">
              <div className="text-orange-500 text-3xl">❋ ✦ ❋</div>
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className={`bg-gray-50 p-8 rounded-xl transition-all duration-500 ${
                    index === currentIndex ? 'transform scale-105 shadow-xl' : 'opacity-70'
                  }`}
                >
                  <div className="text-center">
                    <Quote className="w-12 h-12 text-gray-400 mx-auto mb-6" />
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      {review.name}
                    </h4>
                    <p className="text-gray-600 italic leading-relaxed">
                      "{review.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button 
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;