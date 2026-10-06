import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSelector = () => {
  const { language, setLanguage, languages } = useLanguage();
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
        <span className="text-[12px] font-bold text-white/70">{language.flag}</span>
        <span className="text-[15px] font-black uppercase tracking-wider">{language.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ml-1 text-white/50 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-[180px] bg-[#111111] border border-white/10 rounded overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 hover:bg-[#222222] transition-colors ${language.code === lang.code ? 'bg-[#F97818]/10 text-[#F97818]' : 'text-white/80'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[12px] font-bold ${language.code === lang.code ? 'text-[#F97818]' : 'text-white/50'}`}>{lang.flag}</span>
                    <span className="text-[15px] font-black">{lang.name}</span>
                  </div>
                  {language.code === lang.code ? (
                    <div className="flex items-center gap-2">
                      <span className="bg-white/10 text-white/60 text-[10px] font-bold px-1.5 py-0.5 rounded">{lang.code}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F97818]" />
                    </div>
                  ) : (
                    <span className="bg-white/5 text-white/40 text-[10px] font-bold px-1.5 py-0.5 rounded">{lang.code}</span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
