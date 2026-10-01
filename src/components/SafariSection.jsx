import React from 'react';
import { motion } from 'framer-motion';
import TourCard from './TourCard';
import { Compass } from 'lucide-react';

const safariTours = [
  {
    number: "01",
    title: "MEMORABLE\nADVENTURE",
    image: "/images/safari-adventure.jpg",
    description: (
      <>
        Take part in a Desert Safari Dubai adventure for a memorable experience. Enjoy thrilling <span className="text-[#F97818] font-semibold">4x4 dune bashing</span>, sandboarding, and professional photography at sunset.
      </>
    ),
    ctaText: "BOOK SAFARI",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        {/* Simple inline SUV/4x4 icon */}
        <path d="M4 10h16v8H4z" />
        <path d="M4 14l-2 2v2h2" />
        <path d="M20 14l2 2v2h-2" />
        <path d="M6 10l2-4h8l2 4" />
        <circle cx="8" cy="18" r="2" />
        <circle cx="16" cy="18" r="2" />
      </svg>
    )
  },
  {
    number: "02",
    title: "DUNES &\nDELIGHTS",
    image: "/images/safari-delights.jpg",
    description: "Embark on a thrilling Desert Safari Dubai tour. Experience an unforgettable evening in a luxurious Bedouin camp with a premium BBQ dinner and live entertainment.",
    ctaText: "BOOK CAMP",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        {/* Simple inline tent icon */}
        <path d="M12 4L3 20h18L12 4z" />
        <path d="M12 4l-4 16" />
        <path d="M12 4l4 16" />
      </svg>
    )
  },
  {
    number: "03",
    title: "LIFETIME\nEXPERIENCE",
    image: "/images/safari-lifetime.jpg",
    description: "Book a Desert Safari for a lifetime experience. Discover Dubai's breathtaking desert with a majestic camel trek at sunset across the vast golden dunes.",
    ctaText: "BOOK TREK",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        {/* Simple inline sunset/mountain icon to represent the trek */}
        <circle cx="12" cy="12" r="10" />
        <path d="M2 17l4.5-4 4 3 6-5 5.5 5" />
      </svg>
    )
  }
];

const SafariSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-cream px-[20px] md:px-[60px] pb-[40px] pt-[20px]">
      
      {/* Decorative Background Details */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply opacity-[0.05]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-ink fill-none stroke-[0.5]">
           <path d="M0,30 Q40,60 70,20 T100,50" />
           <path d="M10,80 Q30,40 60,70 T100,30" />
        </svg>
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
              SAFARI TOURS
            </span>
            <div className="w-16 h-[1px] bg-[#F97818]" />
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
              <span className="text-[#F97818] mr-4">Desert Safari</span>
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
            Immerse yourself in authentic Arabian hospitality and explore the timeless beauty of the desert under the setting sun.
          </p>

          {/* Left Decorative Stamp */}
          <motion.div
            initial={{ opacity: 0, rotate: 12 }}
            whileInView={{ opacity: 1, rotate: 5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute hidden xl:flex items-center pointer-events-none"
            style={{
              width: '105px',
              height: '105px',
              left: '55px',
              top: '80px'
            }}
          >
            <div className="w-full h-full rounded-full border-[1.5px] border-[#F97818] flex items-center justify-center relative">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <path id="curve-safari" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                <text className="text-[11px] font-bold tracking-widest uppercase fill-[#F97818] font-inter">
                  <textPath href="#curve-safari" startOffset="0%">ARABIAN</textPath>
                  <textPath href="#curve-safari" startOffset="50%">NIGHTS</textPath>
                </text>
              </svg>
              <Compass className="w-8 h-8 text-[#F97818] stroke-[1.5]" />
            </div>
            <div className="absolute left-[95px] top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-80 rotate-12">
              <svg width="30" height="3" viewBox="0 0 40 4" fill="none" stroke="#11161A" strokeWidth="1.5">
                <path d="M0 2 Q 5 0, 10 2 T 20 2 T 30 2 T 40 2" />
              </svg>
              <svg width="30" height="3" viewBox="0 0 40 4" fill="none" stroke="#11161A" strokeWidth="1.5">
                <path d="M0 2 Q 5 0, 10 2 T 20 2 T 30 2 T 40 2" />
              </svg>
            </div>
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
          {safariTours.map((tour, index) => (
            <TourCard key={tour.number} tour={tour} index={index} />
          ))}
        </div>

      </div>

    </section>
  );
};

export default SafariSection;
