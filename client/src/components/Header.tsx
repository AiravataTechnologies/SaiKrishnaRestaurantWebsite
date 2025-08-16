import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Download,
} from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past hero section (approximately 600px)
      setIsScrolled(currentScrollY > 50);

      // Hide header when scrolling down past hero section, show when scrolling up
      if (currentScrollY > 600) {
        if (currentScrollY > lastScrollY) {
          setIsHeaderVisible(false); // Scrolling down
        } else {
          setIsHeaderVisible(true); // Scrolling up
        }
      } else {
        setIsHeaderVisible(true); // Always show in hero section
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      {/* <div className="bg-gradient-to-r from-green-800/90 to-green-700/90 text-white py-3 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-orange-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">022 2386 7544 | 90040 81590</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-orange-200 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="font-medium">info@srikrishnarestaurant.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook className="w-4 h-4 cursor-pointer hover:text-orange-300 transition-all duration-300 hover:scale-110" />
            <Instagram className="w-4 h-4 cursor-pointer hover:text-orange-300 transition-all duration-300 hover:scale-110" />
            <button className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              <Download className="w-3 h-3" />
              <span>Download Menu</span>
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Offers & Promotion
            </button>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100/50"
            : "bg-white/60 backdrop-blur-sm"
        } ${
          isHeaderVisible
            ? "transform translate-y-0 opacity-100"
            : "transform -translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 py-2">
            {/* Logo Section */}
            <div className="flex items-center -ml-2">
              <div className="relative">
                <img
                  src="/images/logo.png"
                  alt="Sai Krishna Restaurant Logo"
                  className={`object-contain transition-all duration-300 ${
                    isScrolled ? "h-14 w-auto" : "h-16 w-auto"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-orange-500/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About Us" },
                { id: "menu", label: "Menu" },
                { id: "gallery", label: "Gallery" },
                { id: "videos", label: "Videos" },
                { id: "blog", label: "Blog" },
                { id: "contact", label: "Contact Us" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-gray-700 hover:text-green-700 transition-all duration-300 font-medium text-sm group"
                  data-testid={`nav-${item.id}`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-orange-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100"></div>
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/80 backdrop-blur-md border-t border-gray-100/50 rounded-b-xl shadow-lg">
              <div className="py-4 space-y-1">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About Us" },
                  { id: "menu", label: "Menu" },
                  { id: "gallery", label: "Gallery" },
                  { id: "videos", label: "Videos" },
                  { id: "blog", label: "Blog" },
                  { id: "contact", label: "Contact Us" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-orange-50 hover:text-green-700 transition-all duration-300 font-medium border-l-4 border-transparent hover:border-green-500"
                    data-testid={`mobile-nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
