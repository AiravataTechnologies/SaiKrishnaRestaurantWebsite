import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Videos from "../components/Videos";
import OnlineOrdering from "../components/OnlineOrdering";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import MobileCallToAction from "../components/MobileCallToAction";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Videos />
      <OnlineOrdering />
      <Reviews />
      <Footer />
      <ScrollToTop />
      <MobileCallToAction />
      {/* Add bottom padding on mobile to account for fixed buttons */}
      <div className="h-16 md:hidden"></div>
    </div>
  );
};

export default Home;