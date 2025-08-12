import React, { useState } from 'react';
import { Briefcase, Users, Shield, Award } from 'lucide-react';

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState('');
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    certifications: '',
    coverLetter: ''
  });

  const positions = [
    {
      title: "Commercial Diver",
      type: "Full-time",
      requirements: [
        "Commercial diving certification",
        "Minimum 2 years experience",
        "Clean diving record",
        "Physical fitness requirements",
        "Valid driver's license"
      ],
      description: "Join our team of professional commercial divers performing inspections, cleaning, and recovery operations."
    },
    {
      title: "Dive Tender",
      type: "Full-time / Part-time",
      requirements: [
        "Experience with dive operations",
        "Strong communication skills",
        "Physical fitness requirements",
        "Ability to work in marine environments",
        "CPR/First Aid certified (preferred)"
      ],
      description: "Support dive operations as a tender, managing equipment and ensuring diver safety from the surface."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description: "Comprehensive safety training and top-quality equipment"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Professional Growth",
      description: "Ongoing training and certification opportunities"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Environment",
      description: "Work with experienced professionals in a supportive team"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Competitive Pay",
      description: "Industry-competitive wages with performance bonuses"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted! We will review your application and contact you within 5 business days.');
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      certifications: '',
      coverLetter: ''
    });
    setSelectedPosition('');
  };

  return (
    <section id="careers" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We're looking for skilled professionals to join our growing underwater solutions team. 
            Be part of a company that values safety, professionalism, and excellence.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-slate-700 rounded-xl p-6 text-center hover:bg-slate-600 transition-colors">
              <div className="text-cyan-400 mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-slate-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Open Positions */}
            <div>
              <h3 className="text-3xl font-bold mb-8">Open Positions</h3>
              <div className="space-y-6">
                {positions.map((position, index) => (
                  <div key={index} className="bg-slate-700 rounded-xl p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-cyan-400">{position.title}</h4>
                      <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm">
                        {position.type}
                      </span>
                    </div>
                    
                    <p className="text-slate-300 mb-4">{position.description}</p>
                    
                    <h5 className="font-semibold text-white mb-2">Requirements:</h5>
                    <ul className="text-slate-300 text-sm space-y-1 mb-4">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={() => setSelectedPosition(position.title)}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <div>
              <h3 className="text-3xl font-bold mb-8">Apply Today</h3>
              <div className="bg-white rounded-xl p-8 text-slate-800">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label className="block font-semibold mb-2">Position *</label>
                      <select
                        value={selectedPosition}
                        onChange={(e) => setSelectedPosition(e.target.value)}
                        required
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select a position...</option>
                        {positions.map((position, index) => (
                          <option key={index} value={position.title}>{position.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={applicationData.name}
                        onChange={(e) => setApplicationData({...applicationData, name: e.target.value})}
                        required
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        value={applicationData.email}
                        onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                        required
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold mb-2">Phone *</label>
                      <input
                        type="tel"
                        value={applicationData.phone}
                        onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                        required
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold mb-2">Relevant Experience *</label>
                      <textarea
                        value={applicationData.experience}
                        onChange={(e) => setApplicationData({...applicationData, experience: e.target.value})}
                        required
                        rows={4}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Describe your relevant diving or marine experience..."
                      />
                    </div>

                    <div>
                      <label className="block font-semibold mb-2">Certifications</label>
                      <textarea
                        value={applicationData.certifications}
                        onChange={(e) => setApplicationData({...applicationData, certifications: e.target.value})}
                        rows={3}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="List any relevant certifications (diving, safety, etc.)..."
                      />
                    </div>

                    <div>
                      <label className="block font-semibold mb-2">Cover Letter</label>
                      <textarea
                        value={applicationData.coverLetter}
                        onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                        rows={4}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Tell us why you'd be a great fit for our team..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;