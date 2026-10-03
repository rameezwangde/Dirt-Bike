import React from 'react';
import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import WhyChooseUs from '../components/WhyChooseUs';
import ExperiencesSection from '../components/ExperiencesSection';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-[#F7F4EE]">
      <Navbar />
      <AboutHero />
      <WhyChooseUs />
      <ExperiencesSection />
      {/* You can add the rest of the About Us page content below here */}
      <Footer />
    </div>
  );
};

export default AboutUs;
