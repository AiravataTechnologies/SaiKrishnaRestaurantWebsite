import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Authentic Recipes",
      description: "Traditional recipes passed down through generations"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Chefs",
      description: "Experienced chefs from South India"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fresh Daily",
      description: "All dishes prepared fresh every day"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made with Love",
      description: "Every dish crafted with passion and care"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-12 sm:py-16 lg:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-800 mb-4 sm:mb-6 px-4">
            About <span className="text-orange-500">Sai Krishna</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Experience the authentic taste of South India at Sai Krishna Restaurant. 
            We bring you traditional flavors, aromatic spices, and time-honored recipes 
            in a warm and welcoming atmosphere.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16">
          <div className={`space-y-4 sm:space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4 sm:mb-6 px-4 lg:px-0">
              Our Story
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-4 lg:px-0">
              Founded over 43 years ago, Sai Krishna Restaurant has been serving authentic South Indian 
              cuisine to food lovers who appreciate traditional flavors and genuine hospitality. 
              Our journey began with a simple mission: to share the rich culinary heritage of 
              South India with our community in Mumbai.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-4 lg:px-0">
              From crispy dosas and fluffy idlis to spicy sambars and aromatic rasam, every 
              dish is prepared using traditional methods and the finest ingredients sourced 
              directly from South India. Our expert chefs bring decades of experience and 
              authentic recipes that have been perfected over generations.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 px-4 lg:px-0">
              <div className="text-center p-3 sm:p-4 bg-green-50 rounded-lg min-w-[80px] sm:min-w-[100px]">
                <div className="text-2xl sm:text-3xl font-bold text-green-700" data-testid="text-years">43+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-orange-50 rounded-lg min-w-[80px] sm:min-w-[100px]">
                <div className="text-2xl sm:text-3xl font-bold text-orange-500" data-testid="text-menu">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Menu Items</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-green-50 rounded-lg min-w-[80px] sm:min-w-[100px]">
                <div className="text-2xl sm:text-3xl font-bold text-green-700" data-testid="text-customers">50k+</div>
                <div className="text-xs sm:text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <img 
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="South Indian cuisine preparation"
              className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover hover-lift"
              data-testid="img-about-cuisine"
            />
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-green-700" />
                </div>
                <div>
                  <div className="font-bold text-green-800 text-sm sm:text-base">Family Tradition</div>
                  <div className="text-xs sm:text-sm text-gray-600">Since 1980</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 text-center group hover:-translate-y-1 transform border border-green-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${800 + index * 150}ms` }}
              data-testid={`card-feature-${index}`}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-green-800 mb-2 sm:mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;