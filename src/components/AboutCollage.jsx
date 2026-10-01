import React from 'react';
import { motion } from 'framer-motion';
import { Mountain } from 'lucide-react';
import mainImg from '../../Golden Dune Motocross Chase.png';

const AboutCollage = () => {
  return (
    <div className="relative w-full max-w-[700px] h-[600px] mx-auto flex items-center justify-center">
      
      {/* Main Photograph */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="absolute w-[80vw] sm:w-[500px] md:w-[650px] h-[320px] sm:h-[400px] md:h-[490px] z-10 hover:scale-[1.015] transition-transform duration-500 origin-center left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[50px] top-[90px]"
        style={{
          maskImage: 'polygon(2% 4%, 98% 0%, 100% 95%, 4% 98%)',
          WebkitMaskImage: 'polygon(2% 4%, 98% 0%, 100% 95%, 4% 98%)',
        }}
      >
        <img 
          src={mainImg} 
          alt="Enduro Bike Dubai Experience" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Handwritten Message: MORE THAN A RIDE */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute z-30 font-marker flex flex-col -rotate-6 left-[5vw] md:left-0 top-[-20px] md:top-[-40px]"
        style={{ lineHeight: '1.1' }}
      >
        <span className="text-[32px] md:text-[48px] text-ink">MORE</span>
        <span className="text-[32px] md:text-[48px] text-ink">THAN A</span>
        <span className="text-[50px] md:text-[70px] text-[#F97818] mt-1 ml-4 md:ml-6 leading-[0.85]">RIDE</span>
      </motion.div>

      {/* Desert Stamp */}
      <motion.div
        initial={{ opacity: 0, rotate: -15 }}
        whileInView={{ opacity: 1, rotate: -5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-[70px] right-[2vw] md:right-[-20px] z-30 flex items-center scale-[0.7] md:scale-100 origin-right"
      >
        <div className="w-[100px] h-[100px] rounded-full border-[1.5px] border-ink flex items-center justify-center relative">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow" style={{ animationDuration: '30s' }}>
            <path id="curve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
            <text className="text-[12px] font-bold tracking-widest uppercase fill-ink font-inter">
              <textPath href="#curve" startOffset="0%">DUBAI DESERT</textPath>
              <textPath href="#curve" startOffset="50%">ADVENTURES</textPath>
            </text>
          </svg>
          <Mountain className="w-8 h-8 text-ink stroke-[1.5]" />
        </div>
        {/* Orange postal wave lines */}
        <div className="absolute left-[90px] top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-80 rotate-12">
          <svg width="35" height="3" viewBox="0 0 40 4" fill="none" stroke="#F97818" strokeWidth="1.5">
            <path d="M0 2 Q 5 0, 10 2 T 20 2 T 30 2 T 40 2" />
          </svg>
          <svg width="35" height="3" viewBox="0 0 40 4" fill="none" stroke="#F97818" strokeWidth="1.5">
            <path d="M0 2 Q 5 0, 10 2 T 20 2 T 30 2 T 40 2" />
          </svg>
          <svg width="35" height="3" viewBox="0 0 40 4" fill="none" stroke="#F97818" strokeWidth="1.5">
            <path d="M0 2 Q 5 0, 10 2 T 20 2 T 30 2 T 40 2" />
          </svg>
        </div>
      </motion.div>

      {/* Location Scribble */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-[100px] md:bottom-[20px] right-[5vw] md:right-[40px] z-30 font-marker text-ink text-[16px] md:text-[20px] leading-tight rotate-[-4deg] flex items-end gap-2"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#11161A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
        <div className="flex flex-col items-center">
          <span>DUBAI</span>
          <span>AL BADAYER</span>
          <span>DESERT</span>
        </div>
      </motion.div>

    </div>
  );
};

export default AboutCollage;
