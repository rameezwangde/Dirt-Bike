import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import bgImage from '../../Desert Rider at Sunset, Dubai Skyline.png';

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[760px] h-[100vh] max-h-[900px] overflow-hidden bg-[#F7F4EE]">
      
      {/* Background Image (z-index: 0) */}
      <img 
        src={bgImage}
        className="absolute inset-0 w-full h-full object-cover z-0 object-center"
        alt="About Enduro Bike Dubai"
      />

      {/* Background decorative contours (z-index: 1) */}
      <div className="absolute top-0 left-0 w-[45%] h-full opacity-5 pointer-events-none mix-blend-overlay z-[1]">
         <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-black fill-none stroke-[0.2]">
            <path d="M0,20 Q20,30 40,10 T80,30 T100,10" />
            <path d="M0,40 Q20,50 40,30 T80,50 T100,30" />
            <path d="M0,60 Q20,70 40,50 T80,70 T100,50" />
            <path d="M0,80 Q20,90 40,70 T80,90 T100,70" />
         </svg>
      </div>

      {/* Strict Left Content Zone (z-index: 10) */}
      <div 
        className="relative z-10 w-[42%] max-w-[620px]"
        style={{ marginLeft: 'clamp(70px, 5vw, 110px)', paddingTop: '110px' }}
      >
        
        {/* Eyebrow */}
        <div className="flex items-center gap-[18px] mb-[28px]">
          <span className="font-inter text-[12px] font-bold tracking-[0.35em] uppercase text-[#11161A]">
            OUR STORY
          </span>
          <div className="w-[65px] h-[1px] bg-[#F97818]"></div>
        </div>

        {/* Main Title Container */}
        <div className="relative max-w-[600px]">
          <h1 className="font-barlow font-black uppercase leading-[0.82] tracking-[-0.025em] text-[clamp(66px,5.2vw,94px)]">
            <span className="block text-[#11161A]">MORE THAN</span>
            <span className="block text-[#F97818]">A RIDE.</span>
            <span className="block text-[#11161A]">IT'S AN</span>
            <span className="block text-[#F97818] tracking-[-0.035em]" style={{ fontSize: 'clamp(64px,4.8vw,88px)' }}>ADVENTURE.</span>
          </h1>

          {/* Handwritten Accent */}
          <div 
            className="absolute z-10"
            style={{ left: '480px', top: '220px', transform: 'rotate(-5deg)' }}
          >
            <span className="font-marker text-[#F97818] text-[18px] whitespace-nowrap">
              SINCE DAY ONE
            </span>
            <svg width="30" height="30" viewBox="0 0 100 100" className="absolute -left-6 top-1 stroke-[#F97818] fill-none stroke-[3] rotate-[130deg]">
              <path d="M10,50 Q40,40 80,60 M70,50 L80,60 L70,70" />
            </svg>
          </div>
        </div>

        {/* Description */}
        <p className="font-inter text-[16px] font-normal leading-[1.55] text-[#4D4D49] max-w-[520px] mt-[28px]">
          Born in the Dubai desert, Enduro Bike Dubai is built around one simple idea — to turn every ride into a story worth remembering.
        </p>

        {/* Location Detail */}
        <div className="flex items-center gap-2 mt-[22px]">
          <MapPin className="text-[#F97818]" size={16} strokeWidth={2.5} />
          <span className="font-inter text-[12px] font-bold tracking-[0.16em] uppercase text-[#11161A]">
            AL BADAYER DESERT · DUBAI
          </span>
        </div>

        {/* CTA Button (z-index: 20) */}
        <div className="mt-[28px] relative z-20 self-start">
          <button 
            className="h-[52px] px-[28px] bg-[#11161A] text-[#F7F4EE] hover:bg-[#F97818] hover:text-[#11161A] transition-colors duration-300 flex items-center gap-3 group"
            style={{ clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)' }}
          >
            <span className="font-barlow text-[17px] font-extrabold tracking-[0.05em] uppercase">
              DISCOVER OUR STORY
            </span>
            <ArrowRight className="text-[#F97818] group-hover:text-[#11161A] transform group-hover:translate-x-[5px] transition-all duration-300" size={20} />
          </button>
        </div>

      </div>

      {/* Decorative Details */}
      
      {/* Vertical Page Indicator (Left Edge) - z-index: 10 */}
      <div 
        className="absolute z-10 flex flex-col items-center gap-4"
        style={{ left: '30px', top: '48%', transform: 'translateY(-50%)' }}
      >
        <span className="text-[#F97818] font-barlow font-bold text-[10px]">01</span>
        <div className="w-[1px] h-[30px] bg-[#11161A]/20"></div>
        <span className="font-barlow font-bold text-[#11161A] tracking-[0.2em] text-[10px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>ABOUT</span>
      </div>

      {/* Right-Side Location Coordinates - z-index: 10 */}
      <div className="absolute right-[50px] top-[140px] flex flex-col items-end gap-1 font-mono text-[10px] tracking-[0.12em] text-white/70 z-10 opacity-70">
        <span>25.0760° N</span>
        <span>55.2962° E</span>
        <div className="mt-3 relative w-3 h-3 flex items-center justify-center opacity-60">
          <div className="absolute w-full h-[1px] bg-white" />
          <div className="absolute h-full w-[1px] bg-white" />
        </div>
      </div>

      {/* Right-Side Vertical Text - z-index: 10 */}
      <div className="absolute right-[50px] bottom-[140px] z-10 opacity-65">
        <span className="text-[9px] font-semibold tracking-[0.25em] text-white uppercase whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Dubai<br />
          Desert<br />
          Adventures
        </span>
      </div>

      {/* Bottom Story Strip - z-index: 30 */}
      <div className="absolute bottom-0 left-0 right-0 h-[78px] bg-[#050E13]/95 z-30">
        <div className="h-full max-w-[1500px] mx-auto grid grid-cols-3 px-[40px]">
          
          <div className="flex items-center gap-4 border-r border-white/10 pr-6">
            <span className="text-[#F97818] font-barlow font-extrabold text-[20px]">01</span>
            <div className="flex flex-col justify-center">
              <span className="text-[#F7F4EE] font-barlow font-bold tracking-wide text-[15px] uppercase">BORN IN DUBAI</span>
              <span className="text-[#F7F4EE]/40 font-inter text-[12px] mt-0.5">Desert roots.</span>
            </div>
          </div>

          <div className="flex items-center gap-4 border-r border-white/10 px-8">
            <span className="text-[#F97818] font-barlow font-extrabold text-[20px]">02</span>
            <div className="flex flex-col justify-center">
              <span className="text-[#F7F4EE] font-barlow font-bold tracking-wide text-[15px] uppercase">BUILT FOR ADVENTURE</span>
              <span className="text-[#F7F4EE]/40 font-inter text-[12px] mt-0.5">More than a tour.</span>
            </div>
          </div>

          <div className="flex items-center gap-4 pl-8">
            <span className="text-[#F97818] font-barlow font-extrabold text-[20px]">03</span>
            <div className="flex flex-col justify-center">
              <span className="text-[#F7F4EE] font-barlow font-bold tracking-wide text-[15px] uppercase">RIDE WITH CONFIDENCE</span>
              <span className="text-[#F7F4EE]/40 font-inter text-[12px] mt-0.5">Guided. Equipped. Ready.</span>
            </div>
          </div>

        </div>
        {/* Thin orange line at the very bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F97818]" />
      </div>

    </section>
  );
};

export default AboutHero;
