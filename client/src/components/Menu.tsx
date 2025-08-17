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
    pizza: [
      {
        name: "Margherita Pizza",
        price: "₹250",
        description: "Fresh mozzarella, tomato sauce, and basil.",
        image: "images/pizza1.jpg",
        rating: 4.8,
        popular: true,
      },
      {
        name: "Veggie Supreme",
        price: "₹320",
        description: "Bell peppers, onions, mushrooms, and olives.",
        image: "images/pizza2.jpg",
        rating: 4.7,
      },
      {
        name: "Paneer Tikka Pizza",
        price: "₹380",
        description: "Spiced paneer with capsicum and onions.",
        image: "images/pizza3.jpg",
        rating: 4.6,
      },
      {
        name: "Corn & Cheese",
        price: "₹290",
        description: "Sweet corn kernels with extra cheese.",
        image: "images/pizza4.jpg",
        rating: 4.5,
      },
    ],
    mumbaiChat: [
      {
        name: "Pani Puri",
        price: "₹60",
        description: "Crispy puris with tangy flavored water.",
        image: "images/chat1.jpg",
        rating: 4.9,
        popular: true,
      },
      {
        name: "Bhel Puri",
        price: "₹80",
        description: "Mumbai's favorite street snack mix.",
        image: "images/chat2.jpg",
        rating: 4.8,
      },
      {
        name: "Sev Puri",
        price: "₹70",
        description: "Crispy base topped with chutneys and sev.",
        image: "images/chat3.jpg",
        rating: 4.7,
      },
      {
        name: "Dahi Puri",
        price: "₹85",
        description: "Sweet yogurt topped crispy puri delight.",
        image: "images/chat4.jpg",
        rating: 4.6,
      },
    ],
    starters: [
      {
        name: "Paneer Tikka",
        price: "₹180",
        description: "Grilled cottage cheese with spices.",
        image: "images/starter1.jpg",
        rating: 4.8,
        popular: true,
      },
      {
        name: "Veg Manchurian",
        price: "₹160",
        description: "Indo-Chinese vegetable balls in sauce.",
        image: "images/starter2.jpg",
        rating: 4.7,
      },
      {
        name: "Crispy Corn",
        price: "₹140",
        description: "Golden fried corn kernels with spices.",
        image: "images/starter3.jpg",
        rating: 4.6,
      },
      {
        name: "Spring Rolls",
        price: "₹150",
        description: "Crispy rolls filled with fresh vegetables.",
        image: "images/starter4.jpg",
        rating: 4.5,
      },
    ],
    biryani: [
      {
        name: "Veg Dum Biryani",
        price: "₹270",
        description: "Slow-cooked aromatic rice with vegetables.",
        image: "images/biryani1.jpg",
        rating: 4.9,
        popular: true,
      },
      {
        name: "Paneer Biryani",
        price: "₹320",
        description: "Fragrant basmati rice with spiced paneer.",
        image: "images/biryani2.jpg",
        rating: 4.8,
      },
      {
        name: "Mushroom Biryani",
        price: "₹290",
        description: "Earthy mushrooms layered with spiced rice.",
        image: "images/biryani3.jpg",
        rating: 4.7,
      },
      {
        name: "Hyderabadi Biryani",
        price: "₹350",
        description: "Traditional Hyderabadi style preparation.",
        image: "images/biryani4.jpg",
        rating: 4.8,
      },
    ],
  };

  const categories = [
    {
      id: "breakfast",
      name: "Breakfast",
      color: "from-amber-400 to-orange-500",
    },
    { id: "pizza", name: "Pizza", color: "from-red-400 to-pink-500" },
    {
      id: "mumbaiChat",
      name: "Mumbai Chat",
      color: "from-green-400 to-emerald-600",
    },
    { id: "starters", name: "Starters", color: "from-blue-400 to-cyan-600" },
    { id: "biryani", name: "Biryani", color: "from-purple-400 to-indigo-500" },
  ];

  return (
    <>
      {/* Font Loading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Dancing+Script:wght@400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        id="menu"
        className="py-4 sm:py-6 bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-green-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-orange-200/20 to-transparent rounded-full blur-3xl"></div>

        <div className="relative py-4 sm:py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header Section */}
            <div
              className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                <span className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Our Best
                </span>
                <span
                  className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent ml-3"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  Dishes
                </span>
              </h2>

              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-orange-500 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full mx-4 animate-pulse"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-green-600 rounded-full"></div>
              </div>

              <p
                className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 font-light"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                Discover authentic flavors crafted with traditional recipes and
                the finest ingredients, served with love and passion.
              </p>
            </div>

            {/* Category Tabs */}
            <div
              className={`flex flex-wrap justify-center mb-8 sm:mb-12 gap-3 sm:gap-4 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-500 border-2 overflow-hidden group transform hover:scale-105 shadow-lg ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white border-transparent scale-105 shadow-xl`
                      : "bg-white/80 backdrop-blur-sm text-gray-700 border-green-200 hover:bg-gradient-to-r hover:from-green-50 hover:to-orange-50 hover:border-green-300 hover:shadow-xl"
                  }`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <span className="relative z-10">{category.name}</span>
                  {activeCategory === category.id && (
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              ))}
            </div>

            {/* Menu Items Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {menuItems[activeCategory as keyof typeof menuItems].map(
                (item, index) => (
                  <div
                    key={index}
                    className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-green-100 hover:border-green-300 transform hover:scale-[1.02] ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    {/* Decorative background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative">
                      <div className="relative overflow-hidden rounded-t-2xl">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {item.popular && (
                        <div
                          className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          ⭐ Popular
                        </div>
                      )}

                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 flex items-center space-x-1 shadow-md border border-green-200 group-hover:scale-105 transition-transform duration-300">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span
                          className="text-xs font-bold text-gray-800"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {item.rating}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 relative z-10">
                      <div className="flex justify-between items-start mb-3">
                        <h3
                          className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300 leading-tight"
                          style={{ fontFamily: "Merriweather, serif" }}
                        >
                          {item.name}
                        </h3>
                        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                          <span
                            className="text-sm font-bold"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            {item.price}
                          </span>
                        </div>
                      </div>

                      <p
                        className="text-gray-600 text-sm leading-relaxed"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                  </div>
                ),
              )}
            </div>

            {/* Call to Action Section */}
            <div
              className={`mt-12 text-center transition-all duration-1000 delay-800 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-green-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-emerald-700/90 opacity-95"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>

                <div className="relative z-10">
                  <h3
                    className="text-2xl sm:text-3xl font-bold mb-4"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Experience Authentic Flavors
                  </h3>
                  <p
                    className="text-base sm:text-lg mb-6 max-w-2xl mx-auto leading-relaxed font-light"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  >
                    Visit us today and embark on a culinary journey through
                    diverse cuisines
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button
                      className="bg-white text-green-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      🏪 Visit Restaurant
                    </button>
                    <button
                      className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      📞 Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
