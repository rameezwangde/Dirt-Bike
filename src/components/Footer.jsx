import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#04090C] text-[#F5F3EF] px-[20px] md:px-[60px] py-[80px] border-t-[3px] border-[#F97818] relative z-50 overflow-hidden shadow-2xl">
      
      {/* Background Accent */}
      <div 
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F97818] opacity-[0.02] rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3" 
      />

      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Brand / Logo Area */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-barlow font-black text-[28px] tracking-tight uppercase leading-none">
            ENDURO BIKE <span className="text-[#F97818]">DUBAI</span>
          </span>
          <span className="font-inter text-[12px] tracking-[0.2em] text-[#F5F3EF]/40 uppercase">
            The Ultimate Desert Experience
          </span>
        </div>

        {/* Copyright */}
        <div className="font-inter text-[13px] text-[#F5F3EF]/50">
          &copy; {new Date().getFullYear()} Enduro Bike Dubai. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
