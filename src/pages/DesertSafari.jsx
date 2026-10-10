import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useCurrency } from '../context/CurrencyContext';

const packages = [
  {
    id: 1,
    title: "Polarize 1000 cc",
    location: "Dubai",
    priceType: "Per Buggy",
    price: "?",
    image: "/images/polarize-1000.jpeg"
  },
  {
    id: 2,
    title: "Can Am Maverick XR",
    location: "Dubai",
    priceType: "Per Buggy",
    price: "?",
    image: "/images/maverick-xr.jpeg"
  }
];

const DesertSafari = () => {
  const { currency, convertPrice } = useCurrency();

  return (
    <div className="bg-cream min-h-screen pt-32 font-inter">
      <Navbar />
      
      <div className="max-w-[1200px] mx-auto px-6 pb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#11161A] text-center mb-16 font-barlow tracking-wide"
        >
          Best Desert Safari Tours in Dubai
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-lg"
            >
              {/* Image side */}
              <div className="w-full sm:w-[45%] h-[300px] sm:h-auto relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content side */}
              <div className="p-6 md:p-8 flex flex-col justify-center flex-grow sm:w-[55%]">
                <h3 className="text-[22px] font-bold text-[#11161A] mb-4 font-barlow">
                  {pkg.title}
                </h3>
                
                <div className="flex flex-col gap-2 mb-6 text-[15px] text-gray-700">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#cf8144]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{pkg.location}</span>
                  </div>
                </div>

                <div className="mb-6 mt-auto flex items-end gap-2">
                  <div className="flex items-start">
                    {pkg.price !== "?" && <span className="text-[#F97818] font-bold text-sm mt-1 mr-1">{currency.code}</span>}
                    <span className="text-[#11161A] font-barlow font-black text-4xl leading-none">
                      {pkg.price === "?" ? "?" : convertPrice(pkg.price)}
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm font-medium mb-1">/ {pkg.priceType.replace('Per ', '')}</span>
                </div>

                <a href="https://wa.me/971504799258" target="_blank" rel="noopener noreferrer" className="bg-[#cf8144] hover:bg-[#b56e36] text-white py-2.5 px-6 rounded text-sm font-medium transition-colors w-fit inline-block">
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DesertSafari;
