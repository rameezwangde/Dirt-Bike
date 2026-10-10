import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useCurrency } from '../context/CurrencyContext';

const packages = [
  {
    id: 1,
    title: "Polaris RZR 2 Seater (Early Morning)",
    duration: "1-Hour",
    seats: 2,
    price: 850,
    image: "/images/polaris.jpeg"
  },
  {
    id: 2,
    title: "Polaris RZR 2 Seater",
    duration: "1-Hour",
    seats: 2,
    price: 1000,
    image: "/images/polaris-2.jpeg"
  },
  {
    id: 3,
    title: "Polaris RZR Turbo S ( Early Morning )",
    duration: "2-Hour",
    seats: 2,
    price: 1250,
    image: "/images/polaris-3.jpeg"
  },
  {
    id: 4,
    title: "Polaris RZR 2 Seater",
    duration: "2-Hour",
    seats: 2,
    price: 1450,
    image: "/images/polaris-1000cc.jpeg"
  },
  {
    id: 5,
    title: "Polaris RZR Fossil Rock Tour",
    duration: "3-Hour",
    seats: 2,
    price: 1800,
    image: "/images/polaris.jpeg"
  },
  {
    id: 6,
    title: "Single Seater Polaris RS1",
    duration: "1-Hour",
    seats: 1,
    price: 750,
    image: "/images/polaris-2.jpeg"
  },
  {
    id: 7,
    title: "Single Seater Polaris RS1",
    duration: "2-Hour",
    seats: 1,
    price: 1250,
    image: "/images/polaris-3.jpeg"
  },
  {
    id: 8,
    title: "Single Seater Polaris RS1",
    duration: "3-Hour",
    seats: 1,
    price: 1550,
    image: "/images/polaris-1000cc.jpeg"
  },
  {
    id: 9,
    title: "Single Seater Polaris RS1 ( Early Morning )",
    duration: "2-Hour",
    seats: 1,
    price: 1150,
    image: "/images/polaris.jpeg"
  },
  {
    id: 10,
    title: "Can-Am Maverick X3 ( Early Morning )",
    duration: "1-Hour",
    seats: 2,
    price: 1150,
    image: "/images/x3.jpeg"
  },
  {
    id: 11,
    title: "Can-Am Maverick X3",
    duration: "1-Hour",
    seats: 2,
    price: 1350,
    image: "/images/x3.jpeg"
  },
  {
    id: 12,
    title: "Can-Am Maverick X3 Turbo ( Early Morning )",
    duration: "2-Hour",
    seats: 2,
    price: 1750,
    image: "/images/x3.jpeg"
  },
  {
    id: 13,
    title: "Can-Am Maverick X3 Turbo",
    duration: "2-Hour",
    seats: 2,
    price: 2150,
    image: "/images/x3.jpeg"
  },
  {
    id: 14,
    title: "Can-Am Maverick X3 Turbo 4 Seater (Early Morning)",
    duration: "1-Hour",
    seats: 4,
    price: 1200,
    image: "/images/x3.jpeg"
  },
  {
    id: 15,
    title: "Can-Am Maverick X3 Turbo 4 Seater",
    duration: "1-Hour",
    seats: 4,
    price: 1300,
    image: "/images/x3.jpeg"
  }
];

const BuggyRental = () => {
  const { currency, convertPrice } = useCurrency();

  return (
    <div className="bg-cream min-h-screen pt-32 font-inter">
      <Navbar />
      
      <div className="max-w-[1200px] mx-auto px-6 pb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#11161A] text-center mb-4 font-barlow tracking-wide"
        >
          Best Dune Buggy Dubai Tour Packages
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-center mb-16 max-w-2xl mx-auto"
        >
          We have many Dune buggy tour packages to accommodate your needs and the time you plan or have for your trips. Here's a brief review of our top packages:
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 2) * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-lg"
            >
              {/* Image side */}
              <div className="sm:w-[45%] h-[250px] sm:h-auto relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content side */}
              <div className="sm:w-[55%] p-6 md:p-8 flex flex-col justify-center flex-grow">
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

                <div className="mb-6 mt-auto flex items-end gap-2">
                  <div className="flex items-start">
                    <span className="text-[#F97818] font-bold text-sm mt-1 mr-1">{currency.code}</span>
                    <span className="text-[#11161A] font-barlow font-black text-4xl leading-none">{convertPrice(pkg.price)}</span>
                  </div>
                  <span className="text-gray-500 text-sm font-medium mb-1">/ Per Buggy</span>
                </div>

                <div className="flex items-center gap-4">
                  <a href="https://wa.me/971504799258" target="_blank" rel="noopener noreferrer" className="bg-[#cf8144] hover:bg-[#b56e36] text-white py-2.5 px-6 rounded text-sm font-medium transition-colors w-fit inline-block">
                    Book Now
                  </a>
                  <Link to="/packages" className="border border-[#cf8144] text-[#cf8144] hover:bg-[#cf8144] hover:text-white py-2.5 px-6 rounded text-sm font-medium transition-colors w-fit inline-block text-center">
                    Back
                  </Link>
                </div>
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
