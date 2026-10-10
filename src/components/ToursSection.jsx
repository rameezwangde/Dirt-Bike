import React from 'react';
import { motion } from 'framer-motion';
import TourCard from './TourCard';
import { Mountain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const tours = [
  {
    number: "01",
    title: "DIRT BIKE\nADVENTURES",
    image: "/images/dirt-bike-dubai-cover.jpg",
    description: (
      <>
        Ride powerful <span className="text-[#F97818] font-semibold">KTM 450cc</span> dirt bikes through Dubai's stunning dunes. Guided tours, safety gear, and beginner lessons for an unforgettable desert adventure.
      </>
    ),
    ctaText: "EXPLORE DIRT BIKES",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 2C7 2 3 6 3 11v5a2 2 0 0 0 2 2h2" />
        <path d="M19 18h2a2 2 0 0 0 2-2v-5c0-5-4-9-9-9" />
        <path d="M3 11c0-2.5 2-5 5-5s5 2.5 5 5v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5z" />
        <path d="M21 11c0-2.5-2-5-5-5s-5 2.5-5 5v5a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-5z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "DUNE BUGGY\nEXCURSIONS",
    image: "/images/buggy-rental-dubai-cover.jpg",
    description: "Experience Dubai's desert like never before with our high-performance dune buggies. Perfect for families, groups, and thrill-seekers of all levels.",
    ctaText: "EXPLORE BUGGIES",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M3 12h18" />
        <path d="M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
        <circle cx="7" cy="16" r="3" />
        <circle cx="17" cy="16" r="3" />
        <path d="M9 16h6" />
      </svg>
    )
  },
  {
    number: "03",
    title: "QUAD BIKING\nEXPERIENCES",
    image: "/images/quad-bike-tour.jpg",
    description: "Get ready for an adrenaline-packed quad biking adventure across the golden dunes. Ideal for solo riders, friends, and families looking for pure desert excitement.",
    ctaText: "EXPLORE QUADS",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="5" y="10" width="14" height="6" rx="1" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path d="M9 10V6h6v4" />
        <path d="M7 6V4h10v2" />
      </svg>
    )
  }
];

const ToursSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-cream pt-[20px] px-[20px] md:px-[60px] pb-[30px] md:pb-[40px]">
      
      {/* Decorative Background Details */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply opacity-[0.05]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-ink fill-none stroke-[0.5]">
           <path d="M10,20 Q40,5 70,30 T100,20" />
           <path d="M0,50 Q30,70 60,50 T100,60" />
        </svg>
      </div>
      
      {/* Background DUBAI Text */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{
          top: '20px',
          right: '5%',
          opacity: 0.035,
        }}
      >
        <span 
          className="font-marker leading-none text-ink select-none"
          style={{ fontSize: 'clamp(240px, 25vw, 430px)' }}
        >
          DUBAI
        </span>
      </div>

      {/* Main Content Container */}
      <div className="relative z-[2] max-w-[1500px] mx-auto w-full flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center w-full"
        >
          <div className="flex items-center justify-center gap-4 mb-[24px]">
            <span className="font-inter text-[13px] font-bold tracking-[0.35em] uppercase text-ink">
              {t('our_tours')}
            </span>

          </div>

          <div className="w-full max-w-[1200px] mx-auto mt-[20px] text-center">
            <h2 
              className="font-barlow font-black uppercase text-ink whitespace-normal inline-block"
              style={{
                fontSize: 'clamp(42px, 8vw, 82px)',
                lineHeight: 0.9,
                letterSpacing: '-0.025em'
              }}
            >
              <span className="text-[#F97818] mr-4">Dirt Biking</span>
              Tours in Dubai
            </h2>
          </div>

          <p 
            className="font-inter text-[#4B4D4F] text-center"
            style={{
              fontSize: '17px',
              lineHeight: 1.5,
              maxWidth: '760px',
              margin: '22px auto 55px'
            }}
          >
            Choose your adventure and experience the thrill of riding through Dubai's most stunning desert landscapes.
          </p>

          {/* Left Decorative Stamp */}
          <motion.div
            initial={{ opacity: 0, rotate: -12 }}
            whileInView={{ opacity: 1, rotate: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute hidden xl:flex items-center pointer-events-none"
            style={{
              width: '105px',
              height: '105px',
              left: '55px',
              top: '115px'
            }}
          >
            <div className="w-full h-full rounded-full border-[1.5px] border-ink flex items-center justify-center relative">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <path id="curve-tours" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                <text className="text-[11px] font-bold tracking-widest uppercase fill-ink font-inter">
                  <textPath href="#curve-tours" startOffset="0%">EXPLORE</textPath>
                  <textPath href="#curve-tours" startOffset="50%">THE DESERT</textPath>
                </text>
              </svg>
              <Mountain className="w-8 h-8 text-ink stroke-[1.5]" />
            </div>
            <div className="absolute left-[95px] top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-80 rotate-12">
              <svg width="30" height="3" viewBox="0 0 40 4" fill="none" stroke="#F97818" strokeWidth="1.5">
                <path d="M0 2 Q 5 0, 10 2 T 20 2 T 30 2 T 40 2" />
              </svg>
              <svg width="30" height="3" viewBox="0 0 40 4" fill="none" stroke="#F97818" strokeWidth="1.5">
                <path d="M0 2 Q 5 0, 10 2 T 20 2 T 30 2 T 40 2" />
              </svg>
              <svg width="30" height="3" viewBox="0 0 40 4" fill="none" stroke="#F97818" strokeWidth="1.5">
                <path d="M0 2 Q 5 0, 10 2 T 20 2 T 30 2 T 40 2" />
              </svg>
            </div>
          </motion.div>

          {/* Right Handwritten Detail */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute hidden xl:flex flex-col items-center -rotate-4 font-marker pointer-events-none"
            style={{
              right: '65px',
              top: '175px'
            }}
          >
            <div className="flex gap-2 leading-none mb-1">
              <span className="text-ink text-[24px]">ADVENTURE</span>
              <span className="text-[#F97818] text-[26px]">AWAITS</span>
            </div>
            {/* Orange brush underline */}
            <svg width="180" height="6" viewBox="0 0 220 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 6C40.6667 3.33333 120.4 -1.19999 218 4.00001" stroke="#F97818" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>

        </motion.div>

        {/* Tour Cards Grid */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-3 w-full mx-auto"
          style={{
            gap: '24px',
            alignItems: 'stretch',
            maxWidth: '1450px'
          }}
        >
          {tours.map((tour, index) => (
            <TourCard key={tour.number} tour={tour} index={index} />
          ))}
        </div>

      </div>

    </section>
  );
};

export default ToursSection;
