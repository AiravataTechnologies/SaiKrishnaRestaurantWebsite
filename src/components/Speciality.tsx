import React from 'react';

const Speciality: React.FC = () => {
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
    <section id="speciality" className="py-20 bg-gradient-to-br from-green-800 via-green-700 to-green-900 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
             style={{backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\"><g fill=\"%23ffffff\" fill-opacity=\"0.1\"><circle cx=\"30\" cy=\"30\" r=\"2\"/></g></svg>')"}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* White content box */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-16">
            {/* Decorative ornament */}
            <div className="flex justify-center mb-6">
              <div className="text-orange-500 text-3xl">✦ ❋ ✦</div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Our Speciality
            </h2>
            <div className="flex justify-center mb-6">
              <div className="text-orange-500 text-3xl">❋ ✦ ❋</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {specialities.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-medium mb-2">
                  {item.time}
                </p>
                <p className="text-gray-600">
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