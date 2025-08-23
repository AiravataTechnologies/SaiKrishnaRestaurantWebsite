import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import MobileCallToAction from "../components/MobileCallToAction";

const MenuPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Menu />
      <Footer />
      <ScrollToTop />
      <MobileCallToAction />
      {/* Add bottom padding on mobile to account for fixed buttons */}
      <div className="h-16 md:hidden"></div>
    </div>
  );
};

export default MenuPage;