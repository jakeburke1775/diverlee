import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Captain Mike Rodriguez",
      business: "Pacific Marine Services",
      rating: 5,
      text: "Exceptional service! Lee's team found and recovered my boat's anchor after it got stuck in 40 feet of water. Professional, quick, and reasonably priced. Highly recommend!",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Sarah Chen",
      business: "Harborview Marina",
      rating: 5,
      text: "Outstanding hull cleaning service. My boat's performance improved dramatically after their thorough cleaning. The before and after photos they provided were impressive!",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Tom Wilson",
      business: "Private Boat Owner",
      rating: 5,
      text: "Lee performed a comprehensive inspection before I purchased my yacht. His detailed report and honest assessment saved me thousands. Couldn't be happier with the service.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Marina Director",
      business: "Sunset Bay Marina",
      rating: 5,
      text: "We've been using Diver Lee's services for dock inspections for over 3 years. Always professional, thorough, and reliable. They're our go-to for all underwater needs.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Jessica Martinez",
      business: "Coastal Insurance",
      rating: 5,
      text: "Lee's underwater damage assessment was thorough and well-documented. His detailed report with photos helped us process the claim quickly and accurately.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Captain Frank Thompson",
      business: "Charter Fleet Operations",
      rating: 5,
      text: "Regular maintenance cleaning keeps our charter fleet in top condition. Lee's team is efficient, professional, and always delivers quality work on schedule.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what marina owners, boat captains, and private vessel owners have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 relative">
              <div className="absolute top-4 right-4 text-cyan-500">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-slate-800">{review.name}</h4>
                  <p className="text-sm text-slate-600">{review.business}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(review.rating)}
              </div>

              <p className="text-slate-700 leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Satisfied Customers</h3>
            <p className="text-lg mb-6">
              Experience the difference professional underwater services can make for your marine operations.
            </p>
            <a
              href="#booking"
              className="bg-white text-cyan-600 hover:bg-slate-100 font-bold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Schedule Your Service Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;