import React from "react";
import logo from "../../assets/diverLeeLogo.svg";
import bubble from "../../assets/bubble.svg";
import { ChevronDown } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Animated Bubbles */}
      <div className="bubbles-container">
        {[...Array(16)].map((_, i) => {
          const zIndex = Math.random() < 0.33 ? 10 : 1;
          // Set the center exclusion zone (percentage of the screen)
          const centerPercent = 70; // Change this value to adjust the center exclusion zone
          const sidePercent = (100 - centerPercent) / 2;
          const region = Math.random() < 0.5 ? "left" : "right";
          const left =
            region === "left"
              ? Math.random() * sidePercent // 0 to sidePercent
              : 100 - sidePercent + Math.random() * sidePercent; // (100-sidePercent) to 100
          return (
            <img
              key={i}
              src={bubble}
              alt="Bubble"
              className={`bubble bubble-${i + 1}`}
              style={{
                left: `${left}%`,
                animationDelay: "0s",
                animationDuration: `${8 + Math.random() * 12}s`,
                zIndex,
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-logo-wrapper">
            <img
              src={logo}
              alt="Diver Lee's Underwater Solutions"
              className="hero-logo-svg"
            />
          </div>
          <p className="hero-subtitle">
            Expert dive services for inspections, search & recovery, and marine
            cleaning. Serving DFW Lakes with professional precision and safety.
          </p>
          <p className="hero-subtitle">
            Veteran owned and operated. Licensed, bonded, and insured.
          </p>

          {/* Contact Info Prominently Displayed */}
          <div className="hero-contact">
            <div className="contact-item">
              <span className="contact-label">Call Now:</span>
              <span className="contact-value">(817) 938-8016</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span className="contact-value">info@diverleeunderwater.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <ChevronDown className="scroll-icon" color="#d9ac26ff" />
      </div>
    </section>
  );
};

export default Hero;
