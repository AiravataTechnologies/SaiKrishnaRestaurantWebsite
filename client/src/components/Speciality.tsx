import React, { useState, useEffect, useRef } from 'react';

const Speciality: React.FC = () => {
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
  const specialities = [
    {
      title: "Unlimited Breakfast",
      time: "7:00 am - 10:30 am",
      image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Start your day with authentic South Indian breakfast"
    },
    {
      title: "Brahmin Uta",
      time: "Unlimited lunch 11:00 am - 3:30 pm",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Traditional vegetarian lunch served on banana leaf"
    },
    {
      title: "High Chai",
      time: "Unlimited snacks",
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Evening snacks with authentic South Indian tea"
    }
  ];

  return (
    <section ref={sectionRef} id="speciality" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-800 via-green-700 to-green-900 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
             style={{backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\"><g fill=\"%23ffffff\" fill-opacity=\"0.1\"><circle cx=\"30\" cy=\"30\" r=\"2\"/></g></svg>')"}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* White content box */}
        <div className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12 sm:mb-16">
            {/* Decorative ornament */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="text-orange-500 text-2xl sm:text-3xl">✦ ❋ ✦</div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
              Our Speciality
            </h2>
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="text-orange-500 text-2xl sm:text-3xl">❋ ✦ ❋</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {specialities.map((item, index) => (
              <div 
                key={index} 
                className={`text-center group transition-all duration-1000 delay-${300 + index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-3 sm:mb-4 px-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-medium mb-2 text-sm sm:text-base px-4">
                  {item.time}
                </p>
                <p className="text-gray-600 text-sm sm:text-base px-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speciality;