import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Decorative ornament */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="text-orange-500 text-2xl sm:text-3xl">✦ ❋ ✦</div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Contact Us
          </h2>
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="text-orange-500 text-2xl sm:text-3xl">❋ ✦ ❋</div>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Visit us for an authentic South Indian dining experience. We're here to serve you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Nana Chowk, Grant Road,<br />
                  Mumbai - 400007<br />
                  Maharashtra, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 text-sm sm:text-base">022 2386 7544</p>
                <p className="text-gray-600 text-sm sm:text-base">90040 81590</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm sm:text-base break-all">info@srikrishnarestaurant.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Hours</h3>
                <div className="text-gray-600 space-y-1 text-sm sm:text-base">
                  <p>Breakfast: 7:00 AM - 10:30 AM</p>
                  <p>Lunch: 11:00 AM - 3:30 PM</p>
                  <p>Snacks: 4:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* We Are Section */}
            <div className="bg-orange-50 p-4 sm:p-6 rounded-xl border border-orange-200">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">We Are Available On:</h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2 text-sm sm:text-base">
                  <span>🛵</span>
                  <span>Swiggy</span>
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2 text-sm sm:text-base">
                  <span>🍽️</span>
                  <span>Zomato</span>
                </button>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className={`relative mt-8 lg:mt-0 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-gray-200 rounded-2xl h-64 sm:h-80 lg:h-full flex items-center justify-center">
              <div className="text-center text-gray-500 px-4">
                <MapPin className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
                <p className="text-base sm:text-lg font-semibold">Find Us Here</p>
                <p className="text-xs sm:text-sm mt-2">Nana Chowk, Grant Road</p>
                <p className="text-xs sm:text-sm">Mumbai - 400007</p>
              </div>
            </div>
            
            {/* Floating Address Card */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white p-3 sm:p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm sm:text-base">Sai Krishna</div>
                  <div className="text-xs sm:text-sm text-gray-600">Restaurant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;