import React from 'react';

const Legacy: React.FC = () => {
  return (
    <section id="legacy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              {/* Decorative ornament */}
              <div className="flex mb-6">
                <div className="text-orange-500 text-3xl">✦ ❋ ✦</div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
                Our Legacy
              </h2>
              <div className="flex mb-8">
                <div className="text-orange-500 text-3xl">❋ ✦ ❋</div>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                A revamped 10-year old family-run restaurant located in Nana Chowk, 
                Grant Road, serving authentic and creative South Indian cuisine in a 
                comforting atmosphere. Also, serving incredibly rich North Indian and 
                Chinese dishes.
              </p>
              
              <p>
                A perfect destination for food lovers looking to get finger-licking street 
                food in Mumbai. The menu is extensive and thoughtfully designed, 
                consisting of super fresh dishes enjoyed by all age groups.
              </p>
              
              <p>
                The restaurant also has a private dining room for celebrating special 
                occasions that can accommodate upto 25 guests.
              </p>
            </div>

            <div className="mt-12 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500">10+</div>
                <div className="text-sm text-gray-600 font-medium">Years Legacy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500">1000+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500">100+</div>
                <div className="text-sm text-gray-600 font-medium">Dishes</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant interior"
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">Since</div>
                <div className="text-3xl font-bold">1980</div>
                <div className="text-sm">Serving Authentic Food</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;