import React, { useState } from 'react';
import { X, Play } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      type: 'video',
      thumbnail: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Sri Krishna Restaurant Food Testimonial"
    },
    {
      type: 'image',
      url: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Restaurant Exterior"
    },
    {
      type: 'image',
      url: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Private Dining Room"
    },
    {
      type: 'image',
      url: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Kitchen View"
    },
    {
      type: 'image',
      url: "https://images.pexels.com/photos/1625736/pexels-photo-1625736.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Dining Area"
    },
    {
      type: 'image',
      url: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Food Preparation"
    },
    {
      type: 'image',
      url: "https://images.pexels.com/photos/6419686/pexels-photo-6419686.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Team Photo"
    },
    {
      type: 'image',
      url: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Kitchen Staff"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-green-800 via-green-700 to-green-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-600 rounded-full opacity-20 transform -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600 rounded-full opacity-20 transform translate-x-48 translate-y-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* White content box */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-16">
            {/* Decorative ornament */}
            <div className="flex justify-center mb-6">
              <div className="text-orange-500 text-3xl">✦ ❋ ✦</div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Gallery
            </h2>
            <div className="flex justify-center mb-6">
              <div className="text-orange-500 text-3xl">❋ ✦ ❋</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Video thumbnail */}
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="relative group cursor-pointer overflow-hidden rounded-xl h-full min-h-64">
                <img 
                  src={galleryItems[0].thumbnail}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white font-semibold">
                  Sri Krishna Restaurant Food Testimonial
                </div>
              </div>
            </div>

            {/* Gallery images */}
            {galleryItems.slice(1).map((item, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => item.type === 'image' && setSelectedImage(item.url!)}
              >
                <img 
                  src={item.url}
                  alt={item.title}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm text-center px-2">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;