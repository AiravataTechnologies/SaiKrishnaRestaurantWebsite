import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Authentic Recipes",
      description: "Traditional recipes passed down through generations"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Chefs",
      description: "Experienced chefs from South India"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fresh Daily",
      description: "All dishes prepared fresh every day"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made with Love",
      description: "Every dish crafted with passion and care"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-green-800 mb-6">
            About <span className="text-orange-500">Sai Krishna</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the authentic taste of South India at Sai Krishna Restaurant. 
            We bring you traditional flavors, aromatic spices, and time-honored recipes 
            in a warm and welcoming atmosphere.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-green-800 mb-6">
              Our Story
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded over 43 years ago, Sai Krishna Restaurant has been serving authentic South Indian 
              cuisine to food lovers who appreciate traditional flavors and genuine hospitality. 
              Our journey began with a simple mission: to share the rich culinary heritage of 
              South India with our community in Mumbai.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From crispy dosas and fluffy idlis to spicy sambars and aromatic rasam, every 
              dish is prepared using traditional methods and the finest ingredients sourced 
              directly from South India. Our expert chefs bring decades of experience and 
              authentic recipes that have been perfected over generations.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-700" data-testid="text-years">43+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-500" data-testid="text-menu">50+</div>
                <div className="text-sm text-gray-600">Menu Items</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-700" data-testid="text-customers">50k+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="South Indian cuisine preparation"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover hover-lift"
              data-testid="img-about-cuisine"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <div className="font-bold text-green-800">Family Tradition</div>
                  <div className="text-sm text-gray-600">Since 1980</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group hover:-translate-y-1 transform transition-transform border border-green-100"
              data-testid={`card-feature-${index}`}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-green-800 mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;