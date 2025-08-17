// import React, { useState, useEffect, useRef } from 'react';
// import { Star } from 'lucide-react';

// const Menu: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState('breakfast');
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const menuItems = {
//     breakfast: [
//       {
//         name: "Masala Dosa",
//         price: "₹120",
//         description: "Crispy rice crepe with spiced potato filling",
//         image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",
//         rating: 4.8,
//         popular: true
//       },
//       {
//         name: "Idli Sambar",
//         price: "₹80",
//         description: "Steamed rice cakes with lentil curry",
//         image: "https://images.pexels.com/photos/14737909/pexels-photo-14737909.jpeg?auto=compress&cs=tinysrgb&w=400",
//         rating: 4.7
//       },
//       {
//         name: "Uttapam",
//         price: "₹100",
//         description: "Thick pancake with vegetables",
//         image: "https://images.pexels.com/photos/6419686/pexels-photo-6419686.jpeg?auto=compress&cs=tinysrgb&w=400",
//         rating: 4.6
//       },
//       {
//         name: "Vada Sambar",
//         price: "₹90",
//         description: "Fried lentil donuts in spicy curry",
//         image: "https://images.pexels.com/photos/6416519/pexels-photo-6416519.jpeg?auto=compress&cs=tinysrgb&w=400",
//         rating: 4.5
//       }
//     ],
//     lunch: [
//       {
//         name: "South Indian Thali",
//         price: "₹250",
//         description: "Complete meal with rice, sambar, rasam, vegetables",
//         image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400",
//         rating: 4.9,
//         popular: true
//       },
//       {
//         name: "Chettinad Chicken",
//         price: "₹280",
//         description: "Spicy chicken curry from Chettinad region",
//         image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400",
//         rating: 4.8
//       },
//       {
//         name: "Fish Curry",
//         price: "₹320",
//         description: "Traditional Kerala-style fish curry",
//         image: "https://images.pexels.com/photos/4518665/pexels-photo-4518665.jpeg?auto=compress&cs=tinysrgb&w=400",
//         rating: 4.7
//       },
//       {
//         name: "Biryani",
//         price: "₹200",
//         description: "Fragrant rice with spices and vegetables",
//         image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
//         rating: 4.6
//       }
//     ],
//     snacks: [
//       {
//         name: "Filter Coffee",
//         price: "₹40",
//         description: "Traditional South Indian coffee",
//         image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
//         rating: 4.9,
//         popular: true
//       },
//       {
//         name: "Masala Chai",
//         price: "₹30",
//         description: "Spiced tea with aromatic herbs",
//         image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400",
//         rating: 4.7
//       },
//       {
//         name: "Samosa",
//         price: "₹25",
//         description: "Crispy pastry with spiced filling",
//         image: "https://images.pexels.com/photos/1625736/pexels-photo-1625736.jpeg?auto=compress&cs=tinysrgb&w=400",
//         rating: 4.5
//       },
//       {
//         name: "Bhajji",
//         price: "₹35",
//         description: "Deep fried vegetable fritters",
//         image: "https://images.pexels.com/photos/6416519/pexels-photo-6416519.jpeg?auto=compress&cs=tinysrgb&w=400",
//         rating: 4.4
//       }
//     ]
//   };

//   const categories = [
//     { id: 'breakfast', name: 'Breakfast', icon: '🌅' },
//     { id: 'lunch', name: 'Lunch', icon: '🍛' },
//     { id: 'snacks', name: 'Snacks', icon: '☕' }
//   ];

//   return (
//     <section ref={sectionRef} id="menu" className="py-12 sm:py-16 lg:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           {/* Decorative ornament */}
//           <div className="flex justify-center mb-4 sm:mb-6">
//             <div className="text-orange-500 text-2xl sm:text-3xl">✦ ❋ ✦</div>
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
//             Best Dishes
//           </h2>
//           <div className="flex justify-center mb-4 sm:mb-6">
//             <div className="text-orange-500 text-2xl sm:text-3xl">❋ ✦ ❋</div>
//           </div>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
//             Discover authentic South Indian flavors crafted with traditional recipes
//             and the finest ingredients.
//           </p>
//         </div>

//         {/* Category Tabs */}
//         <div className={`flex flex-wrap justify-center mb-8 sm:mb-12 gap-2 sm:gap-4 transition-all duration-1000 delay-300 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 ${
//                 activeCategory === category.id
//                   ? 'bg-orange-500 text-white transform scale-105'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               <span className="mr-1 sm:mr-2">{category.icon}</span>
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Menu Items Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
//           {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
//             <div
//               key={index}
//               className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 border border-gray-100 ${
//                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//               }`}
//               style={{ transitionDelay: `${600 + index * 150}ms` }}
//             >
//               <div className="relative">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
//                 />
//                 {item.popular && (
//                   <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                     Popular
//                   </div>
//                 )}
//                 <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
//                   <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                   <span className="text-sm font-semibold">{item.rating}</span>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-3">
//                   <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
//                   <span className="text-xl font-bold text-orange-500">{item.price}</span>
//                 </div>
//                 <p className="text-gray-600 mb-4">{item.description}</p>
//                 <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
//                   Order Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 text-center">
//           <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white">
//             <h3 className="text-2xl font-bold mb-4">Order Online Now!</h3>
//             <p className="text-lg mb-6">Available on your favorite delivery platforms</p>
//             <div className="flex justify-center space-x-6">
//               <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
//                 🛵 Swiggy
//               </button>
//               <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
//                 🍽️ Zomato
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Menu;
import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("breakfast");
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

  const menuItems = {
    breakfast: [
      {
        name: "Steam Idli",
        price: "₹80",
        description: "Healthy, light, and easy to digest.",
        image: "images/breakfast1.jpg",
        rating: 4.8,
        popular: true,
      },
      {
        name: "Medu Wada",
        price: "₹100",
        description:
          "Crispy outside, soft inside; pairs well with chutney/sambar.",
        image: "images/breakfast2.jpg",
        rating: 4.7,
      },
      {
        name: "Missal / Missal Pav",
        price: "₹90/100",
        description: "A spicy Maharashtrian favorite, filling and energetic.",
        image: "images/breakfast3.jpg",
        rating: 4.6,
      },
      {
        name: "Dahi Idli",
        price: "₹110",
        description: "Refreshing, cool, and great for mornings.",
        image: "images/breakfast4.jpg",
        rating: 4.5,
      },
    ],
    lunch: [
      {
        name: "Paneer Butter Masala",
        price: "₹255",
        description: "Rich, creamy, and classic.",
        image: "images/lunch1.jpg",
        rating: 4.9,
        popular: true,
      },
      {
        name: "Veg. Diwani Handi",
        price: "₹295",
        description: "A royal mixed-veg preparation with spices.",
        image: "images/lunch2.jpg",
        rating: 4.8,
      },
      {
        name: "Veg. Dum Biryani",
        price: "₹270",
        description: "Slow-cooked with spices, aromatic and filling.",
        image: "images/lunch3.jpg",
        rating: 4.7,
      },
      {
        name: "Jeera Rice",
        price: "₹170",
        description: "Simple, flavorful, and pairs well with curries.",
        image: "images/lunch4.jpg",
        rating: 4.6,
      },
    ],
    snacks: [
      {
        name: "Veg. Pakoda",
        price: "₹110",
        description: "A simple, light classic combo.",
        image: "images/snacks1.jpg",
        rating: 4.9,
        popular: true,
      },
      {
        name: "Paneer Pakoda",
        price: "₹145",
        description: "Crispy and filling.",
        image: "images/snacks2.jpg",
        rating: 4.7,
      },
      {
        name: "Ginger Tea",
        price: "₹50",
        description: "Perfect to pair with pakodas.",
        image: "images/snacks3.jpg",
        rating: 4.5,
      },
      {
        name: "Veg. Sandwich",
        price: "₹75",
        description: "Fresh bread filled with vegetables and chutney.",
        image: "images/snacks4.jpg",
        rating: 4.4,
      },
    ],
  };

  const categories = [
    { id: "breakfast", name: "Breakfast", icon: "🌅" },
    { id: "lunch", name: "Lunch", icon: "🍛" },
    { id: "snacks", name: "Snacks", icon: "☕" },
  ];

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50/50 via-white to-red-50/30 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-200/20 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Best Dishes
          </h2>
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="text-orange-500 text-2xl sm:text-3xl">❋ ✦ ❋</div>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover authentic South Indian flavors crafted with traditional
            recipes and the finest ingredients.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex flex-wrap justify-center mb-8 sm:mb-12 gap-3 sm:gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 border-2 relative overflow-hidden group ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-400 transform scale-105 shadow-xl"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 border-orange-200 hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 hover:border-orange-300 hover:scale-105 shadow-lg"
              }`}
            >
              <span className="relative z-10 flex items-center">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3">
                  {category.icon}
                </span>
                {category.name}
              </span>
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-20 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {menuItems[activeCategory as keyof typeof menuItems].map(
            (item, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden group hover:-translate-y-3 border-2 border-orange-100 hover:border-orange-300 relative ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {item.popular && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                      ⭐ Popular
                    </div>
                  )}

                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 flex items-center space-x-2 shadow-lg border border-orange-200">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-gray-800">
                      {item.rating}
                    </span>
                  </div>
                </div>

                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full">
                      <span className="text-lg font-bold">{item.price}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-200/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-red-200/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ),
          )}
        </div>

        {/* CTA Section */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Order Online Now!</h3>
            <p className="text-lg mb-6">
              Available on your favorite delivery platforms
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                🛵 Swiggy
              </button>
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                🍽️ Zomato
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Menu;
