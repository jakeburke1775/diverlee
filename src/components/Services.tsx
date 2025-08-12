import React from 'react';
import { Search, Eye, Waves, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Underwater Inspection",
      price: "Free with service",
      description: "Comprehensive hull, dock, and marine structure inspections with detailed reporting.",
      features: ["Hull damage assessment", "Propeller inspection", "Through-hull fittings check", "Photo/video documentation"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search & Recovery",
      price: "Contact for quote",
      description: "Professional underwater search and recovery operations for lost items and evidence.",
      features: ["Metal detection services", "Evidence recovery", "Personal item retrieval", "GPS mapping"]
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Boat & Hull Cleaning",
      price: "Starting at $150",
      description: "Complete marine cleaning services to maintain your vessel's performance and appearance.",
      features: ["Hull cleaning", "Propeller polishing", "Zinc replacement", "Barnacle removal"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional underwater services delivered by certified commercial divers with decades of combined experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <span className="text-lg font-semibold">{service.price}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-slate-600 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                  Book This Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;