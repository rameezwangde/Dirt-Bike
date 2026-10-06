import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const packages = [
  {
    id: 1,
    title: "Polaris RZR 2 Seater (Early Morning)",
    duration: "1-Hour",
    seats: 2,
    price: 850,
    image: "/images/dune-buggy.jpg"
  },
  {
    id: 2,
    title: "Polaris RZR 2 Seater",
    duration: "1-Hour",
    seats: 2,
    price: 1000,
    image: "/images/dune-buggy-tour.jpg"
  },
  {
    id: 3,
    title: "Polaris RZR Turbo S ( Early Morning )",
    duration: "2-Hour",
    seats: 2,
    price: 1250,
    image: "/images/dune-buggy.jpg"
  },
  {
    id: 4,
    title: "Polaris RZR 2 Seater",
    duration: "2-Hour",
    seats: 2,
    price: 1450,
    image: "/images/dune-buggy-tour.jpg"
  },
  {
    id: 5,
    title: "Polaris RZR Fossil Rock Tour",
    duration: "3-Hour",
    seats: 2,
    price: 1800,
    image: "/images/dune-buggy.jpg"
  },
  {
    id: 6,
    title: "Single Seater Polaris RS1",
    duration: "1-Hour",
    seats: 1,
    price: 750,
    image: "/images/dune-buggy-tour.jpg"
  },
  {
    id: 7,
    title: "Single Seater Polaris RS1",
    duration: "2-Hour",
    seats: 1,
    price: 1250,
    image: "/images/dune-buggy.jpg"
  },
  {
    id: 8,
    title: "Single Seater Polaris RS1",
    duration: "3-Hour",
    seats: 1,
    price: 1550,
    image: "/images/dune-buggy-tour.jpg"
  },
  {
    id: 9,
    title: "Single Seater Polaris RS1 ( Early Morning )",
    duration: "2-Hour",
    seats: 1,
    price: 1150,
    image: "/images/dune-buggy.jpg"
  },
  {
    id: 10,
    title: "Can-Am Maverick X3 ( Early Morning )",
    duration: "1-Hour",
    seats: 2,
    price: 1150,
    image: "/images/dune-buggy-tour.jpg"
  },
  {
    id: 11,
    title: "Can-Am Maverick X3",
    duration: "1-Hour",
    seats: 2,
    price: 1350,
    image: "/images/dune-buggy.jpg"
  },
  {
    id: 12,
    title: "Can-Am Maverick X3 Turbo ( Early Morning )",
    duration: "2-Hour",
    seats: 2,
    price: 1750,
    image: "/images/dune-buggy-tour.jpg"
  },
  {
    id: 13,
    title: "Can-Am Maverick X3 Turbo",
    duration: "2-Hour",
    seats: 2,
    price: 2150,
    image: "/images/dune-buggy.jpg"
  },
  {
    id: 14,
    title: "Can-Am Maverick X3 Turbo 4 Seater (Early Morning)",
    duration: "1-Hour",
    seats: 4,
    price: 1200,
    image: "/images/dune-buggy-tour.jpg"
  },
  {
    id: 15,
    title: "Can-Am Maverick X3 Turbo 4 Seater",
    duration: "1-Hour",
    seats: 4,
    price: 1300,
    image: "/images/dune-buggy.jpg"
  }
];

const BuggyRental = () => {
  return (
    <div className="bg-[#1a2332] min-h-screen pt-32 font-inter">
      <Navbar />
      
      <div className="max-w-[1200px] mx-auto px-6 pb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4 font-barlow tracking-wide"
        >
          Best Dune Buggy Dubai Tour Packages
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-white/80 text-center mb-16 max-w-2xl mx-auto"
        >
          We have many Dune buggy tour packages to accommodate your needs and the time you plan or have for your trips. Here's a brief review of our top packages:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-lg"
            >
              {/* Image side */}
              <div className="w-full h-[250px] relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content side */}
              <div className="p-6 md:p-8 flex flex-col justify-center flex-grow">
                <h3 className="text-[20px] font-bold text-[#11161A] mb-4 font-barlow uppercase">
                  {pkg.title}
                </h3>
                
                <div className="flex flex-col gap-2 mb-6 text-[15px] text-gray-700">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#cf8144]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Tour duration: {pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#cf8144]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Seats: {pkg.seats}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-gray-600 text-sm">Per Buggy </span>
                  <span className="text-xl font-bold text-[#11161A]">AED {pkg.price}</span>
                </div>

                <button className="bg-[#cf8144] hover:bg-[#b56e36] text-white py-2.5 px-6 rounded text-sm font-medium transition-colors w-fit">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuggyRental;
