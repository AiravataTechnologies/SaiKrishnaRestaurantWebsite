import React, { useState, useEffect, useRef } from "react";
import { Award, Users, Clock, Heart, Star } from "lucide-react";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);

          const startTime = Date.now();
          const startCount = 0;

          const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(
              easeOutQuart * (end - startCount) + startCount,
            );

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.3 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

const About: React.FC = () => {
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

  const menuItems = [
    { name: "Masala Dosa", image: "ab1.png", price: "₹120" },
    { name: "Idli Sambar", image: "ab2.png", price: "₹80" },
    { name: "Vada Pav", image: "ab3.png", price: "₹60" },
    { name: "Filter Coffee", image: "ab4.png", price: "₹40" },
    { name: "Uthappam", image: "ab5.png", price: "₹100" },
    { name: "Medu Vada", image: "ab6.png", price: "₹70" },
    { name: "Rava Kesari", image: "ab7.png", price: "₹90" },
    { name: "Coconut Rice", image: "ab8.png", price: "₹110" },
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Authentic Recipes",
      description: "Traditional recipes passed down through generations",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Chefs",
      description: "Experienced chefs from South India",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fresh Daily",
      description: "All dishes prepared fresh every day",
      gradient: "from-blue-400 to-cyan-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made with Love",
      description: "Every dish crafted with passion and care",
      gradient: "from-pink-400 to-rose-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden"
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

      {/* Auto-scrolling Menu Items */}
      <div className="relative py-6 overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll space-x-4 sm:space-x-6 md:space-x-8">
            {/* First set of items */}
            {menuItems.map((item, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 relative group transform transition-all duration-500 hover:scale-110"
                style={{
                  filter:
                    "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.15)) drop-shadow(0 8px 10px rgba(0, 0, 0, 0.1))",
                  transform: "perspective(1000px) rotateY(-2deg) rotateX(2deg)",
                }}
              >
                <img
                  src={`/images/${item.image}`}
                  alt={item.name}
                  className="w-48 h-32 sm:w-56 sm:h-40 md:w-64 md:h-48 object-contain transform transition-all duration-500"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                />
              </div>
            ))}

            {/* Duplicate set for seamless scroll */}
            {menuItems.map((item, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 relative group transform transition-all duration-500 hover:scale-110"
                style={{
                  filter:
                    "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.15)) drop-shadow(0 8px 10px rgba(0, 0, 0, 0.1))",
                  transform: "perspective(1000px) rotateY(-2deg) rotateX(2deg)",
                }}
              >
                <img
                  src={`/images/${item.image}`}
                  alt={item.name}
                  className="w-48 h-32 sm:w-56 sm:h-40 md:w-64 md:h-48 object-contain transform transition-all duration-500"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main About Section */}
      <div className="relative py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 px-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 bg-clip-text text-transparent">
                About
              </span>
              <span
                className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent ml-3"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                Sai Krishna
              </span>
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-orange-500 rounded-full"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full mx-4 animate-pulse"></div>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-green-600 rounded-full"></div>
            </div>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4 font-light"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              Experience the authentic taste of South India at Sai Krishna
              Restaurant. We bring you traditional flavors, aromatic spices, and
              time-honored recipes in a warm and welcoming atmosphere that feels
              like home.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 sm:mb-20">
            <div
              className={`space-y-6 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="relative">
                <h3
                  className="text-3xl sm:text-4xl font-bold text-green-800 mb-6 px-4 lg:px-0 relative"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Our Journey
                </h3>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
                <p
                  className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Founded over{" "}
                  <span
                    className="font-bold text-green-700"
                    style={{ fontFamily: "Merriweather, serif" }}
                  >
                    10years ago
                  </span>
                  , Sai Krishna Restaurant has been serving authentic South
                  Indian cuisine to food lovers who appreciate traditional
                  flavors and genuine hospitality. Our journey began with a
                  simple mission: to share the rich culinary heritage of South
                  India with our community in Mumbai.
                </p>
                <p
                  className="text-gray-700 text-base sm:text-lg leading-relaxed"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  From crispy dosas and fluffy idlis to spicy sambars and
                  aromatic rasam, every dish is prepared using traditional
                  methods and the finest ingredients sourced directly from South
                  India. Our expert chefs bring decades of experience and
                  authentic recipes that have been perfected over generations.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 px-4 lg:px-0">
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-md border border-green-200 transform hover:scale-105 transition-transform duration-300">
                  <div
                    className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: "1",
                    }}
                  >
                    <AnimatedCounter end={43} suffix="+" />
                  </div>
                  <div
                    className="text-sm text-gray-600 font-medium"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-md border border-orange-200 transform hover:scale-105 transition-transform duration-300">
                  <div
                    className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: "1",
                    }}
                  >
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div
                    className="text-sm text-gray-600 font-medium"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Menu Items
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl shadow-md border border-emerald-200 transform hover:scale-105 transition-transform duration-300">
                  <div
                    className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: "1",
                    }}
                  >
                    <AnimatedCounter end={50} suffix="k+" />
                  </div>
                  <div
                    className="text-sm text-gray-600 font-medium"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Happy Customers
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-orange-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <img
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="South Indian cuisine preparation"
                  className="relative rounded-3xl shadow-2xl w-full h-80 lg:h-96 object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${800 + index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"></div>
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                  }}
                ></div>
                <div className="relative p-6 text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <div className="text-white">
                      {React.cloneElement(feature.icon, {
                        className: "w-6 h-6",
                      })}
                    </div>
                  </div>
                  <h4
                    className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-800 transition-colors duration-300"
                    style={{ fontFamily: "Merriweather, serif" }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className="text-gray-600 text-xs leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
        
        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 8s linear infinite;
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default About;
