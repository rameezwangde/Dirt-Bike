import React from 'react';
import { motion } from 'framer-motion';
import { Bike, ShieldCheck, Trophy, Mountain, Tag, Route } from 'lucide-react';

const benefits = [
  {
    title: "Tailored for All Outdoor Adventurers",
    description: "Perfect experiences for solo riders, friends, families, and groups.",
    icon: Bike
  },
  {
    title: "Exceptional Service and Unbeatable Price",
    description: "Premium experiences without the premium price tag.",
    icon: ShieldCheck
  },
  {
    title: "World's Leading Dune Buggy Tour Provider",
    description: "Trusted by adventurers from around the globe.",
    icon: Trophy
  },
  {
    title: "Unparalleled 4x4 Desert Safari Experience",
    description: "Explore vast golden dunes with expert guides.",
    icon: Mountain
  },
  {
    title: "Full-day Buggy Riding at an Affordable Price",
    description: "Get the most adventure for your money.",
    icon: Tag
  },
  {
    title: "Unique Routes, Unlimited Drinks, Comfortable Transportation",
    description: "Everything you need for a hassle-free, unforgettable journey.",
    icon: Route
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 25 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const WhyChooseUs = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F4EE] pt-[90px] px-[24px] md:px-[60px] pb-[105px] min-h-[820px]">
      
      {/* Subtle Background Contours */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.045] pointer-events-none mix-blend-overlay">
         <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-black fill-none stroke-[0.2]">
            <path d="M0,20 Q20,30 40,10 T80,30 T100,10" />
            <path d="M0,40 Q20,50 40,30 T80,50 T100,30" />
            <path d="M0,60 Q20,70 40,50 T80,70 T100,50" />
            <path d="M0,80 Q20,90 40,70 T80,90 T100,70" />
         </svg>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center w-full"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-[18px]">
            <span className="font-inter text-[12px] font-bold tracking-[0.32em] uppercase text-[#11161A]">
              WHY CHOOSE US
            </span>
            <div className="w-[70px] h-[1px] bg-[#F97818]"></div>
          </div>

          {/* Main Heading */}
          <h2 className="font-barlow font-black text-center leading-[0.95] tracking-[-0.02em] mt-[20px] text-[clamp(48px,4.2vw,80px)]">
            <span className="text-[#11161A]">Why Choose </span>
            <span className="text-[#F97818]">Enduro Bike </span>
            <span className="text-[#11161A]">Dubai?</span>
          </h2>

          {/* Supporting Copy */}
          <p className="font-inter text-[17px] font-normal leading-[1.55] text-[#56534F] text-center max-w-[720px] mt-[18px]">
            More than just a ride — we create once-in-a-lifetime desert experiences with unmatched service, safety, and adventure.
          </p>
        </motion.div>

        {/* Main Three-Zone Composition */}
        <div className="relative w-full mt-[50px] min-h-[500px] flex flex-col xl:flex-row xl:justify-center">
          
          {/* LEFT: Dirt Bike Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="xl:absolute xl:left-[-70px] xl:bottom-0 relative self-center mb-10 xl:mb-0 w-[90%] max-w-[500px] xl:w-[560px] h-auto xl:h-[560px] z-10"
          >
            {/* Using a clip-path as a fallback for the brush edge if the image is a plain rectangle. 
                Ideally, the PNG itself has the rough edge. */}
            <div className="w-full h-full relative" style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)' }}>
              <img 
                src="/images/why-choose-dirt-bike.png" 
                alt="Dirt Bike Action" 
                className="w-full h-full object-cover transform rotate-[5deg] scale-110" 
                onError={(e) => {
                  // Fallback if image doesn't exist to prevent broken UI
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="hidden absolute inset-0 bg-[#11161A]/10 border-[4px] border-[#F97818] border-dashed rounded-[40px] rotate-[5deg]">
                 {/* Fallback box */}
              </div>
            </div>
            
            {/* Orange Lower Brush Stroke (decorative) */}
            <svg viewBox="0 0 200 40" className="absolute -bottom-4 right-10 w-[150px] opacity-80" preserveAspectRatio="none">
               <path d="M10,20 Q50,30 100,15 T190,25" stroke="#F97818" strokeWidth="6" fill="none" strokeLinecap="round" style={{ filter: 'url(#rough)' }}/>
               <defs>
                 <filter id="rough"><feTurbulence type="fractalNoise" baseFrequency="0.2" numOctaves="2" result="noise" /><feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" /></filter>
               </defs>
            </svg>
          </motion.div>

          {/* CENTER: Benefits */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-[25px] w-full xl:w-[650px] relative z-20 xl:ml-[150px] 2xl:ml-[250px] pt-[5px]"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="grid grid-cols-[70px_1fr] gap-[20px] items-center group cursor-default"
              >
                <div className="w-[62px] h-[62px] rounded-full bg-white/70 shadow-[0_5px_20px_rgba(20,15,10,0.035)] flex items-center justify-center transition-transform duration-250 group-hover:scale-[1.05]">
                  <benefit.icon className="text-[#F97818] transition-transform duration-250 group-hover:rotate-2" size={32} strokeWidth={1.9} />
                </div>
                <div className="flex flex-col">
                  <span className="font-barlow font-bold text-[22px] md:text-[24px] leading-[1.05] text-[#11161A] transition-colors duration-250 group-hover:text-[#F97818]">
                    {benefit.title}
                  </span>
                  <span className="font-inter text-[14px] leading-[1.45] text-[#65615C] mt-[5px]">
                    {benefit.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: Editorial Area */}
          <div className="hidden lg:flex flex-col xl:absolute xl:right-[-30px] xl:top-[50px] z-10 w-[300px] items-end mt-16 xl:mt-0">
            
            <motion.div 
              initial={{ opacity: 0, rotate: -8 }}
              whileInView={{ opacity: 1, rotate: -4 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-end mr-10 relative"
            >
              <span className="font-marker text-[#F97818] text-[42px] leading-[0.95]">
                MORE<br/>THAN
              </span>
              <span className="font-marker text-[#11161A] text-[42px] leading-[0.95] relative">
                JUST A RIDE
                <svg className="absolute -bottom-3 left-0 w-[120%] h-[10px]" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,8" stroke="#F97818" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              
              <svg width="40" height="60" viewBox="0 0 50 80" className="absolute -left-10 bottom-[-40px] stroke-[#11161A] fill-none stroke-[2]">
                 <path d="M40,10 Q10,40 20,70 M10,60 L20,70 L30,60" />
              </svg>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 5 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-[140px] h-[140px] mt-16 rounded-full border-2 border-[#11161A] flex flex-col items-center justify-center p-2 mr-16 bg-[#F7F4EE]/50 backdrop-blur-sm"
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow" style={{ animationDuration: '20s' }}>
                <path id="curve" d="M 50 10 A 40 40 0 1 1 49.9 10" fill="transparent" />
                <text className="font-barlow font-bold text-[13px] tracking-[0.1em]" fill="#11161A">
                  <textPath href="#curve" startOffset="5%">
                    ENDURO BIKE DUBAI • DESERT ADVENTURES •
                  </textPath>
                </text>
              </svg>
              
              <Mountain size={36} className="text-[#11161A] mt-2 mb-1" strokeWidth={1.5} />
              <span className="font-barlow font-bold text-[12px] text-[#11161A] mt-1 tracking-widest">
                EST. 2018
              </span>
              
              {/* Postal wave lines */}
              <svg width="60" height="40" viewBox="0 0 60 40" className="absolute -right-[60px] top-1/2 -translate-y-1/2 stroke-[#F97818] fill-none stroke-[1.5]">
                 <path d="M0,10 Q15,0 30,10 T60,10 M0,20 Q15,10 30,20 T60,20 M0,30 Q15,20 30,30 T60,30" />
              </svg>
            </motion.div>
          </div>
          
        </div>

      </div>

      {/* RIGHT: Dubai Skyline Background */}
      <div className="absolute right-[-30px] bottom-[10px] w-[500px] opacity-[0.12] z-0 pointer-events-none hidden md:block" style={{ maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)' }}>
        <img src="/images/dubai-desert-silhouette.png" alt="" className="w-full h-auto" />
      </div>

      {/* Decorative Bottom Line (per reference) */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#F97818]" />
      
    </section>
  );
};

export default WhyChooseUs;
