import React from 'react';
import { Search, Eye, Waves, CheckCircle } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Eye className="service-icon" />,
      title: "Underwater Inspection",
      price: "Free with service",
      description: "Comprehensive hull, dock, and marine structure inspections with detailed reporting.",
      features: ["Hull damage assessment", "Propeller inspection", "Through-hull fittings check", "Photo/video documentation"]
    },
    {
      icon: <Search className="service-icon" />,
      title: "Search & Recovery",
      price: "Contact for quote",
      description: "Professional underwater search and recovery operations for lost items and evidence.",
      features: ["Metal detection services", "Evidence recovery", "Personal item retrieval", "GPS mapping"]
    },
    {
      icon: <Waves className="service-icon" />,
      title: "Boat & Hull Cleaning",
      price: "Starting at $150",
      description: "Complete marine cleaning services to maintain your vessel's performance and appearance.",
      features: ["Hull cleaning", "Propeller polishing", "Zinc replacement", "Barnacle removal"]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">
            Our Services
          </h2>
          <p className="services-subtitle">
            Professional underwater services delivered by certified commercial divers with 5+ years of combined experience.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-header">
                <div className="service-header-content">
                  {service.icon}
                  <span className="service-price">{service.price}</span>
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              
              <div className="service-card-body">
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="service-feature">
                      <CheckCircle className="feature-icon" />
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;