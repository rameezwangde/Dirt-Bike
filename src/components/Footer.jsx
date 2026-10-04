import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#04090C] text-[#F5F3EF] px-[20px] md:px-[60px] pt-[80px] pb-[40px] border-t-[3px] border-[#F97818] relative z-50 overflow-hidden shadow-2xl">
      
      {/* Background Accent */}
      <div 
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F97818] opacity-[0.02] rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3" 
      />

      <div className="max-w-[1500px] mx-auto relative z-10 flex flex-col">
        
        {/* Top Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 mb-16">
          
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex flex-col items-start gap-1">
              <span className="font-barlow font-black text-[32px] tracking-tight uppercase leading-none">
                ENDURO BIKE <span className="text-[#F97818]">DUBAI</span>
              </span>
            </div>
            <p className="font-inter text-[14px] text-white/50 leading-relaxed max-w-[320px]">
              Premium off-road desert experiences across Dubai and the UAE.
            </p>
            <a 
              href="#"
              className="bg-[#F97818] text-[#11161A] font-barlow font-black uppercase tracking-wider text-[15px] px-6 py-3 w-fit flex items-center gap-2 hover:bg-white transition-colors duration-300 mt-2"
            >
              WHATSAPP US <MessageCircle size={18} className="ml-1" strokeWidth={2.5}/>
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-5 lg:ml-10">
            <h4 className="font-barlow font-black text-[#F97818] uppercase text-[16px] tracking-wider">QUICK LINKS</h4>
            <ul className="flex flex-col gap-3 font-inter text-[14px] text-white/60">
              <li><Link to="/" className="hover:text-[#F97818] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#F97818] transition-colors">About Us</Link></li>
              <li><Link to="/tours" className="hover:text-[#F97818] transition-colors">Packages</Link></li>
              <li><Link to="/gallery" className="hover:text-[#F97818] transition-colors">Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#F97818] transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-[#F97818] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Experiences */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="font-barlow font-black text-[#F97818] uppercase text-[16px] tracking-wider">EXPERIENCES</h4>
            <ul className="flex flex-col gap-3 font-inter text-[14px] text-white/60">
              <li><Link to="/tours" className="hover:text-[#F97818] transition-colors">Dune Buggy Tours</Link></li>
              <li><Link to="/tours" className="hover:text-[#F97818] transition-colors">Dirt Bike Tours</Link></li>
              <li><Link to="/tours" className="hover:text-[#F97818] transition-colors">Quad Biking</Link></li>
              <li><Link to="/safari" className="hover:text-[#F97818] transition-colors">Desert Safari Tours</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Follow */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="font-barlow font-black text-[#F97818] uppercase text-[16px] tracking-wider">CONTACT</h4>
            <ul className="flex flex-col gap-3 font-inter text-[14px] text-white/60">
              <li>+971 50 479 9258</li>
              <li>info@endurobikedubai.com</li>
              <li className="leading-relaxed">Al Badayer Desert - Dubai-Hatta Rd -<br/>Dubai - United Arab Emirates</li>
            </ul>
            
            <h4 className="font-barlow font-black text-[#F97818] uppercase text-[16px] tracking-wider mt-4">FOLLOW THE ADVENTURE</h4>
            <div className="flex items-center gap-3 text-white/60 font-inter text-[13px]">
              <a href="#" className="hover:text-[#F97818] flex items-center gap-1.5 transition-colors">
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>
              <span className="text-white/20">/</span>
              <a href="#" className="hover:text-[#F97818] transition-colors">Snapchat</a>
              <span className="text-white/20">/</span>
              <a href="#" className="hover:text-[#F97818] transition-colors">TikTok</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 font-inter text-[11px] text-white/40">
          <div className="flex flex-col gap-3">
            <span className="tracking-widest uppercase font-bold text-white/30">25.2048° N / 55.2708° E — DUBAI, UAE</span>
            <span>&copy; {new Date().getFullYear()} Enduro Bike Dubai. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-50 group"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} className="text-white group-hover:scale-110 transition-transform duration-300" />
      </a>

    </footer>
  );
};

export default Footer;
