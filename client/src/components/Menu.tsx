import React, { useState, useEffect, useRef } from "react";
import { Star, Download, Eye, FileText } from "lucide-react";

const Menu: React.FC = () => {
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

  // Menu items based on actual images in /client/public/images/Menu
  const menuItems = [
    { name: "Aloo Tandoori", image: "images/Menu/Aloo Tandoori.jpg" },
    { name: "Aloo Tikka", image: "images/Menu/Aloo Tikka.jpg" },
    { name: "Butter Kulcha", image: "images/Menu/Butter Kulcha.jpg" },
    { name: "Butter Paratha", image: "images/Menu/Butter Paratha.jpg" },
    { name: "Butter Roti", image: "images/Menu/Butter Roti.jpg" },
    { name: "Caramel Custard", image: "images/Menu/Caramel Custard.jpg" },
    { name: "Chana Masala", image: "images/Menu/Chana Masala.jpg" },
    { name: "Cheese Garlic Bread", image: "images/Menu/Cheese Garlic Bread.jpg" },
    { name: "Cheese Masala Pav", image: "images/Menu/Cheese Masala Pav.jpg" },
    { name: "Cheese Pav Bhaji", image: "images/Menu/Cheese Pav Bhaji.jpg" },
    { name: "Chilly Dosa", image: "images/Menu/Chilly Dosa.jpg" },
    { name: "Corn Methi Tikka", image: "images/Menu/Corn Methi Tikka.jpg" },
    { name: "Cream Of Mushroom Soup", image: "images/Menu/Cream Of Mushroom Soup.jpg" },
    { name: "Cream Of Palak Soup", image: "images/Menu/Cream Of Palak Soup.jpg" },
    { name: "Cream Of Tomato Soup", image: "images/Menu/Cream Of Tomato Soup.jpg" },
    { name: "Dal Fry", image: "images/Menu/Dal Fry.jpg" },
    { name: "Dal Khichdi Tadka", image: "images/Menu/Dal Khichdi Tadka.jpg" },
    { name: "Dal Khichdi", image: "images/Menu/Dal Khichdi.jpg" },
    { name: "Dal Makhani", image: "images/Menu/Dal Makhani.jpg" },
    { name: "Dal Tadka", image: "images/Menu/Dal Tadka.jpg" },
    { name: "Garlic Naan", image: "images/Menu/Garlic Naan.jpg" },
    { name: "Gulab Jamun", image: "images/Menu/Gulab Jamun.jpg" },
    { name: "Hara Bhara Kebab", image: "images/Menu/Hara Bhara Kebab.jpg" },
    { name: "Idli Wada", image: "images/Menu/Idli Wada.jpg" },
    { name: "Jeera Rice", image: "images/Menu/Jeera Rice.jpg" },
    { name: "Manchurian Fried Rice", image: "images/Menu/Manchurian Fried Rice.jpg" },
    { name: "Masala Dosa", image: "images/Menu/Masala Dosa.jpg" },
    { name: "Masala Pav", image: "images/Menu/Masala Pav.jpg" },
    { name: "Medu Vada", image: "images/Menu/Medu Vada.jpg" },
    { name: "Mosambi Juice", image: "images/Menu/Mosambi Juice.jpg" },
    { name: "Mushroom Tandoori", image: "images/Menu/Mushroom Tandoori.jpg" },
    { name: "Mysore Masala Dosa", image: "images/Menu/Mysore Masala Dosa.jpg" },
    { name: "Naan", image: "images/Menu/Naan.jpg" },
    { name: "Onion Rava Sada Dosa", image: "images/Menu/Onion Rava Sada Dosa.jpg" },
    { name: "Onion Uttapam", image: "images/Menu/Onion Uttapam.jpg" },
    { name: "Paneer Butter Masala", image: "images/Menu/Paneer Butter Masala.jpg" },
    { name: "Paneer Chilli", image: "images/Menu/Paneer Chilli.jpg" },
    { name: "Paneer Crispy", image: "images/Menu/Paneer Crispy.jpg" },
    { name: "Paneer Kadai", image: "images/Menu/Paneer Kadai.jpg" },
    { name: "Paneer Lajawab", image: "images/Menu/Paneer Lajawab.jpg" },
    { name: "Paneer Malai Tikka", image: "images/Menu/Paneer Malai Tikka.jpg" },
    { name: "Paneer Pahadi", image: "images/Menu/Paneer Pahadi.jpg" },
    { name: "Paneer Satey", image: "images/Menu/Paneer Satey.jpg" },
    { name: "Paneer Tikka Masala", image: "images/Menu/Paneer Tikka Masala.jpg" },
    { name: "Paneer Tikka Pizza", image: "images/Menu/Paneer Tikka Pizza.jpg" },
    { name: "Pav Bhaji", image: "images/Menu/Pav Bhaji.jpg" },
    { name: "Pudina Roti", image: "images/Menu/Pudina Roti.jpg" },
    { name: "Roti", image: "images/Menu/Roti.jpg" },
    { name: "Sada Dosa", image: "images/Menu/Sada Dosa.jpg" },
    { name: "Sai Krishna Special Veg", image: "images/Menu/Sai Krishna Special Veg.jpg" },
    { name: "Schezwan Noodles", image: "images/Menu/Schezwan Noodles.jpg" },
    { name: "Set Dosa", image: "images/Menu/Set Dosa.jpg" },
    { name: "Special Pav Bhaji", image: "images/Menu/Special Pav Bhaji.jpg" },
    { name: "Spring Dosa", image: "images/Menu/Spring Dosa.jpg" },
    { name: "Steam Idli", image: "images/Menu/Steam Idli.jpg" },
    { name: "Tawa Pulao", image: "images/Menu/Tawa Pulao.jpg" },
    { name: "Tawa Subji", image: "images/Menu/Tawa Subji.jpg" },
    { name: "Tomato Onion Uttapam", image: "images/Menu/Tomato Onion Uttapam.jpg" },
    { name: "Veg Biryani", image: "images/Menu/Veg Biryani.jpg" },
    { name: "Veg Chilli Milli", image: "images/Menu/Veg Chilli Milli.jpg" },
    { name: "Veg Crispy", image: "images/Menu/Veg Crispy.jpg" },
    { name: "Veg Diwani Handi", image: "images/Menu/Veg Diwani Handi.jpg" },
    { name: "Veg Fried Rice", image: "images/Menu/Veg Fried Rice.jpg" },
    { name: "Veg Grilled Sandwich", image: "images/Menu/Veg Grilled Sandwich.jpg" },
    { name: "Veg Hakka Noodles", image: "images/Menu/Veg Hakka Noodles.jpg" },
    { name: "Veg Hariyali", image: "images/Menu/Veg Hariyali.jpg" },
    { name: "Veg Hyderabadi Biryani", image: "images/Menu/Veg Hyderabadi Biryani.jpg" },
    { name: "Veg Jalfrezi", image: "images/Menu/Veg Jalfrezi.jpg" },
    { name: "Veg Kadai", image: "images/Menu/Veg Kadai.jpg" },
    { name: "Veg Kolhapuri", image: "images/Menu/Veg Kolhapuri.jpg" },
    { name: "Veg Manchow Soup", image: "images/Menu/Veg Manchow Soup.jpg" },
    { name: "Veg Noodles Soup", image: "images/Menu/Veg Noodles Soup.jpg" },
    { name: "Veg Sandwich", image: "images/Menu/Veg Sandwich.jpg" },
    { name: "Veg Schezwan Fried Rice", image: "images/Menu/Veg Schezwan Fried Rice.jpg" },
    { name: "Veg Seekh Kabab", image: "images/Menu/Veg Seekh Kabab.jpg" },
    { name: "Veg Spring Roll", image: "images/Menu/Veg Spring Roll.jpg" },
    { name: "Veg Triple Noodles", image: "images/Menu/Veg Triple Noodles.jpg" },
    { name: "Watermelon Juice", image: "images/Menu/Watermelon Juice.jpg" }
  ];

  const handleViewPDF = () => {
    window.open('/menu.pdf', '_blank');
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/menu.pdf';
    link.download = 'Sai Krishna Restaurant Menu.pdf';
    link.click();
  };

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
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
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

              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-orange-500 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full mx-4 animate-pulse"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-green-600 rounded-full"></div>
              </div>

              <p
                className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 font-light mb-8"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                Discover authentic flavors crafted with traditional recipes and
                the finest ingredients, served with love and passion.
              </p>

              {/* PDF Menu Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                <button
                  onClick={handleViewPDF}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  data-testid="button-view-menu"
                >
                  <Eye className="w-5 h-5" />
                  <span>View Full Menu</span>
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  data-testid="button-download-menu"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Menu</span>
                </button>
              </div>
            </div>


            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-green-100 hover:border-green-300 transform hover:scale-[1.02] ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 50}ms` }}
                  data-testid={`menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {/* Decorative background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative">
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          console.log(`Failed to load image: ${item.image}`);
                          (e.target as HTMLImageElement).src = '/images/placeholder-food.jpg';
                        }}
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  <div className="p-3 sm:p-5 relative z-10">
                    <h3
                      className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300 leading-tight text-center"
                      style={{ fontFamily: "Merriweather, serif" }}
                    >
                      {item.name}
                    </h3>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              ))}
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
                      Visit Restaurant
                    </button>
                    <button
                      className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Call Now
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
