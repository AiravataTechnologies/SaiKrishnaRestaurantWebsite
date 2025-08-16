import React from 'react';
import { ExternalLink, Star, Clock, Smartphone } from 'lucide-react';

const OnlineOrdering: React.FC = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-green-800 mb-6">
            Order <span className="text-orange-500">Online</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enjoy our authentic South Indian cuisine from the comfort of your home. 
            Order online through your favorite food delivery platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Swiggy Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">S</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800">Swiggy</h3>
                  <p className="text-gray-600">Food delivery & more</p>
                </div>
              </div>
              <div className="flex items-center space-x-1 bg-green-100 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-green-700 fill-current" />
                <span className="text-green-700 font-semibold">4.3</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">30-45 mins delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <Smartphone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">Track your order live</span>
              </div>
            </div>
            
            <button 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              data-testid="button-swiggy-order"
            >
              <span>Order on Swiggy</span>
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>

          {/* Zomato Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-red-500">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800">Zomato</h3>
                  <p className="text-gray-600">Food delivery service</p>
                </div>
              </div>
              <div className="flex items-center space-x-1 bg-green-100 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-green-700 fill-current" />
                <span className="text-green-700 font-semibold">4.2</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">25-40 mins delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <Smartphone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">Real-time order tracking</span>
              </div>
            </div>
            
            <button 
              className="w-full bg-red-500 hover:bg-red-600 text-white py-4 px-6 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              data-testid="button-zomato-order"
            >
              <span>Order on Zomato</span>
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Special Offers Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-green-100">
          <h3 className="text-2xl font-bold text-green-800 text-center mb-8">Special Online Offers</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-500 mb-2">20%</div>
              <div className="text-green-800 font-semibold mb-2">OFF</div>
              <div className="text-gray-600 text-sm">On orders above ₹500</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-700 mb-2">FREE</div>
              <div className="text-green-800 font-semibold mb-2">DELIVERY</div>
              <div className="text-gray-600 text-sm">On orders above ₹300</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-500 mb-2">15%</div>
              <div className="text-green-800 font-semibold mb-2">CASHBACK</div>
              <div className="text-gray-600 text-sm">For first-time orders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineOrdering;