import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Car, Mountain, Bike, Plane, Sunset } from 'lucide-react';
import { Link } from 'react-router-dom';

const experiences = [
  {
    id: 1,
    title: "Desert Safari Online Booking",
    category: "4X4",
    icon: Car,
    image: "/images/safari-4x4.jpg",
    fallbackColor: "#2A2520",
    description: "Explore our Desert Safari Online Booking with Enduro Bike Dubai. Experience thrilling routes across Dubai's spectacular desert landscapes.",
    cta: "EXPLORE SAFARI TOURS",
    link: "/tours"
  },
  {
    id: 2,
    title: "Dune Buggy Dubai",
    category: "BUGGY",
    icon: Car,
    image: "/images/dune-buggy.jpg",
    fallbackColor: "#332315",
    description: "Get ready for an awesome off-road ride with our Dune Buggy Dubai experience. Built for adventure, comfort, and unforgettable desert exploration.",
    cta: "EXPLORE BUGGY TOURS",
    link: "/tours"
  },
  {
    id: 3,
    title: "Dirt Bike Dubai",
    category: "BIKE",
    icon: Bike,
    image: "/images/dirt-bike.jpg",
    fallbackColor: "#2A1810",
    description: "Ready for a thrilling adventure? Ride through Dubai's wild desert terrain, discover unique routes, and experience true off-road freedom.",
    cta: "EXPLORE BIKE TOURS",
    link: "/tours"
  },
  {
    id: 4,
    title: "Quad Biking Dubai",
    category: "QUAD",
    icon: Car,
    image: "/images/quad-bike.jpg",
    fallbackColor: "#3C281B",
    description: "Feel the thrill with Quad Biking Dubai and our powerful quad bikes. Follow experienced guides through challenging dunes and tracks for an exhilarating desert journey.",
    cta: "EXPLORE QUAD TOURS",
    link: "/tours"
  },
  {
    id: 5,
    title: "Desert Safari Dubai",
    category: "DESERT",
    icon: Mountain,
    image: "/images/desert-sunset.jpg",
    fallbackColor: "#2A2320",
    description: "Immerse yourself in the beauty of the Arabian desert. From peaceful morning adventures to magical evening experiences, discover unforgettable moments in the heart of Dubai.",
    cta: "EXPLORE DESERT SAFARI",
    link: "/safari"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const ExperiencesSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F4EE] pt-[90px] px-[20px] md:px-[60px] pb-[110px]">
      
      {/* Subtle Background Contours */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.04] pointer-events-none mix-blend-overlay">
         <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-black fill-none stroke-[0.2]">
            <path d="M10,0 Q30,50 10,100 M30,0 Q50,50 30,100 M90,0 Q70,50 90,100" />
         </svg>
      </div>

      {/* Decorative Brush Marks */}
      <svg viewBox="0 0 100 200" className="absolute left-[-20px] top-[20%] w-[100px] h-[300px] opacity-60 pointer-events-none" preserveAspectRatio="none">
        <path d="M-20,10 Q40,100 -20,190" stroke="#F97818" strokeWidth="8" fill="none" strokeLinecap="round" style={{ filter: 'url(#roughEdge)' }}/>
      </svg>
      
      <svg viewBox="0 0 100 200" className="absolute right-[-20px] bottom-[10%] w-[100px] h-[300px] opacity-60 pointer-events-none" preserveAspectRatio="none">
        <path d="M120,10 Q60,100 120,190" stroke="#F97818" strokeWidth="12" fill="none" strokeLinecap="round" style={{ filter: 'url(#roughEdge)' }}/>
        <defs>
          <filter id="roughEdge"><feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="3" result="noise" /><feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" /></filter>
        </defs>
      </svg>

      <div className="max-w-[1500px] mx-auto relative z-10 flex flex-col">
        
        {/* Header Area */}
        <div className="flex flex-col items-center relative w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-[18px]"
          >
            <span className="font-inter text-[11px] font-bold tracking-[0.32em] uppercase text-[#11161A]">
              OUR EXPERIENCES
            </span>
            <div className="w-[80px] h-[1px] bg-[#F97818]"></div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-barlow font-black text-center leading-[0.95] tracking-[-0.025em] mt-[18px] text-[clamp(50px,4.4vw,82px)]"
          >
            <span className="text-[#11161A]">Unforgettable </span>
            <span className="text-[#F97818]">Desert Adventures</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-[14px] md:text-[16px] font-normal leading-[1.5] text-[#66615C] text-center max-w-[720px] mt-[18px]"
          >
            Discover a range of thrilling desert experiences, designed for adventure seekers of all levels. From dune buggies to dirt bikes, we have the perfect ride for you.
          </motion.p>

          {/* Upper-Right Editorial Detail */}
          <div className="hidden xl:flex flex-col items-start absolute top-[55px] right-[50px] pointer-events-none transform -rotate-[5deg]">
            <Mountain className="text-[#11161A] mb-1 opacity-70" size={32} strokeWidth={1} />
            <span className="font-marker text-[#11161A] text-[27px] leading-[0.95]">EXPLORE</span>
            <span className="font-marker text-[#11161A] text-[27px] leading-[0.95]">RIDE</span>
            <div className="relative">
              <span className="font-marker text-[#11161A] text-[27px] leading-[0.95]">EXPERIENCE</span>
              <svg className="absolute -bottom-2 left-0 w-[110%] h-[6px]" preserveAspectRatio="none">
                <path d="M0,3 Q50,0 100,5" stroke="#F97818" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Cards Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-[50px] flex flex-col md:grid md:grid-cols-2 xl:grid-cols-6 gap-[16px]"
        >
          {experiences.map((exp, index) => {
            
            // Layout logic based on grid
            let gridClass = "w-full ";
            
            if (index < 3) {
              // First row: 3 equal cards on desktop
              gridClass += "xl:col-span-2 ";
            } else {
              // Second row: 2 wider cards on desktop
              gridClass += "xl:col-span-3 ";
            }

            // Tablet specific adjustments
            if (index === 4) {
              gridClass += "md:col-span-2 xl:col-span-3 ";
            } else {
              gridClass += "md:col-span-1 ";
            }

            // Height logic
            const heightClass = index < 3 ? "h-[430px] xl:h-[390px]" : "h-[430px] xl:h-[350px]";

            return (
              <motion.div 
                key={exp.id}
                variants={cardVariants}
                className={`${gridClass} ${heightClass} rounded-[8px] overflow-hidden relative group block`}
              >
                <Link to={exp.link} className="absolute inset-0 z-20" aria-label={exp.title}></Link>
                
                {/* Background Image Container */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[700ms] cubic-bezier-ease group-hover:scale-[1.05]"
                  style={{ 
                    backgroundColor: exp.fallbackColor,
                    backgroundImage: `url('${exp.image}')`
                  }}
                />

                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 w-full h-full transition-opacity duration-300 pointer-events-none group-hover:opacity-95"
                  style={{
                    background: 'linear-gradient(to top, rgba(5,14,19,0.97) 0%, rgba(5,14,19,0.82) 30%, rgba(5,14,19,0.30) 62%, rgba(5,14,19,0.05) 100%)'
                  }}
                />

                {/* Category Badge */}
                <div className="absolute top-[18px] right-[18px] h-[34px] px-[14px] rounded-[20px] bg-[#11161A]/60 backdrop-blur-[6px] border border-white/12 flex items-center gap-[7px] z-10">
                  <exp.icon size={13} strokeWidth={2.5} className="text-white" />
                  <span className="font-barlow text-[11px] font-bold tracking-[0.06em] text-white uppercase mt-0.5">
                    {exp.category}
                  </span>
                </div>

                {/* Content Area */}
                <div className="absolute left-[28px] right-[28px] bottom-[24px] z-10 flex flex-col items-start transition-transform duration-300 ease-out group-hover:translate-y-[-4px]">
                  
                  <h3 className="font-barlow font-extrabold text-[28px] md:text-[34px] leading-[1] text-white mb-[10px]">
                    {exp.title}
                  </h3>
                  
                  <p className="font-inter text-[14px] leading-[1.4] text-white/90 max-w-[90%] line-clamp-3">
                    {exp.description}
                  </p>

                  <div className="flex items-center gap-[12px] mt-[17px]">
                    <div className="w-[3px] h-[26px] bg-[#F97818]" />
                    <span className="font-inter text-[13px] font-extrabold tracking-[0.025em] text-white uppercase transition-colors duration-250 group-hover:text-[#F97818]">
                      {exp.cta}
                    </span>
                    <ArrowRight 
                      className="text-[#F97818] transition-transform duration-250 group-hover:translate-x-[6px]" 
                      size={22} 
                      strokeWidth={2.5} 
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default ExperiencesSection;
