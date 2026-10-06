import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const ContactUs = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#071116] min-h-screen text-white pt-[120px]">
      <Navbar />

      <section className="relative w-full max-w-[1500px] mx-auto px-[20px] md:px-[60px] py-[60px] md:py-[100px]">
        
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-[50px] lg:gap-[80px]">
          
          {/* Left Side - Contact Info */}
          <div className="flex flex-col w-full lg:w-[45%]">
            
            {/* Eyebrow */}
            <span className="font-barlow font-bold tracking-[0.15em] uppercase text-[#F97818] mb-2 text-[14px] md:text-[16px]">
              {t('contact_eyebrow_sub') || "CONNECT WITH US"}
            </span>
            
            {/* Main Title */}
            <h2 className="font-barlow font-black uppercase text-[50px] md:text-[75px] leading-[0.85] tracking-[-0.02em] mb-12">
              <span className="block text-white">CONTACT</span>
              <span className="block text-[#F97818]">INFORMATION</span>
            </h2>

            {/* Info Blocks */}
            <div className="flex flex-col gap-10">
              
              {/* Address */}
              <div>
                <h4 className="font-barlow font-bold text-[#F97818] tracking-widest text-[15px] mb-4">ADDRESS</h4>
                <div className="font-inter text-white/90 text-[15px] leading-[1.6] flex flex-col gap-1">
                  <span>XP83+8CW Al Madam</span>
                  <span>Dubai-Hatta Rd - Sharjah</span>
                  <span>United Arab Emirates</span>
                </div>
              </div>

              {/* Phone */}
              <div>
                <h4 className="font-barlow font-bold text-[#F97818] tracking-widest text-[15px] mb-4">PHONE / WHATSAPP</h4>
                <div className="font-inter text-white/90 text-[15px] leading-[1.6]">
                  <a href="https://wa.me/971504799258" target="_blank" rel="noopener noreferrer" className="hover:text-[#F97818] transition-colors">
                    +971 50 479 9258
                  </a>
                </div>
              </div>

              {/* Email */}
              <div>
                <h4 className="font-barlow font-bold text-[#F97818] tracking-widest text-[15px] mb-4">EMAIL</h4>
                <div className="font-inter text-white/90 text-[15px] leading-[1.6]">
                  <a href="mailto:info@endurobikedubai.com" className="hover:text-[#F97818] transition-colors">
                    info@endurobikedubai.com
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div>
                <h4 className="font-barlow font-bold text-[#F97818] tracking-widest text-[15px] mb-4">OPERATING HOURS</h4>
                <div className="font-inter text-white/90 text-[15px] leading-[1.6] flex flex-col gap-1">
                  <span>Monday - Sunday</span>
                  <span>6:00 AM - 8:00 PM</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="w-full lg:w-[55%] h-[500px] lg:h-auto min-h-[500px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14467.57659570198!2d55.77259419999999!3d24.970221399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5a9dc57e53f19%3A0xe54326f18f1a4e14!2sSpeed%20Desert%20Adventure%20-%20Buggy%2C%20Quad%20%26%20Safari%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '4px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Enduro Bike Dubai Location"
              className="filter grayscale-[20%] contrast-125 rounded-md"
            ></iframe>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
