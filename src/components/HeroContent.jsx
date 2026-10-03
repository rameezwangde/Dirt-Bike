import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const HeroContent = () => {
  return (
    <div 
      className="absolute z-20 pointer-events-auto w-full max-w-[760px] px-[24px] lg:px-0"
      style={{
        left: '0',
        top: '40%',
        transform: 'translateY(-50%)',
      }}
    >
      <div className="lg:ml-[7vw]">
      
      {/* Eyebrow */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="flex items-center gap-4 mb-5"
      >
        <div className="text-[#F97818] font-barlow font-bold text-sm">01</div>
        <div className="text-[12px] text-white/70 font-inter uppercase tracking-[0.25em] flex items-center">
          DUBAI • AL BADAYER DESERT
          <div className="ml-5 w-[100px] h-[1px] bg-white/30" />
        </div>
      </motion.div>

      {/* Headline */}
      <div 
        className="font-barlow font-black uppercase flex flex-col text-[65px] md:text-[clamp(55px,12vw,125px)] leading-[0.85] md:leading-[0.82] tracking-[-0.035em] w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#F5F3EF] whitespace-normal sm:whitespace-nowrap"
        >
          RIDE BEYOND
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-stroke-primary relative inline-flex items-baseline"
        >
          <span>THE ROAD</span>
          <span className="text-[#F97818] -webkit-text-stroke-0" style={{ WebkitTextStroke: '0px' }}>.</span>
        </motion.div>
      </div>

      {/* Description */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="font-inter font-normal"
        style={{
          fontSize: '20px',
          lineHeight: 1.4,
          color: '#F5F3EF',
          marginTop: '28px',
          maxWidth: '620px'
        }}
      >
        Dirt bikes. Buggies. Quads. One desert built for adrenaline.
      </motion.div>

      {/* CTA Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
        className="flex items-center"
        style={{ gap: '34px', marginTop: '32px' }}
      >
        {/* Primary CTA */}
        <button 
          className="group bg-[#F97818] hover:bg-[#FF8A28] text-[#070B0D] font-barlow font-bold text-base tracking-widest uppercase flex-none transition-colors duration-300 flex items-center justify-center gap-3"
          style={{
            width: '265px',
            height: '64px',
            clipPath: 'polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)'
          }}
        >
          EXPLORE RIDES
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-[5px]" />
        </button>

      </motion.div>

    </div>
    </div>
  );
};

export default HeroContent;
