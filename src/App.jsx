import React from 'react';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ToursSection from './components/ToursSection';
import SafariSection from './components/SafariSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <ToursSection />
      <SafariSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
