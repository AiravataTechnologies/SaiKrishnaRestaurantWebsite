import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background with curved design */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-green-700 to-green-900">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full transform -translate-x-48 translate-y-48"></div>
        </div>
        
        {/* Curved white section */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-white transform rotate-2 origin-bottom-left"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-white"></div>
      </div>

      {/* Palm leaf decoration */}
      <div className="absolute top-20 left-0 z-10">
        <img 
          src="https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=300" 
          alt="Palm leaf"
          className="w-64 h-auto opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
              Serving Authentic &
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gray-800">
              Creative South Indian Cuisine
            </h2>
            
            <div className="flex items-center justify-center mb-12">
              <div className="h-px bg-orange-500 w-16"></div>
              <div className="mx-4 text-orange-500 text-2xl font-script">Since 43+ Years</div>
              <div className="h-px bg-orange-500 w-16"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Food items display */}
      <div className="absolute bottom-20 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-end space-x-8">
            {/* Vada */}
            <div className="animate-float">
              <img 
                src="https://images.pexels.com/photos/6416519/pexels-photo-6416519.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Vada"
                className="w-32 h-32 object-cover rounded-full shadow-lg"
              />
            </div>
            
            {/* South Indian Thali */}
            <div className="animate-float-delayed">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="South Indian Thali"
                className="w-80 h-48 object-cover rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Idli */}
            <div className="animate-float">
              <img 
                src="https://images.pexels.com/photos/14737909/pexels-photo-14737909.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Idli"
                className="w-32 h-32 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 animate-float opacity-20">
        <div className="w-24 h-24 border-4 border-orange-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/3 left-10 animate-float-delayed opacity-20">
        <div className="w-16 h-16 border-4 border-orange-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;