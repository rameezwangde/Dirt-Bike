import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Car, Key } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

const PackageCard = ({ pkg, onOpenDetails, index = 0 }) => {
  const { currency, convertPrice } = useCurrency();

  const formattedPrice = convertPrice ? convertPrice(pkg.price) : pkg.price;
  const whatsappUrl = `https://wa.me/971504799258?text=${encodeURIComponent(
    `Hello! I would like to book the "${pkg.title}" package (${formattedPrice} ${currency.code}).`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: (index % 3) * 0.05 }}
      className="bg-[#12161B] border border-white/[0.08] hover:border-[#F97818]/60 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-black/70 hover:-translate-y-1"
    >
      {/* Top Image Container */}
      <div className="relative w-full h-[230px] sm:h-[250px] overflow-hidden bg-black/40">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Dark Vignette Overlay for Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12161B] via-transparent to-black/30 opacity-60" />

        {/* Price Tag (Matching brand orange: #F97818) */}
        <div className="absolute top-4 left-4 bg-[#F97818] text-[#070B0D] font-barlow font-black text-[15px] sm:text-[16px] px-3.5 py-1 rounded shadow-lg tracking-wider">
          {formattedPrice} {currency.code}
        </div>

        {/* Subtle Category Pill on Top-Right */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white/80 border border-white/10 font-barlow font-bold text-[11px] px-2.5 py-1 rounded tracking-widest uppercase">
          {pkg.categoryLabel}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-[#12161B]">
        <div>
          {/* Title */}
          <h3 className="font-barlow font-black text-[20px] sm:text-[22px] leading-tight text-white uppercase tracking-tight min-h-[52px] flex items-center mb-2.5 group-hover:text-[#F97818] transition-colors">
            {pkg.title}
          </h3>

          {/* Short Description */}
          <p className="font-inter text-[13px] text-gray-400 leading-relaxed mb-4 line-clamp-2">
            {pkg.description}
          </p>

          {/* Key Feature Box */}
          <div className="flex items-center justify-center gap-2 bg-[#22160C] border border-[#F97818]/30 text-[#FFA048] text-[11px] font-bold px-3 py-2 rounded-lg mb-5 tracking-wider uppercase text-center">
            <Key className="w-3.5 h-3.5 shrink-0 text-[#F97818]" />
            <span className="truncate">{pkg.highlight}</span>
          </div>

          {/* Vehicle Specs Grid (3 Columns) */}
          <div className="grid grid-cols-3 gap-2 py-3 px-2 rounded-xl bg-black/30 border border-white/[0.04] mb-6">
            {/* Duration */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-1.5 mb-1 text-[#F97818]">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">DURATION</span>
              </div>
              <span className="text-[12px] font-bold text-white tracking-wide">{pkg.duration}</span>
            </div>

            {/* Seats */}
            <div className="flex flex-col items-center text-center border-x border-white/[0.08]">
              <div className="flex items-center gap-1.5 mb-1 text-[#F97818]">
                <Users className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">SEATS</span>
              </div>
              <span className="text-[12px] font-bold text-white tracking-wide">{pkg.seats}</span>
            </div>

            {/* Private Transfer */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-1.5 mb-1 text-[#F97818]">
                <Car className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">TRANSFER</span>
              </div>
              <span className="text-[12px] font-bold text-white tracking-wide">{pkg.transfer}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          {/* BOOK NOW Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F97818] hover:bg-[#FF8A28] text-[#070B0D] font-barlow font-black text-[14px] tracking-wider uppercase py-3 px-4 rounded-lg text-center transition-all duration-200 shadow-md active:scale-95 flex items-center justify-center cursor-pointer"
          >
            BOOK NOW
          </a>

          {/* TOUR DETAILS Button */}
          <button
            type="button"
            onClick={() => onOpenDetails(pkg)}
            className="bg-transparent hover:bg-white/[0.06] border border-white/20 hover:border-[#F97818]/60 text-white font-barlow font-bold text-[14px] tracking-wider uppercase py-3 px-4 rounded-lg text-center transition-all duration-200 active:scale-95 flex items-center justify-center cursor-pointer"
          >
            TOUR DETAILS
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
