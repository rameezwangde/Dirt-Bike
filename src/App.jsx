import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Packages from './pages/Packages';
import ContactUs from './pages/ContactUs';
import DirtBike from './pages/DirtBike';
import BuggyRental from './pages/BuggyRental';
import DesertSafari from './pages/DesertSafari';
import QuadBike from './pages/QuadBike';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <>
      <SEO />
      <ScrollToTop />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dirt-bike-dubai" element={<DirtBike />} />
        <Route path="/buggy-rental-dubai" element={<BuggyRental />} />
        <Route path="/desert-safari-dubai" element={<DesertSafari />} />
        <Route path="/quad-bike-dubai" element={<QuadBike />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;
