import React from 'react';
import { motion } from 'framer-motion';
import { Bike, Map, ShieldCheck, ArrowLeft, ArrowRight } from 'lucide-react';

const ExperienceBar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
      className="absolute z-30 left-[20px] right-[20px] lg:left-[40px] lg:right-[40px] bottom-[20px] lg:bottom-[25px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1fr_1.25fr_1.1fr] h-auto lg:h-[112px]"
      style={{
        background: 'rgba(5,8,9,0.90)',
        border: '1px solid rgba(255,255,255,0.16)',
      }}
    >
      
      {/* SECTION 1 */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center p-4 lg:px-8 border-r border-b lg:border-b-0 border-white/10 group lg:h-full justify-center">
        <Bike className="w-6 h-6 lg:w-8 lg:h-8 text-white/50 mb-2 lg:mb-0 lg:mr-5 group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
        <div className="flex flex-col">
          <span className="font-barlow font-bold text-white text-sm lg:text-lg tracking-wide uppercase">KTM 450CC</span>
          <span className="font-inter text-[9px] lg:text-[11px] text-white/50 tracking-wider uppercase mt-1">Pro-Grade Bikes</span>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center p-4 lg:px-8 lg:border-r border-b lg:border-b-0 border-white/10 group lg:h-full justify-center">
        <Map className="w-6 h-6 lg:w-8 lg:h-8 text-white/50 mb-2 lg:mb-0 lg:mr-5 group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
        <div className="flex flex-col">
          <span className="font-barlow font-bold text-white text-sm lg:text-lg tracking-wide uppercase">Guided Desert Rides</span>
          <span className="font-inter text-[9px] lg:text-[11px] text-white/50 tracking-wider uppercase mt-1">Expert Local Guides</span>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center p-4 lg:px-8 border-r border-white/10 group lg:h-full justify-center">
        <ShieldCheck className="w-6 h-6 lg:w-8 lg:h-8 text-white/50 mb-2 lg:mb-0 lg:mr-5 group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
        <div className="flex flex-col">
          <span className="font-barlow font-bold text-white text-sm lg:text-lg tracking-wide uppercase">All Gear Included</span>
          <span className="font-inter text-[9px] lg:text-[11px] text-white/50 tracking-wider uppercase mt-1">Ride Safe. Ride Bold.</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceBar;
