import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Map, Users, Star } from 'lucide-react';

const featureData = [
  {
    icon: Shield,
    title: 'SAFETY FIRST',
    description: 'Top-quality gear &\nexpert guides'
  },
  {
    icon: Map,
    title: 'STUNNING LOCATIONS',
    description: 'Explore the iconic\nAl Badayer Desert'
  },
  {
    icon: Users,
    title: 'FOR EVERYONE',
    description: 'Perfect for solo riders,\nfamilies & groups'
  },
  {
    icon: Star,
    title: 'PREMIUM EXPERIENCE',
    description: 'Unmatched adventure\nand service'
  }
];

const AboutFeatures = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full lg:w-[calc(100%-120px)] max-w-[1450px] mx-auto mt-[65px] bg-[#FAF8F4] border border-[#1E1E1E]/10 rounded-[20px] shadow-sm flex flex-col lg:flex-row overflow-hidden relative z-30 h-auto lg:h-[125px]"
    >
      {featureData.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div 
            key={index}
            className={`flex-1 flex items-center px-6 md:px-8 py-6 lg:py-0 min-h-[110px] lg:min-h-[125px] group ${
              index !== featureData.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-[#1E1E1E]/10' : ''
            }`}
          >
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center mr-4 transition-transform duration-300 group-hover:-translate-y-[3px]">
              <Icon className="w-10 h-10 md:w-11 md:h-11 text-[#F97818] stroke-[1.5] group-hover:brightness-110 transition-all duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-barlow font-bold text-[#11161A] text-[20px] md:text-[22px] tracking-wide uppercase mb-1">
                {feature.title}
              </span>
              <span className="font-inter text-[14px] md:text-[15px] text-[#77746F] leading-snug whitespace-pre-line">
                {feature.description}
              </span>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default AboutFeatures;
