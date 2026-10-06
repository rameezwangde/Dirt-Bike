import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  const lightPages = ['/about', '/packages', '/quad-bike-dubai', '/dirt-bike-dubai', '/buggy-rental-dubai', '/desert-safari-dubai'];
  const isLightModePage = lightPages.includes(location.pathname);
  
  const isPackagesActive = location.pathname === '/packages' || 
                           location.pathname === '/dirt-bike-dubai' || 
                           location.pathname === '/buggy-rental-dubai' || 
                           location.pathname === '/desert-safari-dubai' || 
                           location.pathname === '/quad-bike-dubai';

  const defaultTextColor = isLightModePage ? 'text-[#11161A]' : 'text-white/80';
  const logoColor = isLightModePage ? 'text-[#11161A]' : 'text-white/90';
  const hoverColor = isLightModePage ? 'hover:text-[#F97818]' : 'hover:text-white';
  const scrolledBg = isLightModePage 
    ? 'bg-cream/80 backdrop-blur-md shadow-sm border-b border-ink/5' 
    : 'bg-charcoal/70 backdrop-blur-md shadow-lg border-b border-white/10';
  
  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? scrolledBg : 'bg-transparent'}`}
      >
        <div 
          className="mx-auto flex items-center justify-between px-[20px] lg:px-[48px] transition-all duration-300"
          style={{
            maxWidth: '1540px',
            height: scrolled ? '80px' : '100px',
          }}
        >
          
          {/* LEFT: Logo */}
          <div className="flex items-center relative z-[60]">
            <div className={`font-barlow font-bold text-2xl tracking-widest ${logoColor}`}>
              YOUR LOGO
            </div>
          </div>

          {/* CENTER: Navigation Links */}
          <div className={`hidden lg:flex items-center font-barlow text-[15px] font-semibold tracking-widest ${defaultTextColor} whitespace-nowrap`} style={{ gap: '45px' }}>
            <Link to="/" className={`relative uppercase transition-colors group ${isActive('/') ? 'text-[#F97818]' : hoverColor}`}>
              HOME
              <div className={`absolute -bottom-1 left-0 h-[1px] bg-[#F97818] transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
            <Link to="/about" className={`relative uppercase transition-colors group ${isActive('/about') ? 'text-[#F97818]' : hoverColor}`}>
              ABOUT US
              <div className={`absolute -bottom-1 left-0 h-[1px] bg-[#F97818] transition-all duration-300 ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
            <Link to="/packages" className={`relative uppercase transition-colors group ${isPackagesActive ? 'text-[#F97818]' : hoverColor}`}>
              PACKAGES
              <div className={`absolute -bottom-1 left-0 h-[1px] bg-[#F97818] transition-all duration-300 ${isPackagesActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
            <a href="#" className={`relative uppercase transition-colors group ${hoverColor}`}>
              CONTACT
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#F97818] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* RIGHT: CTA Button */}
          <div className="hidden lg:flex items-center">
            <button 
              className="group relative bg-[#F97818] hover:bg-[#FF8A28] text-[#070B0D] font-barlow font-bold text-sm tracking-widest uppercase clip-button transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              style={{ width: '235px', height: '58px' }}
            >
              BOOK YOUR RIDE
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-[5px]" />
            </button>
          </div>

          {/* MOBILE: Menu Button */}
          <div className="lg:hidden flex items-center relative z-[60]">
            <button 
              className={`${isMobileMenuOpen ? 'text-white' : logoColor} p-2 focus:outline-none transition-colors`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

        </div>
        <div className="w-full h-[1px] bg-white/10 relative -mt-[1px]" />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#070B0D] flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8 font-barlow text-[24px] font-bold tracking-widest text-white/90 w-full px-6">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`uppercase transition-colors ${isActive('/') ? 'text-[#F97818]' : 'hover:text-[#F97818]'}`}>HOME</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`uppercase transition-colors ${isActive('/about') ? 'text-[#F97818]' : 'hover:text-[#F97818]'}`}>ABOUT US</Link>
              <Link to="/packages" onClick={() => setIsMobileMenuOpen(false)} className={`uppercase transition-colors ${isPackagesActive ? 'text-[#F97818]' : 'hover:text-[#F97818]'}`}>PACKAGES</Link>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="uppercase hover:text-[#F97818] transition-colors">CONTACT</a>
              
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 bg-[#F97818] hover:bg-[#FF8A28] text-[#070B0D] px-8 py-4 font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 w-full max-w-[300px] transition-colors duration-300"
                style={{ clipPath: 'polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)' }}
              >
                BOOK YOUR RIDE
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
