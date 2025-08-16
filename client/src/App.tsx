import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Speciality from './components/Speciality';
import Legacy from './components/Legacy';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Blog from './components/Blog';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Speciality />
      <Legacy />
      <Menu />
      <Gallery />
      <Videos />
      <Blog />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;