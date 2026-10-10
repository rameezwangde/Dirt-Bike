import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TourCard from '../components/TourCard';
import PackagesHero from '../components/PackagesHero';

const packageTours = [
  {
    number: "01",
    title: "DIRT BIKE\nDUBAI",
    image: "/images/dirt-bike-dubai-cover.jpg",
    description: "Ride powerful KTM 450cc dirt bikes through Dubai's stunning dunes. Guided tours, safety gear, and beginner lessons for an unforgettable desert adventure.",
    ctaText: "EXPLORE DIRT BIKES",
    link: "/dirt-bike-dubai",
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
    title: "BUGGY RENTAL\nDUBAI",
    image: "/images/buggy-rental-dubai-cover.jpg",
    description: "Experience Dubai's desert like never before with our high-performance dune buggies. Perfect for families, groups, and thrill-seekers of all levels.",
    ctaText: "EXPLORE BUGGIES",
    link: "/buggy-rental-dubai",
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
    title: "DESERT SAFARI\nDUBAI",
    image: "/images/safari-adventure.jpg", 
    description: "Immerse yourself in a complete desert experience. Enjoy dune bashing, camel rides, sandboarding, and an authentic Bedouin camp dinner.",
    ctaText: "EXPLORE SAFARI",
    link: "/desert-safari-dubai",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M4 14l8-9 8 9" />
        <path d="M4 14v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
      </svg>
    )
  },
  {
    number: "04",
    title: "QUAD BIKE\nDUBAI",
    image: "/images/quad-bike-tour.jpg",
    description: "Get ready for an adrenaline-packed quad biking adventure across the golden dunes. Ideal for solo riders, friends, and families.",
    ctaText: "EXPLORE QUADS",
    link: "/quad-bike-dubai",
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

const Packages = () => {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      
      <PackagesHero />

      <section className="relative w-full overflow-hidden bg-cream px-[20px] md:px-[60px] pb-[80px] pt-16">
        
        <div className="relative z-[2] max-w-[1500px] mx-auto w-full flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center w-full mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-[24px]">
              <span className="font-inter text-[13px] font-bold tracking-[0.35em] uppercase text-ink">
                OUR PACKAGES
              </span>
            </div>

            <div className="w-full max-w-[1200px] mx-auto text-center">
              <h1 
                className="font-barlow font-black uppercase text-ink whitespace-normal inline-block"
                style={{
                  fontSize: 'clamp(42px, 8vw, 82px)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.025em'
                }}
              >
                <span className="text-[#F97818] mr-4">Explore</span>
                Our Tours
              </h1>
            </div>
          </motion.div>

          <div 
            className="grid grid-cols-1 w-full mx-auto"
            style={{
              gap: '32px',
              alignItems: 'stretch',
              maxWidth: '1200px'
            }}
          >
            {packageTours.map((tour, index) => (
              <TourCard key={tour.number} tour={tour} index={index} />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
