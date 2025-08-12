import React from 'react';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;