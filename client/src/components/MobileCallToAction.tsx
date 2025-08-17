import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const MobileCallToAction: React.FC = () => {
  const handleCallNow = () => {
    window.location.href = 'tel:+919004989629';
  };

  const handleChatNow = () => {
    // WhatsApp link with the restaurant's phone number
    window.open('https://wa.me/919004989629?text=Hello,%20I%20would%20like%20to%20make%20a%20reservation%20at%20Sai%20Krishna%20Restaurant', '_blank');
  };

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden mobile-call-to-action" 
      style={{ 
        height: '64px',
        contain: 'layout style',
        willChange: 'auto'
      }}
    >
      <div className="flex select-none" style={{ height: '64px' }}>
        {/* Call Now Button */}
        <button
          onClick={handleCallNow}
          className="flex-1 bg-blue-500 active:bg-blue-700 text-white font-semibold flex items-center justify-center space-x-2 touch-manipulation outline-none focus:outline-none"
          data-testid="button-call-now"
          style={{ 
            WebkitTapHighlightColor: 'transparent',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            height: '64px',
            minHeight: '64px',
            maxHeight: '64px',
            padding: '0 1.5rem',
            contain: 'layout style',
            position: 'relative',
            flex: '1 1 50%'
          }}
        >
          <Phone className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium ml-2">Call Now</span>
        </button>
        
        {/* Chat Now Button */}
        <button
          onClick={handleChatNow}
          className="flex-1 bg-green-500 active:bg-green-700 text-white font-semibold flex items-center justify-center space-x-2 touch-manipulation outline-none focus:outline-none"
          data-testid="button-chat-now"
          style={{ 
            WebkitTapHighlightColor: 'transparent',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            height: '64px',
            minHeight: '64px',
            maxHeight: '64px',
            padding: '0 1.5rem',
            contain: 'layout style',
            position: 'relative',
            flex: '1 1 50%'
          }}
        >
          <MessageCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium ml-2">Chat Now</span>
        </button>
      </div>
    </div>
  );
};

export default MobileCallToAction;