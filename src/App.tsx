import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingCalendar from './components/BookingCalendar';
import Reviews from './components/Reviews';
import Careers from './components/Careers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      {/* <BookingCalendar />
      <Reviews /> 
      <Careers */}
      <Footer />
    </div>
  );
}

export default App;