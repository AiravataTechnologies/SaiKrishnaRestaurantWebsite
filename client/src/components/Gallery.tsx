import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // ✅ Now 8 images
  const galleryItems = [
    {
      url: "/public/images/g1.jpg",
      title: "Delicious Pizza",
    },
    {
      url: "/public/images/g2.jpg",
      title: "Restaurant Interior",
    },
    {
      url: "/public/images/g3.jpg",
      title: "Chef at Work",
    },
    {
      url: "/public/images/g9.jpg",
      title: "Bartender",
    },
    {
      url: "/public/images/g5.jpg",
      title: "Dessert Plate",
    },
    {
      url: "/public/images/g6.jpg",
      title: "Burger & Fries",
    },
    {
      url: "/public/images/g7.jpg",
      title: "Fine Dining",
    },
    {
      url: "/public/images/g8.jpg",
      title: "Tasty Dish",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-20 bg-gradient-to-br from-green-800 via-green-700 to-green-900 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-600 rounded-full opacity-20 transform -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600 rounded-full opacity-20 transform translate-x-48 translate-y-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`bg-white rounded-3xl p-12 shadow-2xl transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {/* Heading with flourishes */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex justify-center mb-2">
              <img
                src="\public\images\upper-design.png"
                alt="decor"
                className="h-6 md:h-8"
              />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="text-green-800">Our</span>{" "}
              <span className="text-orange-600">Gallery</span>
            </h2>
            <div className="flex justify-center mt-2">
              <img
                src="\public\images\lower-design.png"
                alt="decor"
                className="h-6 md:h-8"
              />
            </div>
          </div>

          {/* ✅ 8 Images Grid (4x4) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-md transition-all duration-700 ease-out ${
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
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-[60px] right-[350px] text-white hover:text-gray-300 z-10"
            >
              <X className="w-[40px] h-[40px]" />
            </button>

            {/* Fullscreen Image */}
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-[600px] h-[400px] object-contain rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-scale-in { animation: scale-in 0.3s ease-out; }
      `}</style>
    </section>
  );
};

export default Gallery;
