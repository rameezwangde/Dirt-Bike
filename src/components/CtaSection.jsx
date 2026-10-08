import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="relative w-full h-auto pb-[50px] md:pb-[70px] flex items-start justify-center pt-[40px] md:pt-[60px] overflow-hidden">
      
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/cta-background.jpg" 
          alt="Dubai Desert Adventure" 
          className="w-full h-full object-cover object-center"
        />
        {/* Complex Dark Gradient Overlay for Premium Feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071116] via-[#071116]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-[#071116]/40 z-10" />
      </div>

      {/* Decorative Topographic Map lines (subtle overlay) */}
      <div 
        className="absolute inset-0 z-10 opacity-10 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 Q 50 50 90 10' stroke='%23ffffff' fill='none' stroke-width='0.5'/%3E%3Cpath d='M10 50 Q 50 90 90 50' stroke='%23ffffff' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-[20px] md:px-[60px] flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >

          <span className="font-inter text-[13px] font-bold tracking-[0.35em] uppercase text-[#F97818]">
            YOUR NEXT ADVENTURE
          </span>

        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col"
        >
          <h2 
            className="font-barlow font-black uppercase text-white leading-[0.85] tracking-tight"
            style={{ fontSize: 'clamp(45px, 10vw, 110px)' }}
          >
            READY TO CONQUER <br />
            <span className="text-[#F97818]">THE DUNES?</span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-inter text-[#F5F3EF]/80 max-w-[600px] mt-8 text-[17px] md:text-[19px] leading-[1.6]"
        >
          Join thousands of riders who have experienced the ultimate thrill in Dubai. Book your dirt bike or dune buggy tour today and make desert memories that last forever.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-5 mt-10"
        >
          {/* Primary CTA */}
          <Link to="/contact" className="group relative flex items-center gap-3 bg-[#F97818] text-[#071116] px-8 py-4 font-inter font-bold tracking-widest text-[14px] uppercase overflow-hidden shadow-2xl shadow-[#F97818]/20 transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <CalendarDays size={18} className="relative z-10" />
            <span className="relative z-10">BOOK YOUR RIDE</span>
          </Link>

          {/* Secondary CTA */}
          <Link to="/packages" className="group flex items-center gap-3 bg-transparent border-[1.5px] border-[#F5F3EF]/30 text-[#F5F3EF] px-8 py-4 font-inter font-bold tracking-widest text-[14px] uppercase hover:bg-[#F5F3EF] hover:text-[#071116] transition-all duration-300">
            <span>EXPLORE ALL PACKAGES</span>
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>



      </div>
    </section>
  );
};

export default CtaSection;
