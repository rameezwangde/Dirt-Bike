import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Clock, Users, Car, Key, Shield, Phone, MessageSquare } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

const TourDetailsModal = ({ pkg, isOpen, onClose }) => {
  const { currency, convertPrice } = useCurrency();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!pkg) return null;

  const formattedPrice = convertPrice ? convertPrice(pkg.price) : pkg.price;
  const whatsappUrl = `https://wa.me/971504799258?text=${encodeURIComponent(
    `Hello! I want to book "${pkg.title}" (${formattedPrice} ${currency.code}). Please share available slots!`
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#12161B] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#F97818] hover:text-[#070B0D] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-grow custom-scrollbar">
              {/* Image & Header Banner */}
              <div className="relative h-[260px] sm:h-[320px] w-full bg-black/50">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12161B] via-[#12161B]/40 to-transparent" />

                {/* Price & Category Badges */}
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="bg-[#F97818] text-[#070B0D] font-barlow font-black text-xl px-4 py-1.5 rounded-lg shadow-xl tracking-wider">
                    {formattedPrice} {currency.code}
                  </div>
                  <div className="bg-black/70 backdrop-blur-md text-white/90 border border-white/15 font-barlow font-bold text-xs px-3 py-1.5 rounded-lg uppercase tracking-widest">
                    {pkg.categoryLabel}
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Title */}
                <div>
                  <h2 className="font-barlow font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    {pkg.title}
                  </h2>
                  <p className="font-inter text-sm sm:text-base text-gray-300 mt-2 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Key Highlights Pill */}
                <div className="flex items-center gap-2.5 bg-[#22160C] border border-[#F97818]/40 text-[#FFA048] text-xs sm:text-sm font-bold px-4 py-3 rounded-xl tracking-wider uppercase">
                  <Key className="w-4 h-4 shrink-0 text-[#F97818]" />
                  <span>{pkg.highlight}</span>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-1.5 text-[#F97818] mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-[11px] font-bold text-gray-400 uppercase">Duration</span>
                    </div>
                    <span className="text-sm font-bold text-white">{pkg.duration}</span>
                  </div>

                  <div className="flex flex-col items-center text-center border-x border-white/10">
                    <div className="flex items-center gap-1.5 text-[#F97818] mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-[11px] font-bold text-gray-400 uppercase">Capacity</span>
                    </div>
                    <span className="text-sm font-bold text-white">{pkg.seats}</span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-1.5 text-[#F97818] mb-1">
                      <Car className="w-4 h-4" />
                      <span className="text-[11px] font-bold text-gray-400 uppercase">Transfer</span>
                    </div>
                    <span className="text-sm font-bold text-white text-center leading-tight">{pkg.transfer}</span>
                  </div>
                </div>

                {/* Pricing Rates Note */}
                {pkg.priceRates && (
                  <div className="bg-[#181D23] border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">STANDARD RATES:</span>
                    <span className="font-barlow font-bold text-base text-[#F97818] tracking-wide">{pkg.priceRates}</span>
                  </div>
                )}

                {/* Technical Specifications */}
                {pkg.specs && (
                  <div>
                    <h3 className="font-barlow font-bold text-lg text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#F97818]" />
                      Vehicle Specifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {Object.entries(pkg.specs).map(([key, val]) => (
                        <div
                          key={key}
                          className="bg-black/30 border border-white/[0.04] p-3 rounded-lg flex items-center justify-between text-xs sm:text-sm"
                        >
                          <span className="text-gray-400 uppercase font-semibold">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="text-white font-medium text-right ml-2">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Inclusions */}
                {pkg.inclusions && (
                  <div>
                    <h3 className="font-barlow font-bold text-lg text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F97818]" />
                      What's Included
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {pkg.inclusions.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-[#F97818] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions Footer */}
            <div className="p-4 sm:p-6 bg-[#0E1115] border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#F97818] hover:bg-[#FF8A28] text-[#070B0D] font-barlow font-black text-base py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 uppercase tracking-wider transition-colors shadow-lg active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                BOOK NOW ON WHATSAPP
              </a>

              <a
                href="tel:+971504799258"
                className="bg-[#181D23] hover:bg-white/10 border border-white/20 text-white font-barlow font-bold text-base py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 uppercase tracking-wider transition-colors active:scale-95 text-center"
              >
                <Phone className="w-4 h-4 text-[#F97818]" />
                CALL +971 50 479 9258
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TourDetailsModal;
