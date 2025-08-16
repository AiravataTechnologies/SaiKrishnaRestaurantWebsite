import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Decorative ornament */}
          <div className="flex justify-center mb-6">
            <div className="text-orange-500 text-3xl">✦ ❋ ✦</div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Contact Us
          </h2>
          <div className="flex justify-center mb-6">
            <div className="text-orange-500 text-3xl">❋ ✦ ❋</div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Visit us for an authentic South Indian dining experience. We're here to serve you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nana Chowk, Grant Road,<br />
                  Mumbai - 400007<br />
                  Maharashtra, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">022 2386 7544</p>
                <p className="text-gray-600">90040 81590</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">info@srikrishnarestaurant.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Breakfast: 7:00 AM - 10:30 AM</p>
                  <p>Lunch: 11:00 AM - 3:30 PM</p>
                  <p>Snacks: 4:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* We Are Section */}
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">We Are Available On:</h4>
              <div className="flex space-x-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2">
                  <span>🛵</span>
                  <span>Swiggy</span>
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2">
                  <span>🍽️</span>
                  <span>Zomato</span>
                </button>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div className="bg-gray-200 rounded-2xl h-96 lg:h-full flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-semibold">Find Us Here</p>
                <p className="text-sm mt-2">Nana Chowk, Grant Road</p>
                <p className="text-sm">Mumbai - 400007</p>
              </div>
            </div>
            
            {/* Floating Address Card */}
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sri Krishna</div>
                  <div className="text-sm text-gray-600">Restaurant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;