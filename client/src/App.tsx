import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Blog from './components/Blog';
import OnlineOrdering from './components/OnlineOrdering';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Videos />
      <Blog />
      <OnlineOrdering />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;