import React, { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
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
            Visit us for an authentic South Indian dining experience. We're here
            to serve you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Address
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Ground Floor, Plot No 31, Mahakali Caves Rd,
                  <br />
                  opp. Hanuman Mandir, Dhawalgiri,
                  <br />
                  Sher E Punjab Colony, Andheri East,
                  <br />
                  Mumbai, Maharashtra 400093
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Phone
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  +91 90049 89629
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Email
                </h3>
                <p className="text-gray-600 text-sm sm:text-base break-all">
                  info@srikrishnarestaurant.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Hours
                </h3>
                <div className="text-gray-600 space-y-1 text-sm sm:text-base">
                  <p>
                    <strong>Daily:</strong> 9:00 AM - 12:00 AM
                  </p>
                  <p>
                    <em>Open 7 days a week</em>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div
            className={`relative mt-8 lg:mt-0 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="rounded-2xl h-64 sm:h-80 lg:h-full overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.663891441743!2d72.85896131490247!3d19.125683087058236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c828efcd1171%3A0xb19718840f42d2a0!2sSai%20krishna%20Restaurant!5e0!3m2!1sen!2sin!4v1692345678901!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sai Krishna Restaurant Location"
                data-testid="google-maps-embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
