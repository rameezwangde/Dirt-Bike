import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './Navbar';
import HeroContent from './HeroContent';
import ExperienceBar from './ExperienceBar';
import bgImage from '../../Golden Dune Motocross Chase.png';

const Hero = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '15%']);

  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden bg-[#070B0D]">
      
      {/* Background Image (z-index: 0) */}
      <motion.img 
        src={bgImage}
        className="absolute inset-0 w-full h-full object-cover z-0 object-right md:object-center"
        style={{
          y: backgroundY
        }}
        alt="Desert Dirt Bike"
      />

      {/* Dark overlay primarily on the LEFT side (z-index: 1) */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] hidden md:block"
        style={{
          background: 'linear-gradient(90deg, rgba(5,10,12,0.97) 0%, rgba(5,10,12,0.88) 24%, rgba(5,10,12,0.52) 45%, rgba(5,10,12,0.10) 70%, rgba(5,10,12,0.03) 100%)'
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none z-[1] md:hidden"
        style={{
          background: 'linear-gradient(to top, rgba(5,10,12,0.95) 0%, rgba(5,10,12,0.8) 35%, rgba(5,10,12,0.2) 100%)'
        }}
      />

      {/* Topographic contour lines behind left-side details (z-index: 2) */}
      <div className="absolute top-0 left-0 w-[35%] h-full opacity-5 pointer-events-none mix-blend-overlay z-[2]">
         <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-white fill-none stroke-[0.2]">
            <path d="M0,20 Q20,30 40,10 T80,30 T100,10" />
            <path d="M0,40 Q20,50 40,30 T80,50 T100,30" />
            <path d="M0,60 Q20,70 40,50 T80,70 T100,50" />
            <path d="M0,80 Q20,90 40,70 T80,90 T100,70" />
            <path d="M0,100 Q20,110 40,90 T80,110 T100,90" />
         </svg>
      </div>

      <Navbar />

      {/* Vertical Technical Detail - Left Side (z-index: 20) */}
      <div 
        className="absolute hidden lg:flex flex-col items-center gap-8 z-20"
        style={{ left: '38px', top: '50%', transform: 'translateY(-50%)' }}
      >
        <div className="flex flex-col items-center gap-5 relative">
          {/* Thin vertical line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/10 z-0" />
          
          {/* Steps */}
          {['01', '02', '03', '04'].map((step, index) => (
            <div key={step} className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer bg-[#070B0D] py-1">
              <div className={`w-1.5 h-1.5 rounded-full ${index === 0 ? 'bg-[#F97818]' : 'bg-white/30 group-hover:bg-white/60'} transition-colors duration-300`} />
              <span className={`text-[11px] font-barlow font-semibold ${index === 0 ? 'text-[#F97818]' : 'text-white/30'} uppercase`}>{step}</span>
            </div>
          ))}
        </div>
      </div>

      <HeroContent />

      {/* Right-Side Technical Details (z-index: 20) */}
      <div 
        className="absolute hidden lg:flex flex-col items-end gap-1 font-inter text-[11px] text-white/50 tracking-widest uppercase z-20"
        style={{ right: '65px', top: '185px' }}
      >
        <span>25.0760° N</span>
        <span>55.2962° E</span>
        <div className="mt-4 relative w-3 h-3 flex items-center justify-center opacity-40">
          <div className="absolute w-full h-[1px] bg-white" />
          <div className="absolute h-full w-[1px] bg-white" />
        </div>
      </div>

      <div 
        className="absolute hidden lg:flex flex-col items-center gap-4 z-20"
        style={{ right: '65px', bottom: '180px' }}
      >
        <span className="text-[10px] font-barlow tracking-[0.3em] text-white/40 uppercase whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Dubai<br />
          Desert<br />
          Adventures
        </span>
        <div className="w-[1px] h-16 bg-white/20 mt-2" />
      </div>

      <ExperienceBar />
      
    </section>
  );
};

export default Hero;
