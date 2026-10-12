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
      transition={{ duration: 0.35, delay: (index % 2) * 0.08 }}
      className="bg-[#12161B] border border-white/[0.08] hover:border-[#F97818]/60 rounded-2xl overflow-hidden flex flex-col sm:flex-row group transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-black/70 hover:-translate-y-1"
    >
      {/* Left: Image Container */}
      <div className="w-full sm:w-[42%] lg:w-[44%] h-[240px] sm:h-auto min-h-[240px] sm:min-h-[280px] relative overflow-hidden bg-black/40 shrink-0">
        <img
          src={pkg.image}
          alt={pkg.title}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            pkg.imagePosition || 'object-[center_60%]'
          }`}
          loading="lazy"
        />

        {/* Dark Vignette Overlay for Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-60" />

        {/* Price Tag (Top Left) */}
        <div className="absolute top-3.5 left-3.5 bg-[#F97818] text-[#070B0D] font-barlow font-black text-[14px] sm:text-[15px] px-3 py-1 rounded shadow-lg tracking-wider">
          {formattedPrice} {currency.code}
        </div>

        {/* Subtle Category Pill (Top Right) */}
        <div className="absolute top-3.5 right-3.5 bg-black/70 backdrop-blur-md text-white/90 border border-white/10 font-barlow font-bold text-[10px] px-2.5 py-1 rounded tracking-widest uppercase">
          {pkg.categoryLabel}
        </div>
      </div>

      {/* Right: Content Container */}
      <div className="w-full sm:w-[58%] lg:w-[56%] p-5 sm:p-6 flex flex-col justify-between flex-grow bg-[#12161B]">
        <div>
          {/* Title */}
          <h3 className="font-barlow font-black text-[20px] sm:text-[21px] leading-tight text-white uppercase tracking-tight mb-2 group-hover:text-[#F97818] transition-colors">
            {pkg.title}
          </h3>

          {/* Short Description */}
          <p className="font-inter text-[13px] text-gray-400 leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3">
            {pkg.description}
          </p>

          {/* Key Feature Box */}
          <div className="flex items-center justify-center gap-2 bg-[#22160C] border border-[#F97818]/30 text-[#FFA048] text-[11px] font-bold px-3 py-2 rounded-lg mb-4 tracking-wider uppercase text-center">
            <Key className="w-3.5 h-3.5 shrink-0 text-[#F97818]" />
            <span className="truncate">{pkg.highlight}</span>
          </div>

          {/* Vehicle Specs Grid (3 Columns) */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 py-2.5 px-2 rounded-xl bg-black/30 border border-white/[0.04] mb-5">
            {/* Duration */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-1 mb-0.5 text-[#F97818]">
                <Clock className="w-3 h-3" />
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-400">DURATION</span>
              </div>
              <span className="text-[11px] sm:text-[12px] font-bold text-white tracking-wide">{pkg.duration}</span>
            </div>

            {/* Seats */}
            <div className="flex flex-col items-center text-center border-x border-white/[0.08]">
              <div className="flex items-center gap-1 mb-0.5 text-[#F97818]">
                <Users className="w-3 h-3" />
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-400">SEATS</span>
              </div>
              <span className="text-[11px] sm:text-[12px] font-bold text-white tracking-wide">{pkg.seats}</span>
            </div>

            {/* Private Transfer */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-1 mb-0.5 text-[#F97818]">
                <Car className="w-3 h-3" />
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-400">TRANSFER</span>
              </div>
              <span className="text-[11px] sm:text-[12px] font-bold text-white tracking-wide">{pkg.transfer}</span>
            </div>
          </div>
        </div>

        {/* Action Button: Centered BOOK NOW */}
        <div className="pt-1 flex justify-center w-full mt-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#F97818] hover:bg-[#FF8A28] text-[#070B0D] font-barlow font-black text-[15px] tracking-wider uppercase py-3.5 px-6 rounded-xl text-center transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#F97818]/20 active:scale-[0.98] flex items-center justify-center cursor-pointer"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
