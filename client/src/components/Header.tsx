import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Facebook, Instagram, Download } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>022 2386 7544 | 90040 81590</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@srikrishnarestaurant.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook className="w-4 h-4 cursor-pointer hover:text-orange-300" />
            <Instagram className="w-4 h-4 cursor-pointer hover:text-orange-300" />
            <button className="flex items-center space-x-1 bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded text-xs">
              <Download className="w-3 h-3" />
              <span>Download Menu</span>
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded text-xs">
              Offers & Promotion
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <img 
                  src="/images/logo.png" 
                  alt="Sai Krishna Restaurant Logo" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <div className="text-3xl font-bold">
                    <span className="text-green-700">SAI</span>
                    <span className="text-orange-500 ml-1">KRISHNA</span>
                  </div>
                  <div className="text-sm text-gray-600 tracking-wider">R E S T A U R A N T</div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-green-700 transition-colors font-medium"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-green-700 transition-colors font-medium"
                data-testid="nav-about"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-gray-700 hover:text-green-700 transition-colors font-medium"
                data-testid="nav-menu"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-green-700 transition-colors font-medium"
                data-testid="nav-gallery"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('videos')}
                className="text-gray-700 hover:text-green-700 transition-colors font-medium"
                data-testid="nav-videos"
              >
                Videos
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-gray-700 hover:text-green-700 transition-colors font-medium"
                data-testid="nav-blog"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-green-700 transition-colors font-medium"
                data-testid="nav-contact"
              >
                Contact Us
              </button>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="py-4 space-y-3">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50"
                  data-testid="mobile-nav-home"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50"
                  data-testid="mobile-nav-about"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50"
                  data-testid="mobile-nav-menu"
                >
                  Menu
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50"
                  data-testid="mobile-nav-gallery"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => scrollToSection('videos')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50"
                  data-testid="mobile-nav-videos"
                >
                  Videos
                </button>
                <button 
                  onClick={() => scrollToSection('blog')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50"
                  data-testid="mobile-nav-blog"
                >
                  Blog
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50"
                  data-testid="mobile-nav-contact"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;