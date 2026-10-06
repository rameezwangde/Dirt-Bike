import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PackagesHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-[600px] h-[80vh] max-h-[800px] overflow-hidden bg-[#071116]">
      
      {/* Background Image (z-index: 0) */}
      <img 
        src="/images/packages-hero.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0 object-center"
        alt="Dubai Desert Vehicles"
      />
      
      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#071116]/95 via-[#071116]/70 to-transparent w-full md:w-[70%]" />
      <div className="absolute inset-0 z-[1] md:hidden bg-gradient-to-t from-[#071116]/90 to-transparent" />

      {/* Strict Left Content Zone (z-index: 10) */}
      <div 
        className="relative z-10 w-full md:w-[50%] max-w-[650px] px-[24px] md:px-0 pt-[140px] md:pt-[180px] md:ml-[clamp(70px,5vw,110px)]"
      >
        
        {/* Eyebrow */}
        <div className="flex items-center gap-[18px] mb-[28px]">
          <span className="font-inter text-[12px] font-bold tracking-[0.35em] uppercase text-[#F97818]">
            {t('packages_eyebrow') || "CHOOSE YOUR RIDE"}
          </span>
        </div>

        {/* Main Title Container */}
        <div className="relative w-full">
          <h1 className="font-barlow font-black uppercase leading-[0.85] md:leading-[0.82] tracking-[-0.025em] text-[58px] md:text-[clamp(66px,5.2vw,94px)]">
            <span className="block text-white">{t('packages_title_1') || "PREMIUM"}</span>
            <span className="block text-white">{t('packages_title_2') || "DESERT"}</span>
            <span className="block text-[#F97818] tracking-[-0.035em] text-[52px] md:text-[clamp(64px,4.8vw,88px)]">{t('packages_title_3') || "PACKAGES"}</span>
          </h1>
        </div>

        {/* Description */}
        <p className="font-inter text-[16px] font-medium leading-[1.55] text-white/80 max-w-[520px] mt-[28px]">
          {t('packages_desc') || "From high-speed dirt bikes to rugged dune buggies and powerful quads, we have the perfect machine for your next adventure."}
        </p>

        {/* Location Detail */}
        <div className="flex items-center gap-2 mt-[22px]">
          <MapPin className="text-[#F97818]" size={16} strokeWidth={2.5} />
          <span className="font-inter text-[12px] font-bold tracking-[0.16em] uppercase text-white/90">
            {t('about_loc') || "AL BADAYER DESERT · DUBAI"}
          </span>
        </div>

      </div>



    </section>
  );
};

export default PackagesHero;
