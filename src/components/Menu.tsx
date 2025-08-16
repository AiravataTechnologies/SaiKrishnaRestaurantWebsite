import React, { useState } from 'react';
import { Star } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const menuItems = {
    breakfast: [
      {
        name: "Masala Dosa",
        price: "₹120",
        description: "Crispy rice crepe with spiced potato filling",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.8,
        popular: true
      },
      {
        name: "Idli Sambar",
        price: "₹80",
        description: "Steamed rice cakes with lentil curry",
        image: "https://images.pexels.com/photos/14737909/pexels-photo-14737909.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.7
      },
      {
        name: "Uttapam",
        price: "₹100",
        description: "Thick pancake with vegetables",
        image: "https://images.pexels.com/photos/6419686/pexels-photo-6419686.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.6
      },
      {
        name: "Vada Sambar",
        price: "₹90",
        description: "Fried lentil donuts in spicy curry",
        image: "https://images.pexels.com/photos/6416519/pexels-photo-6416519.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.5
      }
    ],
    lunch: [
      {
        name: "South Indian Thali",
        price: "₹250",
        description: "Complete meal with rice, sambar, rasam, vegetables",
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.9,
        popular: true
      },
      {
        name: "Chettinad Chicken",
        price: "₹280",
        description: "Spicy chicken curry from Chettinad region",
        image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.8
      },
      {
        name: "Fish Curry",
        price: "₹320",
        description: "Traditional Kerala-style fish curry",
        image: "https://images.pexels.com/photos/4518665/pexels-photo-4518665.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.7
      },
      {
        name: "Biryani",
        price: "₹200",
        description: "Fragrant rice with spices and vegetables",
        image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.6
      }
    ],
    snacks: [
      {
        name: "Filter Coffee",
        price: "₹40",
        description: "Traditional South Indian coffee",
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.9,
        popular: true
      },
      {
        name: "Masala Chai",
        price: "₹30",
        description: "Spiced tea with aromatic herbs",
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.7
      },
      {
        name: "Samosa",
        price: "₹25",
        description: "Crispy pastry with spiced filling",
        image: "https://images.pexels.com/photos/1625736/pexels-photo-1625736.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.5
      },
      {
        name: "Bhajji",
        price: "₹35",
        description: "Deep fried vegetable fritters",
        image: "https://images.pexels.com/photos/6416519/pexels-photo-6416519.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.4
      }
    ]
  };

  const categories = [
    { id: 'breakfast', name: 'Breakfast', icon: '🌅' },
    { id: 'lunch', name: 'Lunch', icon: '🍛' },
    { id: 'snacks', name: 'Snacks', icon: '☕' }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Decorative ornament */}
          <div className="flex justify-center mb-6">
            <div className="text-orange-500 text-3xl">✦ ❋ ✦</div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Best Dishes
          </h2>
          <div className="flex justify-center mb-6">
            <div className="text-orange-500 text-3xl">❋ ✦ ❋</div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover authentic South Indian flavors crafted with traditional recipes 
            and the finest ingredients.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 mb-2 ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {item.popular && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{item.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className="text-xl font-bold text-orange-500">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Order Online Now!</h3>
            <p className="text-lg mb-6">Available on your favorite delivery platforms</p>
            <div className="flex justify-center space-x-6">
              <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                🛵 Swiggy
              </button>
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                🍽️ Zomato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;