import React from "react";
import { Heart, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import saiKrishnaLogo from "@assets/image_1755345512280.png";

const Footer: React.FC = () => {
  return (
    <footer
      className="text-white relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(72, 187, 120, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #047857 0%, #059669 50%, #065f46 100%)
        `,
      }}
    >
      {/* Text contrast overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px, 50px 50px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={saiKrishnaLogo}
                alt="Sai Krishna Restaurant Logo"
                className="w-15 h-16 object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A 10-year old family-run restaurant serving authentic and creative
              South Indian cuisine in a comforting atmosphere. Experience the
              true taste of South India with our traditional recipes and warm
              hospitality.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <div className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </div>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <div className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-200 hover:text-orange-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#speciality"
                  className="text-gray-200 hover:text-orange-400 transition-colors"
                >
                  Our Speciality
                </a>
              </li>
              <li>
                <a
                  href="#legacy"
                  className="text-gray-200 hover:text-orange-400 transition-colors"
                >
                  Our Legacy
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-200 hover:text-orange-400 transition-colors"
                >
                  Best Dishes
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-200 hover:text-orange-400 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-200 hover:text-orange-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-200">
                  Ground Floor, Plot No 31, Mahakali Caves Rd, opp. Hanuman
                  Mandir, Dhawalgiri, Sher E Punjab Colony, Andheri East,
                  Mumbai, Maharashtra 400093
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-200">+91 90049 89629</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-200">
                  info@saikrishnarestaurant.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 mb-4 md:mb-0">
              © 2024 Sai Krishna Restaurant. All rights reserved.
            </p>
            <p className="text-gray-200 flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for
              authentic South Indian cuisine
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
