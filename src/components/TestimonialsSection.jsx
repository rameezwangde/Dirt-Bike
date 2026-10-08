import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  {
    id: 1,
    name: "James Carter",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    experience: "Dune Buggy",
    quote: "An absolutely thrilling experience! The dune buggy tour was the highlight of our Dubai trip. The team was professional, the equipment was excellent, and the desert views were out of this world. Highly recommended!",
    image: "/images/testimonial_james_1790860531478.jpg",
  },
  {
    id: 2,
    name: "Emily Watson",
    country: "Australia",
    flag: "🇦🇺",
    rating: 5,
    experience: "Dirt Bike",
    quote: "Incredible adventure! The dirt bikes were in perfect condition and the guides made everything so easy and safe. This was truly a once-in-a-lifetime experience!",
    image: "/images/testimonial_emily_1790860543632.jpg",
  },
  {
    id: 3,
    name: "Ravi Mehta",
    country: "India",
    flag: "🇮🇳",
    rating: 5,
    experience: "Quad Bike",
    quote: "Amazing experience from start to finish. The quad biking tour was well organised, fun, and totally worth it. The desert is breathtaking and the team made us feel completely comfortable.",
    image: "/images/testimonial_ravi_1790860554840.jpg",
  },
  {
    id: 4,
    name: "Sofia Martinez",
    country: "Spain",
    flag: "🇪🇸",
    rating: 5,
    experience: "Dune Buggy",
    quote: "Such a fantastic day out in the dunes! Everything was seamless from pickup to dropoff. The sunset views over the desert while driving the buggies are something I will never forget.",
    image: "/images/testimonial_emily_1790860543632.jpg",
  },
  {
    id: 5,
    name: "Daniel Lee",
    country: "Singapore",
    flag: "🇸🇬",
    rating: 5,
    experience: "Desert Adventure",
    quote: "10/10 experience! The thrill of riding across the open desert is unmatched. The guides were extremely helpful, making sure we all felt safe while having the time of our lives.",
    image: "/images/testimonial_james_1790860531478.jpg",
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const length = testimonialsData.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % length);
  }, [length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  }, [length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, handleNext]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Determine sliding offsets
  const getCardProps = (index) => {
    let offset = (index - currentIndex) % length;
    if (offset < 0) offset += length;
    if (offset > Math.floor(length / 2)) offset -= length;

    if (offset === 0) {
      return { position: 'center', x: "0%", y: 0, scale: 1, rotate: 0, zIndex: 30, opacity: 1 };
    }
    if (offset === -1) {
      return { position: 'left', x: isMobile ? "-110%" : "-64%", y: 25, scale: 0.85, rotate: -4, zIndex: 10, opacity: isMobile ? 0 : 0.85 };
    }
    if (offset === 1) {
      return { position: 'right', x: isMobile ? "110%" : "64%", y: 25, scale: 0.85, rotate: 4, zIndex: 10, opacity: isMobile ? 0 : 0.85 };
    }
    if (offset < -1) {
      return { position: 'hidden', x: "-170%", y: 25, scale: 0.82, rotate: -8, zIndex: 0, opacity: 0 };
    }
    // offset > 1
    return { position: 'hidden', x: "170%", y: 25, scale: 0.82, rotate: 8, zIndex: 0, opacity: 0 };
  };

  return (
    <section className="relative w-full overflow-hidden bg-cream px-[20px] md:px-[60px] pt-[30px] pb-[30px] md:pb-[40px]">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply opacity-[0.04]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-ink fill-none stroke-[0.5]">
           <path d="M10,20 Q30,10 50,30 T90,20" />
           <path d="M20,60 Q40,50 70,60 T100,40" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto w-full h-full flex flex-col 2xl:flex-row items-center 2xl:items-start justify-between">
        
        {/* LEFT AREA: Titles & Intro (~24%) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full 2xl:w-[24%] flex flex-col mb-12 2xl:mb-0 relative z-40"
        >
          <div className="flex items-center gap-4 mb-[20px]">
            <span className="font-inter text-[13px] font-bold tracking-[0.35em] uppercase text-ink">
              TESTIMONIALS
            </span>

          </div>

          <h2 className="font-barlow font-black uppercase leading-[0.83] mb-6" style={{ fontSize: 'clamp(48px, 10vw, 90px)' }}>
            <span className="text-ink block">REAL</span>
            <span className="text-[#F97818] block">RIDERS.</span>
            <span className="text-ink block">REAL</span>
            <span className="text-[#F97818] block">STORIES.</span>
          </h2>

          <p className="font-inter text-[#55514D] text-[17px] leading-[1.5] max-w-[310px] mb-10">
            Don't just take our word for it. Hear from adventurers who have experienced the thrill, freedom, and unforgettable moments with Enduro Bike Dubai.
          </p>

          {/* Community Counter */}
          <div className="relative mt-auto">
            <div className="bg-[#071116] rounded-[2px] p-5 w-fit transform -rotate-1 relative overflow-hidden" style={{ clipPath: 'polygon(2% 4%, 98% 0%, 100% 95%, 4% 98%)' }}>
              <div className="flex items-center gap-3">
                {/* Thin orange line */}
                <div className="w-[2px] h-14 bg-[#F97818]" />
                <div className="flex flex-col">
                  <span className="font-barlow font-black text-white leading-none text-[45px] tracking-tight">
                    5,000<span className="text-[#F97818]">+</span>
                  </span>
                  <span className="font-inter text-[13px] uppercase tracking-[0.1em] text-white/70 font-semibold mt-1">
                    HAPPY ADVENTURERS
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col mt-4 ml-2 items-start font-marker -rotate-3">
              <span className="text-ink leading-tight text-[18px]">JOIN OUR GROWING</span>
              <span className="text-[#F97818] leading-tight text-[18px]">COMMUNITY</span>
              {/* Curved arrow */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F97818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden md:block mt-1 transform rotate-[130deg]">
                <path d="M5 9c2.5-4 8-6 12-4" />
                <path d="M13 3l4 2-2 4" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* CENTER AREA: Carousel Deck (~58%) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full 2xl:w-[58%] flex flex-col items-center justify-center relative min-h-[500px] md:min-h-[650px] z-30"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <div className="hidden md:flex absolute left-[-30px] top-1/2 -translate-y-1/2 z-50">
            <button 
              onClick={handlePrev}
              className="w-[54px] h-[54px] rounded-full bg-[#071116] flex items-center justify-center text-white hover:bg-[#F97818] hover:text-[#071116] transition-all duration-300 hover:scale-105 group shadow-lg"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-6 h-6 stroke-[2]" />
            </button>
          </div>

          <div className="hidden md:flex absolute right-[-30px] top-1/2 -translate-y-1/2 z-50">
            <button 
              onClick={handleNext}
              className="w-[54px] h-[54px] rounded-full bg-[#071116] flex items-center justify-center text-white hover:bg-[#F97818] hover:text-[#071116] transition-all duration-300 hover:scale-105 group shadow-lg"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-6 h-6 stroke-[2]" />
            </button>
          </div>

          {/* Deck Clipping Wrapper */}
          <div className="relative w-full max-w-[850px] h-[500px] md:h-[650px] overflow-hidden flex items-center justify-center rounded-lg mt-4 md:mt-10 2xl:mt-0">
            
            {/* Deck Container */}
            <div className="relative w-[85vw] md:w-[450px] h-[500px] md:h-[570px] flex items-center justify-center perspective-[1000px]">
              
              {/* Drag Overlay */}
              <motion.div 
              className="absolute inset-0 z-40 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -70) {
                  handleNext();
                } else if (swipe > 70) {
                  handlePrev();
                }
              }}
            />

            {testimonialsData.map((testimonial, index) => {
              const props = getCardProps(index);
              return (
                <TestimonialCard 
                  key={testimonial.id}
                  testimonial={testimonial}
                  position={props.position}
                  styleProps={props}
                />
              );
            })}
          </div>
        </div>

          {/* Progress Indicator */}
          <div className="flex gap-3 mt-12 z-40">
            {testimonialsData.map((_, index) => (
              <div 
                key={index} 
                className={`h-1 rounded-full transition-all duration-500 ${index === currentIndex ? 'w-[50px] bg-[#F97818]' : 'w-[30px] bg-ink/10'}`}
              />
            ))}
          </div>

        </motion.div>

        {/* RIGHT AREA: Desert Art (~18%) */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden 2xl:flex w-[18%] flex-col relative min-h-[600px] z-20"
        >
          {/* Handwritten message */}
          <div className="absolute top-10 right-0 flex flex-col items-center font-marker -rotate-4 z-30">
            <span className="text-ink text-[22px] leading-tight">DESERT</span>
            <span className="text-ink text-[22px] leading-tight">MEMORIES</span>
            <span className="text-ink text-[24px] leading-tight">LAST FOREVER</span>
            <svg width="140" height="6" viewBox="0 0 220 8" fill="none" className="mt-1">
              <path d="M2 6C40.6667 3.33333 120.4 -1.19999 218 4.00001" stroke="#F97818" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink mt-2 ml-10 transform rotate-12">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>

          {/* Desert Rider Art */}
          <div className="absolute top-[120px] -right-[150px] w-[500px] h-[500px] pointer-events-none mix-blend-darken">
            {/* Massive painted sun behind rider */}
            <div className="absolute top-[50px] left-[100px] w-[250px] h-[250px] bg-[#F97818]/80 rounded-full blur-[2px] z-0" />
            <img 
              src="/images/testimonial_rider_1790860564520.jpg" 
              alt="Desert Rider" 
              className="relative w-full h-full object-contain z-10"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
              }}
            />
          </div>

          {/* Wooden Sign */}
          <div className="absolute bottom-[20px] right-[-40px] bg-[#3B2C24] text-[#F5F3EF] p-4 font-marker rotate-3 flex flex-col shadow-xl z-40 border-2 border-[#1a110a]" style={{ clipPath: 'polygon(2% 0, 100% 2%, 98% 100%, 0 96%)' }}>
            <div className="absolute top-2 right-2 flex items-center">
               <span className="text-[#F97818] font-inter font-bold mr-1">→</span>
            </div>
            <span className="text-[20px] leading-tight mt-3">GOOD</span>
            <span className="text-[20px] leading-tight">RIDES</span>
            <span className="text-[20px] leading-tight">HAPPIER</span>
            <span className="text-[20px] leading-tight flex items-center gap-2">
              PEOPLE <span className="font-inter">:)</span>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
