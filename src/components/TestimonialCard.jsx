import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="flex flex-col shadow-2xl overflow-hidden bg-[#071116] text-[#F5F3EF] w-[320px] md:w-[400px] h-auto shrink-0 mx-4"
      style={{
        borderRadius: '3px',
      }}
    >
      <div className="flex flex-col flex-1 p-6 md:p-8">
        
        {/* Quote Mark & Stars */}
        <div className="flex flex-col mb-4">
          <Quote 
            className="text-[#F97818] fill-[#F97818] mb-2" 
            size={36} 
          />
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={16} className="text-[#F97818] fill-[#F97818]" />
            ))}
          </div>
        </div>

        {/* Quote Text */}
        <p className="font-inter mb-auto text-[15px] leading-[1.5]">
          "{testimonial.quote}"
        </p>

        {/* User Identity */}
        <div className="flex items-center gap-4 mt-6">
          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-gray-200">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-barlow font-bold text-[18px] leading-none text-white">
              {testimonial.name}
            </span>
            <span className="font-inter text-[13px] mt-1 text-white/60">
              {testimonial.flag} {testimonial.country}
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default TestimonialCard;
