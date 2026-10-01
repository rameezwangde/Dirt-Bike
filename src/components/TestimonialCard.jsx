import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, position, styleProps }) => {
  const isCenter = position === 'center';

  return (
    <motion.div
      initial={false}
      animate={{
        x: styleProps.x,
        y: styleProps.y,
        scale: styleProps.scale,
        rotate: styleProps.rotate,
        zIndex: styleProps.zIndex,
        opacity: styleProps.opacity,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`absolute top-0 left-0 origin-center flex flex-col shadow-2xl overflow-hidden ${
        isCenter 
          ? 'bg-[#071116] text-[#F5F3EF] w-[85vw] md:w-[450px] h-[500px] md:h-[570px]' 
          : 'bg-[#FCFAF6] text-[#11161A] w-[75vw] md:w-[360px] h-[400px] md:h-[450px]'
      }`}
      style={{
        borderRadius: '3px',
      }}
    >
      {/* Top Image (only shown if center) */}
      <AnimatePresence>
        {isCenter && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '250px' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full overflow-hidden shrink-0"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)'
            }}
          >
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col flex-1 p-6 md:p-8">
        
        {/* Quote Mark & Stars */}
        <div className="flex flex-col mb-4">
          <Quote 
            className="text-[#F97818] fill-[#F97818] mb-2" 
            size={isCenter ? 48 : 36} 
          />
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={16} className="text-[#F97818] fill-[#F97818]" />
            ))}
          </div>
        </div>

        {/* Quote Text */}
        <p 
          className={`font-inter mb-auto ${isCenter ? 'text-[17px] leading-[1.55]' : 'text-[15px] leading-[1.5]'}`}
        >
          "{testimonial.quote}"
        </p>

        {/* User Identity */}
        <div className="flex items-center gap-4 mt-6">
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-gray-200">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-barlow font-bold text-[20px] leading-none ${isCenter ? 'text-white' : 'text-black'}`}>
              {testimonial.name}
            </span>
            <span className={`font-inter text-[13px] mt-1 ${isCenter ? 'text-white/60' : 'text-black/60'}`}>
              {testimonial.flag} {testimonial.country}
            </span>
          </div>
        </div>

      </div>

    </motion.div>
  );
};

export default TestimonialCard;
