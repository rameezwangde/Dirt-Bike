import React from 'react';
import { motion } from 'framer-motion';
import { Bike, Map, ShieldCheck, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ExperienceBar = () => {
  const { t } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
      className="absolute z-30 left-0 right-0 lg:left-[40px] lg:right-[40px] bottom-[20px] lg:bottom-[25px] flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-[1fr_1.25fr_1.1fr] h-auto lg:h-[112px] snap-x snap-mandatory hide-scrollbar border-y lg:border border-white/16"
      style={{
        background: 'rgba(5,8,9,0.90)',
      }}
    >
      
      {/* SECTION 1 */}
      <div className="flex-shrink-0 w-[260px] md:w-auto flex items-center lg:items-center p-4 lg:px-8 border-r border-white/10 group lg:h-full justify-start lg:justify-center snap-start">
        <Bike className="w-8 h-8 text-white/50 mr-4 lg:mr-5 group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
        <div className="flex flex-col">
          <span className="font-barlow font-bold text-white text-sm lg:text-lg tracking-wide uppercase">{t('exp_1_title')}</span>
          <span className="font-inter text-[10px] lg:text-[11px] text-white/50 tracking-wider uppercase mt-1">{t('exp_1_sub')}</span>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="flex-shrink-0 w-[280px] md:w-auto flex items-center lg:items-center p-4 lg:px-8 lg:border-r border-r md:border-b-0 border-white/10 group lg:h-full justify-start lg:justify-center snap-start">
        <Map className="w-8 h-8 text-white/50 mr-4 lg:mr-5 group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
        <div className="flex flex-col">
          <span className="font-barlow font-bold text-white text-sm lg:text-lg tracking-wide uppercase">{t('exp_2_title')}</span>
          <span className="font-inter text-[10px] lg:text-[11px] text-white/50 tracking-wider uppercase mt-1">{t('exp_2_sub')}</span>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="flex-shrink-0 w-[260px] md:w-auto flex items-center lg:items-center p-4 lg:px-8 border-r md:border-r-0 border-white/10 group lg:h-full justify-start lg:justify-center snap-start">
        <ShieldCheck className="w-8 h-8 text-white/50 mr-4 lg:mr-5 group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
        <div className="flex flex-col">
          <span className="font-barlow font-bold text-white text-sm lg:text-lg tracking-wide uppercase">{t('exp_3_title')}</span>
          <span className="font-inter text-[10px] lg:text-[11px] text-white/50 tracking-wider uppercase mt-1">{t('exp_3_sub')}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceBar;
