import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-full">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">DL</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Diver Lee's Underwater Solutions</h3>
                <p className="text-slate-400">Underwater Solutions LLC</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Professional underwater services serving the coastal community with expertise in 
              inspections, search & recovery, and marine cleaning solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 hover:bg-cyan-600 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-cyan-600 p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-cyan-600 p-3 rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-cyan-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="font-semibold">(555) 123-DIVE</p>
                  <p className="text-sm text-slate-400">24/7 Emergency</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <p>info@diverleeunderwater.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p>123 Harbor Drive</p>
                  <p>Coastal City, CA 90210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-cyan-400">Business Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="font-semibold">Regular Hours</p>
                </div>
              </div>
              <div className="text-slate-300 text-sm space-y-1">
                <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 4:00 PM</p>
                <p>Sunday: Emergency calls only</p>
              </div>
              <div className="mt-4 p-3 bg-slate-800 rounded-lg">
                <p className="text-sm text-cyan-400 font-semibold">Emergency Service</p>
                <p className="text-sm text-slate-300">Available 24/7 for urgent underwater needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 Diver Lee's Underwater Solutions LLC. All rights reserved.
            </div>
            <div className="flex space-x-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Insurance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;