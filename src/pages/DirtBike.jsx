import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useCurrency } from '../context/CurrencyContext';

const packages = [
  {
    id: 1,
    title: "KTM 450cc - 1 Hour",
    duration: "1-Hour",
    seats: 1,
    price: 400,
    image: "/images/dirt-bike-tour.jpg"
  },
  {
    id: 2,
    title: "KTM 450cc - 2 Hour",
    duration: "2-Hour",
    seats: 1,
    price: 649,
    image: "/images/dirt-bike.jpg"
  },
  {
    id: 3,
    title: "KTM 450cc - 3-Hour",
    duration: "3-Hour",
    seats: 1,
    price: 799,
    image: "/images/dirt-bike-tour.jpg"
  },
  {
    id: 4,
    title: "KTM 450cc - 4-Hour",
    duration: "4-Hour",
    seats: 1,
    price: 1000,
    image: "/images/dirt-bike.jpg"
  },
  {
    id: 5,
    title: "KTM 450cc - 1-Day",
    duration: "1-Day",
    seats: 1,
    price: 1550,
    image: "/images/dirt-bike-tour.jpg"
  },
  {
    id: 6,
    title: "KTM 450cc - 3-Days",
    duration: "3-Days",
    seats: 1,
    price: 3850,
    image: "/images/dirt-bike.jpg"
  }
];

const DirtBike = () => {
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
          Best Dirt Biking Tours in Dubai
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
              <div className="sm:w-[45%] h-[250px] sm:h-auto relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content side */}
              <div className="sm:w-[55%] p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-[22px] font-bold text-[#11161A] mb-4 font-barlow uppercase">
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
                  <span className="text-gray-500 text-sm font-medium mb-1">/ Per Bike</span>
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

export default DirtBike;
