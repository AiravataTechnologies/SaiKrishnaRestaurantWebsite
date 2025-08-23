import React from "react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import MobileCallToAction from "../components/MobileCallToAction";

const GalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Gallery />
      <Footer />
      <ScrollToTop />
      <MobileCallToAction />
      {/* Add bottom padding on mobile to account for fixed buttons */}
      <div className="h-16 md:hidden"></div>
    </div>
  );
};

export default GalleryPage;