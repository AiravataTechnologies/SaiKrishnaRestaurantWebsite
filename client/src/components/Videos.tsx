import React from 'react';
import { Play } from 'lucide-react';

const Videos: React.FC = () => {
  const videos = [
    {
      title: "Sai Krishna Restaurant Food Testimonial",
      thumbnail: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "3:45"
    },
    {
      title: "Behind the Scenes - Kitchen Tour",
      thumbnail: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "5:20"
    },
    {
      title: "Traditional Dosa Making Process",
      thumbnail: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "4:15"
    },
    {
      title: "Customer Experience Stories",
      thumbnail: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "6:30"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Decorative ornament */}
          <div className="flex justify-center mb-6">
            <div className="text-orange-500 text-3xl">✦ ❋ ✦</div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Videos
          </h2>
          <div className="flex justify-center mb-6">
            <div className="text-orange-500 text-3xl">❋ ✦ ❋</div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Watch our culinary journey and customer experiences through these videos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;