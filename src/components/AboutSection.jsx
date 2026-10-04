import React from 'react';
import { motion } from 'framer-motion';
import AboutCollage from './AboutCollage';
import AboutFeatures from './AboutFeatures';
import { Mountain, Trophy, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative w-full bg-cream text-ink overflow-hidden pt-[40px] md:pt-[50px] pb-[30px] z-20">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-multiply">
        {/* Faint topographic contour lines - reduced to 2-3 clusters */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-ink fill-none stroke-[1]">
           <path d="M10,20 Q20,25 30,10 T60,30" />
           <path d="M10,40 Q20,45 30,30 T60,50" />
           <path d="M70,80 Q80,85 90,70 T100,90" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-[20px] md:px-[60px] flex flex-col">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-[30px] lg:gap-[70px] items-center w-full">
          
          {/* LEFT: Editorial Image Collage */}
          <div className="w-full">
            <AboutCollage />
          </div>

          {/* RIGHT: Content Area */}
          <div className="w-full flex flex-col items-start">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="font-inter text-[13px] font-bold tracking-[0.35em] uppercase text-[#202327]">
                OUR STORY
              </span>
              <div className="w-16 h-[1px] bg-[#F97818]" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-barlow font-black uppercase flex flex-col leading-[0.88] mb-6"
              style={{ fontSize: 'clamp(48px, 10vw, 92px)' }}
            >
              <span className="text-[#11161A]">ABOUT</span>
              <span className="text-[#F97818]">ENDURO</span>
              <div className="flex gap-2 whitespace-nowrap">
                <span className="text-[#F97818]">BIKE</span>
                <span className="text-[#11161A]">DUBAI</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-[17px] leading-[1.55] text-[#292C30] max-w-[650px]"
              style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}
            >
              <p>
                At Enduro Bike Dubai, we turn desert dreams into real adventures. Located in the stunning Al Badayer Desert, we offer thrilling <span className="font-semibold text-[#F97818]">Dune Buggy Excursions</span>, <span className="font-semibold text-[#F97818]">Quad Biking</span>, <span className="font-semibold text-[#F97818]">Dirt Biking tours</span>, and premium desert safaris designed for adventure seekers of all levels.
              </p>
              <p>
                Our tours give you more than just a ride — they offer breathtaking views, an adrenaline rush like no other, and unforgettable memories with your friends and family. Whether you're a first-timer or an experienced rider, our team ensures a safe, exciting, and truly memorable desert experience.
              </p>
            </motion.div>

            {/* Stats Row */}
            <div className="flex flex-col md:flex-row items-start md:items-center mt-[45px] gap-6 md:gap-8">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <Mountain className="w-9 h-9 text-[#F97818] stroke-[1.5]" />
                <div className="flex flex-col">
                  <span className="font-barlow font-bold text-[30px] md:text-[34px] leading-none mb-1">5,000+</span>
                  <span className="font-inter text-[13px] uppercase tracking-[0.08em] text-[#77746F]">Happy Riders</span>
                </div>
              </motion.div>

              <div className="hidden md:block w-[1px] h-10 bg-[#11161A]/10" />

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <Trophy className="w-9 h-9 text-[#F97818] stroke-[1.5]" />
                <div className="flex flex-col">
                  <span className="font-barlow font-bold text-[30px] md:text-[34px] leading-none mb-1">4.9/5</span>
                  <span className="font-inter text-[13px] uppercase tracking-[0.08em] text-[#77746F]">Average Rating</span>
                </div>
              </motion.div>

              <div className="hidden md:block w-[1px] h-10 bg-[#11161A]/10" />

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <Users className="w-9 h-9 text-[#F97818] stroke-[1.5]" />
                <div className="flex flex-col">
                  <span className="font-barlow font-bold text-[30px] md:text-[34px] leading-none mb-1">8+ YEARS</span>
                  <span className="font-inter text-[13px] uppercase tracking-[0.08em] text-[#77746F]">In Desert Tours</span>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

        <AboutFeatures />

      </div>
    </section>
  );
};

export default AboutSection;
