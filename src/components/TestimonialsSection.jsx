import React from 'react';
import { motion } from 'framer-motion';
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

// Duplicate data for seamless marquee loop
const marqueeData = [...testimonialsData, ...testimonialsData];

const TestimonialsSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-cream pt-[20px] md:pt-[40px] pb-[10px] md:pb-[20px]">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply opacity-[0.04]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-ink fill-none stroke-[0.5]">
           <path d="M10,20 Q30,10 50,30 T90,20" />
           <path d="M20,60 Q40,50 70,60 T100,40" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto w-full flex flex-col items-center">
        
        {/* TOP AREA: Titles & Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center text-center mb-12 md:mb-16 px-[20px]"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-inter text-[13px] font-bold tracking-[0.35em] uppercase text-ink">
              TESTIMONIALS
            </span>
          </div>

          <h2 className="font-barlow font-black uppercase leading-[0.9] mb-6 max-w-[800px]" style={{ fontSize: 'clamp(40px, 8vw, 75px)' }}>
            <span className="text-ink">REAL </span>
            <span className="text-[#F97818]">RIDERS. </span>
            <span className="text-ink">REAL </span>
            <span className="text-[#F97818]">STORIES.</span>
          </h2>

          <p className="font-inter text-[#55514D] text-[16px] md:text-[18px] leading-[1.6] max-w-[600px]">
            Don't just take our word for it. Hear from adventurers who have experienced the thrill, freedom, and unforgettable moments with Enduro Bike Dubai.
          </p>
        </motion.div>

        {/* BOTTOM AREA: Infinite Marquee Slider */}
        <div className="w-full overflow-hidden flex relative z-30 group pb-8 pt-4">
          
          {/* Gradient Edges for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-[40px] md:w-[150px] bg-gradient-to-r from-cream to-transparent z-40 pointer-events-none opacity-10" />
          <div className="absolute right-0 top-0 bottom-0 w-[40px] md:w-[150px] bg-gradient-to-l from-cream to-transparent z-40 pointer-events-none opacity-10" />

          <motion.div 
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {marqueeData.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 hover:-translate-y-2 transition-transform duration-300">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
