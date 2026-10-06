import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TourCard = ({ tour, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="relative flex flex-col w-full h-full min-h-[590px] group transition-transform duration-400 ease-out hover:-translate-y-[5px]"
      style={{
        boxShadow: '0 18px 45px rgba(18,16,12,0.10)',
        borderRadius: '2px', // almost 0 radius
        overflow: 'hidden'
      }}
    >
      
      {/* Top Image Area */}
      <div 
        className="relative w-full h-[275px] overflow-hidden z-10"
        style={{
          // Cleaner angled transition to the bottom panel
          clipPath: 'polygon(0 0, 100% 0, 100% 82%, 75% 91%, 45% 96%, 20% 91%, 0 84%)'
        }}
      >
        <div className="absolute inset-0 w-full h-full transition-transform duration-400 ease-out group-hover:scale-[1.025]">
          <div className="w-full h-full bg-[#181818] flex items-center justify-center">
            {/* Using an img tag with the placeholder URL */}
            <img 
              src={tour.image} 
              alt={tour.title.replace('\n', ' ')}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                // Fallback for placeholder if image not yet created
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<span style="font-size: 14px; letter-spacing: 0.12em; color: rgba(255,255,255,0.25); text-transform: uppercase;">${tour.image.split('/').pop()}</span>`;
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Information Panel */}
      <div 
        className="relative w-full flex-grow bg-[#071116] z-0 flex flex-col"
        style={{ padding: '28px 34px 30px' }}
      >
        
        {/* Tire track texture (decorative) */}
        <div 
          className="absolute bottom-[-10px] right-[-20px] w-[200px] h-[80px] opacity-[0.06] pointer-events-none -rotate-12 z-0"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 10px, #ffffff 10px, #ffffff 20px)`
          }}
        />

        {/* Content wrapper with higher z-index than texture */}
        <div className="relative z-[2] flex flex-col h-full w-full">
          
          {/* Card Number & Line */}
          <div className="flex items-center gap-3 mb-[12px]">
            <span className="font-barlow font-extrabold text-[26px] text-[#F97818] leading-none">
              {tour.number}
            </span>
            <div className="w-[60px] h-[1px] bg-[#F97818]/50" />
          </div>

          {/* Title Area */}
          <div className="relative w-full">
            <h3 
              className="font-barlow font-black text-[#F5F3EF] uppercase whitespace-pre-line pr-[50px]"
              style={{
                fontSize: 'clamp(38px, 2.7vw, 48px)',
                lineHeight: 0.88,
                letterSpacing: '-0.015em'
              }}
            >
              {tour.title}
            </h3>
          </div>

          {/* Icon (absolute inside panel) */}
          <div 
            className="absolute flex items-center justify-center text-[#F97818]"
            style={{ right: '30px', top: '72px', width: '45px', height: '45px' }}
          >
            {tour.iconSvg}
          </div>

          {/* Description */}
          <p 
            className="font-inter text-[rgba(245,243,239,0.78)] mb-auto"
            style={{
              fontSize: '14.5px',
              lineHeight: 1.5,
              marginTop: '18px',
              maxWidth: '90%'
            }}
          >
            {tour.description}
          </p>

          {/* CTA Button */}
          {tour.link ? (
            tour.link.startsWith('http') ? (
              <a 
                href={tour.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto self-start bg-[#F97818] hover:bg-[#FF8A28] text-[#071116] font-barlow font-extrabold uppercase whitespace-nowrap flex items-center transition-colors duration-250 ease-out group/btn"
                style={{
                  height: '48px',
                  width: 'fit-content',
                  padding: '0 25px',
                  fontSize: '17px',
                  letterSpacing: '0.04em',
                  gap: '12px',
                  clipPath: 'polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)'
                }}
              >
                {tour.ctaText}
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] transition-transform duration-250 ease-out group-hover/btn:translate-x-[4px]" />
              </a>
            ) : (
              <Link 
                to={tour.link}
                className="mt-auto self-start bg-[#F97818] hover:bg-[#FF8A28] text-[#071116] font-barlow font-extrabold uppercase whitespace-nowrap flex items-center transition-colors duration-250 ease-out group/btn"
                style={{
                  height: '48px',
                  width: 'fit-content',
                  padding: '0 25px',
                  fontSize: '17px',
                  letterSpacing: '0.04em',
                  gap: '12px',
                  clipPath: 'polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)'
                }}
              >
                {tour.ctaText}
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] transition-transform duration-250 ease-out group-hover/btn:translate-x-[4px]" />
              </Link>
            )
          ) : (
            <button 
              className="mt-auto self-start bg-[#F97818] hover:bg-[#FF8A28] text-[#071116] font-barlow font-extrabold uppercase whitespace-nowrap flex items-center transition-colors duration-250 ease-out group/btn"
              style={{
                height: '48px',
                width: 'fit-content',
                padding: '0 25px',
                fontSize: '17px',
                letterSpacing: '0.04em',
                gap: '12px',
                clipPath: 'polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)'
              }}
            >
              {tour.ctaText}
              <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] transition-transform duration-250 ease-out group-hover/btn:translate-x-[4px]" />
            </button>
          )}
        </div>

      </div>

    </motion.div>
  );
};

export default TourCard;
