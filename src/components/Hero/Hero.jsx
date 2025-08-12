import React from 'react';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Animated Bubbles */}
      <div className="bubbles-container">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`bubble bubble-${i + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Diver Lee's
            <span className="hero-title-gradient">
              Underwater Solutions
            </span>
          </h1>
          <p className="hero-subtitle">
            Matthew Lee Andre
          </p>
          <p className="hero-subtitle">
            CL Mayhew
          </p>
          <p className="hero-subtitle">
            Expert dive services for inspections, search & recovery, and marine cleaning. 
            Serving Texas Lakes with professional precision and safety.
          </p>
          
          {/* Contact Info Prominently Displayed */}
          <div className="hero-contact">
            <div className="contact-item">
              <span className="contact-label">Call Now:</span>
              <span className="contact-value">(817) 123-DIVE</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span className="contact-value">info@diverleeunderwater.com</span>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">Veteran</div>
              <div className="stat-label">Owned and operated</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Emergency Response</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Licensed & Insured</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <ChevronDown className="scroll-icon" />
      </div>
    </section>
  );
};

export default Hero;