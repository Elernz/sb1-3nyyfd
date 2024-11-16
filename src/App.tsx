import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profiles from './components/Profiles';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Profiles />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;