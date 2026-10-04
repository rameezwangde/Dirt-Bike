import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaBanner = () => {
  return (
    <section className="relative w-full overflow-hidden flex flex-col bg-[#071116]">
      
      {/* Background Cinematic Image */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1.015 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        <img 
          src="/images/cta-background.jpg" 
          alt="Dubai Desert Sunset" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Dark Overlay Gradient */}
      <div 
        className="absolute inset-0 w-full h-full z-0 hidden md:block"
        style={{
          background: 'linear-gradient(90deg, rgba(7,17,22,0.12) 0%, rgba(7,17,22,0.20) 28%, rgba(7,17,22,0.68) 58%, rgba(7,17,22,0.90) 100%)'
        }}
      />
      <div 
        className="absolute inset-0 w-full h-full z-0 block md:hidden"
        style={{
          background: 'linear-gradient(to top, rgba(7,17,22,1) 0%, rgba(7,17,22,0.8) 50%, rgba(7,17,22,0.2) 100%)'
        }}
      />

      {/* Subtle Bottom Gradient */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[45%] w-full z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, rgba(7,17,22,0.40), transparent 100%)'
        }}
      />

      {/* Optional Grain */}
      <div className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none mix-blend-overlay z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Rough Brush Edges (Decorative) */}
      <svg viewBox="0 0 100 200" className="absolute left-[-20px] top-[10%] w-[120px] h-[300px] opacity-[0.85] pointer-events-none z-10 hidden md:block" preserveAspectRatio="none">
        <path d="M-20,10 Q40,100 -20,190" stroke="#F7F4EE" strokeWidth="8" fill="none" strokeLinecap="round" style={{ filter: 'url(#brushEdge1)' }}/>
        <path d="M-30,50 Q20,120 -30,170" stroke="#F97818" strokeWidth="6" fill="none" strokeLinecap="round" style={{ filter: 'url(#brushEdge1)' }} opacity="0.6"/>
        <defs>
          <filter id="brushEdge1"><feTurbulence type="fractalNoise" baseFrequency="0.2" numOctaves="3" result="noise" /><feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" /></filter>
        </defs>
      </svg>
      <svg viewBox="0 0 100 200" className="absolute right-[-20px] bottom-[0%] w-[150px] h-[400px] opacity-[0.9] pointer-events-none z-10 hidden md:block" preserveAspectRatio="none">
        <path d="M120,10 Q60,100 120,190" stroke="#071116" strokeWidth="25" fill="none" strokeLinecap="round" style={{ filter: 'url(#brushEdge2)' }}/>
        <path d="M130,-20 Q80,100 130,220" stroke="#F7F4EE" strokeWidth="3" fill="none" strokeLinecap="round" style={{ filter: 'url(#brushEdge2)' }} opacity="0.4"/>
        <defs>
          <filter id="brushEdge2"><feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="3" result="noise" /><feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" /></filter>
        </defs>
      </svg>

      {/* Topographic Lines on Right */}
      <div className="absolute top-0 right-0 w-[40%] h-[60%] opacity-[0.035] pointer-events-none mix-blend-overlay z-10 hidden md:block">
         <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-[#F7F4EE] fill-none stroke-[0.3]">
            <path d="M20,0 Q60,40 100,20 M10,0 Q40,60 100,40 M0,20 Q30,80 100,60" />
         </svg>
      </div>

      {/* Faded Background Typography (Left) */}
      <div className="absolute left-[3%] bottom-[10%] z-10 opacity-20 pointer-events-none hidden lg:flex flex-col">
        <span className="font-barlow font-black text-[80px] xl:text-[90px] leading-[0.82] uppercase text-[#11161A]">DUBAI</span>
        <span className="font-barlow font-black text-[80px] xl:text-[90px] leading-[0.82] uppercase text-[#11161A]">DESERT</span>
        <span className="font-barlow font-black text-[80px] xl:text-[90px] leading-[0.82] uppercase text-[#11161A]">ADVENTURES</span>
      </div>



      {/* CENTER: Main Content Area */}
      <div className="relative z-30 w-full md:w-[650px] mx-auto flex flex-col items-center px-[24px] pt-[60px] pb-[40px] text-center">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-[15px]"
        >
          <span className="font-inter text-[13px] font-semibold tracking-[0.14em] uppercase text-[#F7F4EE]">
            READY FOR YOUR NEXT
          </span>
          <div className="w-[55px] h-[2px] bg-[#F97818]"></div>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-barlow font-black uppercase leading-[0.9] tracking-[-0.02em] mt-[12px] text-[clamp(58px,5vw,92px)] whitespace-nowrap md:whitespace-normal"
        >
          <span className="text-[#F7F4EE] block md:inline">DESERT </span>
          <span className="text-[#F97818] block md:inline">STORY?</span>
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-[14px] md:text-[16px] font-normal leading-[1.5] text-white/90 max-w-[100%] md:max-w-[650px] mt-[22px]"
        >
          Ready for an unforgettable desert adventure? Book your ride now and immerse yourself in the heart-pounding excitement of Dubai's deserts with Enduro Bike Dubai. Let the journey begin!
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-[28px] relative z-40"
        >
          <Link to="/booking">
            <button 
              className="group relative bg-[#F97818] hover:bg-[#F7F4EE] text-[#11161A] font-inter font-extrabold text-[14px] tracking-[0.04em] uppercase transition-all duration-300 flex items-center justify-center gap-[12px] hover:scale-[1.02] shadow-2xl"
              style={{ width: 'auto', height: '58px', padding: '0 42px', clipPath: 'polygon(7% 0, 100% 0, 93% 100%, 0 100%)' }}
            >
              BOOK NOW
              <ArrowRight className="w-5 h-5 text-[#11161A] transition-transform duration-300 cubic-bezier-ease group-hover:translate-x-[6px]" strokeWidth={2.5} />
            </button>
          </Link>
        </motion.div>

      </div>

      {/* RIGHT: Editorial Elements (Hidden on mobile) */}
      <div className="hidden xl:block absolute right-0 top-0 w-[30%] h-full z-20 pointer-events-none">
        
        {/* Handwritten Text */}
        <motion.div 
          initial={{ opacity: 0, rotate: -9 }}
          whileInView={{ opacity: 1, rotate: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-[13%] top-[42%] flex flex-col items-start"
        >
          <span className="font-marker text-[#F7F4EE] text-[36px] xl:text-[40px] leading-[1.02]">SAME</span>
          <span className="font-marker text-[#F7F4EE] text-[36px] xl:text-[40px] leading-[1.02]">DESERT.</span>
          <span className="font-marker text-[#F7F4EE] text-[36px] xl:text-[40px] leading-[1.02]">DIFFERENT</span>
          <div className="relative">
            <span className="font-marker text-[#F7F4EE] text-[36px] xl:text-[40px] leading-[1.02]">STORIES.</span>
            {/* Hand-drawn Underline */}
            <svg className="absolute -bottom-2 left-0 w-[150px] h-[12px]" preserveAspectRatio="none">
              <path d="M0,5 Q50,0 100,8 T150,5" stroke="#F97818" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>



      </div>

    </section>
  );
};

export default CtaBanner;
