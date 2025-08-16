import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <div className="text-white font-bold text-lg">श्री</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  <span className="text-white">SAI</span>
                  <span className="text-orange-400 ml-1">KRISHNA</span>
                </div>
                <div className="text-xs text-gray-300 tracking-wider">R E S T A U R A N T</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A 43-year old family-run restaurant serving authentic and creative South Indian 
              cuisine in a comforting atmosphere. Experience the true taste of South India 
              with our traditional recipes and warm hospitality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <div className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <div className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#speciality" className="text-gray-400 hover:text-white transition-colors">
                  Our Speciality
                </a>
              </li>
              <li>
                <a href="#legacy" className="text-gray-400 hover:text-white transition-colors">
                  Our Legacy
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-white transition-colors">
                  Best Dishes
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Nana Chowk, Grant Road, Mumbai - 400007
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400">022 2386 7544</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400">90040 81590</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400">info@srikrishnarestaurant.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Sri Krishna Restaurant. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for authentic South Indian cuisine
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;