import React, { useState, useRef, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CurrencySelector = () => {
  const { currency, setCurrency, currencies } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative font-barlow z-50" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#252525] border border-white/10 px-3 py-2 rounded text-white transition-colors h-[40px]"
      >
        <span className="text-[12px] font-bold text-white/70">{currency.flag}</span>
        <span className="text-[15px] font-black uppercase tracking-wider">{currency.code}</span>
        <span className="bg-[#F97818] text-[#111111] text-[10px] font-bold px-1.5 py-0.5 rounded ml-1">AED</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ml-1 text-white/50 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-[240px] bg-[#111111] border border-white/10 rounded overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-2 bg-[#1a1a1a] border-b border-white/5">
              <span className="text-[11px] font-bold tracking-widest text-white/40 uppercase">Select Currency</span>
            </div>
            <div>
              {currencies.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => {
                    setCurrency(curr);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 hover:bg-[#222222] transition-colors ${currency.code === curr.code ? 'bg-[#F97818]/10 text-[#F97818]' : 'text-white/80'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[12px] font-bold ${currency.code === curr.code ? 'text-[#F97818]' : 'text-white/50'}`}>{curr.flag}</span>
                    <span className="text-[14px] font-black uppercase tracking-wider">{curr.code} ({curr.symbol})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-medium text-white/40">
                      {curr.code === 'AED' ? 'Base (1:1)' : `1 AED ≈ ${curr.rate} ${curr.code}`}
                    </span>
                    {currency.code === curr.code && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F97818]" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CurrencySelector;
