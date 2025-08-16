import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "The Art of Making Perfect South Indian Dosa",
      excerpt: "Discover the secrets behind our crispy, golden dosas that have been perfected over 43 years of culinary excellence.",
      image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 15, 2024",
      author: "Chef Raman",
      category: "Recipes"
    },
    {
      title: "43 Years of Culinary Legacy: Our Journey",
      excerpt: "From a small family restaurant to Mumbai's beloved South Indian destination - read about our incredible journey.",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 10, 2024",
      author: "Sri Krishna Team",
      category: "Story"
    },
    {
      title: "Health Benefits of Traditional South Indian Cuisine",
      excerpt: "Learn why South Indian food is not just delicious but also incredibly nutritious and beneficial for your health.",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 5, 2024",
      author: "Dr. Priya Sharma",
      category: "Health"
    },
    {
      title: "Festival Special: Celebrating with Authentic Flavors",
      excerpt: "Discover our special festival menu and how we celebrate traditional Indian festivals with authentic cuisine.",
      image: "https://images.pexels.com/photos/1625736/pexels-photo-1625736.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 28, 2024",
      author: "Chef Raman",
      category: "Festivals"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Decorative ornament */}
          <div className="flex justify-center mb-6">
            <div className="text-orange-500 text-3xl">✦ ❋ ✦</div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Blog
          </h2>
          <div className="flex justify-center mb-6">
            <div className="text-orange-500 text-3xl">❋ ✦ ❋</div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Read our latest stories, recipes, and insights about South Indian cuisine and culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors group-hover:translate-x-2 transform duration-300">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;