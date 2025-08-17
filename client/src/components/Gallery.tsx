import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const galleryItems = [
    {
      url: "images/g1.jpg",
      title: "Delicious Pizza",
    },
    {
      url: "images/g2.jpg",
      title: "Restaurant Interior",
    },
    {
      url: "images/g3.jpg",
      title: "Chef at Work",
    },
    {
      url: "images/g9.jpg",
      title: "Traditional Dishes",
    },
    {
      url: "images/g5.jpg",
      title: "Dessert Plate",
    },
    {
      url: "images/g6.jpg",
      title: "Burger & Fries",
    },
    {
      url: "images/g7.jpg",
      title: "Fine Dining",
    },
    {
      url: "images/g8.jpg",
      title: "Tasty Dish",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-6 sm:py-8 lg:py-12 bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden"
    >
      {/* Font Loading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Dancing+Script:wght@400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap"
        rel="stylesheet"
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg border border-green-100 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {/* Heading */}
          <div
            className={`text-center mb-6 sm:mb-8 lg:mb-10 transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 bg-clip-text text-transparent">
                Our
              </span>{" "}
              <span
                className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent ml-3"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                Gallery
              </span>
            </h2>
            <div className="flex items-center justify-center">
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-green-600 to-orange-500 rounded-full"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-orange-500 rounded-full mx-3 sm:mx-4 animate-pulse"></div>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-green-600 rounded-full"></div>
            </div>
          </div>

          {/* Gallery Grid - Responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-95"
                }`}
                style={{
                  transitionDelay: `${300 + index * 100}ms`,
                }}
                onClick={() => setSelectedImage(item.url)}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Optional: Image title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p
                    className="text-xs sm:text-sm font-medium"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal - Responsive */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-full max-h-96 sm:max-h-[80vh] flex items-center justify-center">
            {/* Close Button - Responsive positioning */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2 sm:bg-transparent transition-all duration-200 hover:bg-white/20"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Fullscreen Image - Responsive */}
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-full object-contain rounded-lg shadow-lg max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
