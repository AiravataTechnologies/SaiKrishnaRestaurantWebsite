import React, { useState, useEffect, useRef } from "react";
import { Play, Clock, Eye, ChevronLeft, ChevronRight } from "lucide-react";

const Videos: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const videos = [
    {
      title: "Sai Krishna Restaurant Food Testimonial",
      thumbnail:
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "3:45",
      views: "12.5K",
    },
    {
      title: "Behind the Scenes - Kitchen Tour",
      thumbnail:
        "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "5:20",
      views: "8.3K",
    },
    {
      title: "Traditional Dosa Making Process",
      thumbnail:
        "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "4:15",
      views: "15.2K",
    },
    {
      title: "Customer Experience Stories",
      thumbnail:
        "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "6:30",
      views: "9.7K",
    },
  ];

  const slidesCount = Math.ceil(videos.length / 2); // 2 slides for 4 videos

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered && isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesCount);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, isVisible, slidesCount]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slidesCount);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  return (
    <section
      ref={sectionRef}
      id="videos"
      className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-red-300 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-300 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          {/* Enhanced decorative ornament with animation */}
          <div
            className={`flex justify-center mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-orange-500 text-4xl animate-pulse">
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0s" }}
              >
                ✦
              </span>
              <span
                className="inline-block animate-bounce mx-2"
                style={{ animationDelay: "0.2s" }}
              >
                ❋
              </span>
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                ✦
              </span>
            </div>
          </div>

          <h2
            className={`text-5xl sm:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Videos
          </h2>

          <div
            className={`flex justify-center mb-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-orange-500 text-4xl">
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "1s" }}
              >
                ❋
              </span>
              <span
                className="inline-block animate-pulse mx-2"
                style={{ animationDelay: "1.2s" }}
              >
                ✦
              </span>
              <span
                className="inline-block animate-pulse"
                style={{ animationDelay: "1.4s" }}
              >
                ❋
              </span>
            </div>
          </div>

          <p
            className={`text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Watch our culinary journey and customer experiences through these
            engaging videos
          </p>
        </div>

        {/* Horizontal Sliding Carousel */}
        <div
          className={`relative transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 transform hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-orange-500" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 transform hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-orange-500" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {/* Slide 1: Videos 1 & 2 */}
              <div className="w-full flex-shrink-0 flex gap-4 px-2">
                {videos.slice(0, 2).map((video, videoIndex) => (
                  <div key={videoIndex} className="w-1/2 flex-shrink-0">
                    <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50">
                      <div className="relative overflow-hidden">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />

                        {/* Enhanced overlay with multiple layers */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <div className="transform scale-75 group-hover:scale-100 transition-all duration-300">
                            <div className="relative">
                              {/* Pulsing ring effect */}
                              <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-30"></div>
                              <div
                                className="absolute inset-0 bg-red-500 rounded-full animate-pulse opacity-20"
                                style={{ animationDelay: "0.5s" }}
                              ></div>

                              {/* Play button */}
                              <div className="relative bg-gradient-to-br from-red-500 to-red-600 rounded-full p-6 shadow-2xl group-hover:shadow-red-500/50 transition-all duration-300">
                                <Play className="w-10 h-10 text-white fill-current ml-1" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Enhanced duration badge */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-2">
                          <div className="bg-black/90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-1 group-hover:bg-red-600 transition-colors duration-300">
                            <Clock className="w-3 h-3" />
                            {video.duration}
                          </div>
                        </div>

                        {/* Views counter */}
                        <div className="absolute top-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {video.views}
                          </div>
                        </div>

                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-300 transition-all duration-500"></div>
                      </div>

                      <div className="bg-gradient-to-br from-white to-orange-50 p-6 relative">
                        {/* Decorative element */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                          {video.title}
                        </h3>

                        {/* Animated underline */}
                        <div className="mt-2 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slide 2: Videos 3 & 4 */}
              <div className="w-full flex-shrink-0 flex gap-4 px-2">
                {videos.slice(2, 4).map((video, videoIndex) => (
                  <div key={videoIndex + 2} className="w-1/2 flex-shrink-0">
                    <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50">
                      <div className="relative overflow-hidden">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />

                        {/* Enhanced overlay with multiple layers */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <div className="transform scale-75 group-hover:scale-100 transition-all duration-300">
                            <div className="relative">
                              {/* Pulsing ring effect */}
                              <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-30"></div>
                              <div
                                className="absolute inset-0 bg-red-500 rounded-full animate-pulse opacity-20"
                                style={{ animationDelay: "0.5s" }}
                              ></div>

                              {/* Play button */}
                              <div className="relative bg-gradient-to-br from-red-500 to-red-600 rounded-full p-6 shadow-2xl group-hover:shadow-red-500/50 transition-all duration-300">
                                <Play className="w-10 h-10 text-white fill-current ml-1" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Enhanced duration badge */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-2">
                          <div className="bg-black/90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-1 group-hover:bg-red-600 transition-colors duration-300">
                            <Clock className="w-3 h-3" />
                            {video.duration}
                          </div>
                        </div>

                        {/* Views counter */}
                        <div className="absolute top-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {video.views}
                          </div>
                        </div>

                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-300 transition-all duration-500"></div>
                      </div>

                      <div className="bg-gradient-to-br from-white to-orange-50 p-6 relative">
                        {/* Decorative element */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                          {video.title}
                        </h3>

                        {/* Animated underline */}
                        <div className="mt-2 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: slidesCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-gradient-to-r from-orange-500 to-red-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 max-w-xs mx-auto">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${((currentIndex + 1) / slidesCount) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            <Play className="w-5 h-5" />
            Watch All Videos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Videos;
