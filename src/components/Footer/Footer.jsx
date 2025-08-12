import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="company-section">
            <div className="company-header">
              <div className="company-logo">
                <div className="logo-circle">
                  <span className="logo-text">DL</span>
                </div>
              </div>
              <div className="company-info">
                <h3 className="company-name">Diver Lee's Underwater Solutions</h3>
                <p className="company-subtitle">Underwater Solutions LLC</p>
              </div>
            </div>
            <p className="company-description">
              Professional underwater services serving the coastal community with expertise in 
              inspections, search & recovery, and marine cleaning solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <Instagram className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <Linkedin className="social-icon" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-section">
            <h4 className="section-title">Contact Info</h4>
            <div className="contact-list">
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div className="contact-details">
                  <p className="contact-primary">(555) 123-DIVE</p>
                  <p className="contact-secondary">24/7 Emergency</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div className="contact-details">
                  <p className="contact-primary">info@diverleeunderwater.com</p>
                </div>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div className="contact-details">
                  <p className="contact-primary">123 Harbor Drive</p>
                  <p className="contact-primary">Coastal City, CA 90210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="hours-section">
            <h4 className="section-title">Business Hours</h4>
            <div className="hours-content">
              <div className="hours-header">
                <Clock className="hours-icon" />
                <div>
                  <p className="hours-title">Regular Hours</p>
                </div>
              </div>
              <div className="hours-list">
                <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 4:00 PM</p>
                <p>Sunday: Emergency calls only</p>
              </div>
              <div className="emergency-notice">
                <p className="emergency-title">Emergency Service</p>
                <p className="emergency-description">Available 24/7 for urgent underwater needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © 2024 Diver Lee's Underwater Solutions LLC. All rights reserved.
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Insurance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;