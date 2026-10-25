import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO_DATA = {
  '/': {
    title: 'Dirt Bike Dubai | #1 Enduro Desert Tours & Motocross Rental',
    description: 'Experience the ultimate Dirt Bike Dubai adventure! Premium KTM & Husqvarna desert enduro tours, buggy rentals, and quad biking across Al Badayer & Big Red dunes. Book now!',
    keywords: 'dirt bike dubai, enduro dubai, motocross rental dubai, desert dirt bike rental, ktm rental dubai, desert safari dubai',
    canonical: 'https://endurobikedubai.com/'
  },
  '/dirt-bike-dubai': {
    title: 'Dirt Bike Tours Dubai | KTM & Husqvarna Enduro Desert Riding',
    description: 'Ride high-performance KTM & Husqvarna dirt bikes in Dubai deserts. Beginner to expert guided motocross tours with full protective gear and pro guides included.',
    keywords: 'dirt bike tours dubai, enduro bike tour dubai, ktm desert rental, motocross riding dubai, al badayer dirt bike',
    canonical: 'https://endurobikedubai.com/dirt-bike-dubai'
  },
  '/buggy-rental-dubai': {
    title: 'Dune Buggy Rental Dubai | Can-Am Maverick Desert Buggy Tours',
    description: 'Rent powerful Can-Am Maverick dune buggies in Dubai. Self-drive desert buggy safari adventures across massive red sand dunes with expert guides.',
    keywords: 'dune buggy rental dubai, can am maverick dubai, desert buggy tour, buggy rental dubai, off road buggy dubai',
    canonical: 'https://endurobikedubai.com/buggy-rental-dubai'
  },
  '/quad-bike-dubai': {
    title: 'Quad Bike Dubai | ATV Rental & Desert Quad Biking Tours',
    description: 'Experience exhilarating ATV quad bike tours in Dubai. High-powered quad bikes for beginners and adrenaline lovers across open desert terrain.',
    keywords: 'quad bike dubai, atv rental dubai, desert quad biking, four wheeler dubai, al madam quad bike',
    canonical: 'https://endurobikedubai.com/quad-bike-dubai'
  },
  '/desert-safari-dubai': {
    title: 'Desert Safari Dubai | Dune Bashing, Camel Ride & BBQ Dinner',
    description: 'The top-rated desert safari in Dubai: thrilling 4x4 dune bashing, sunset photography, sandboarding, camel rides, and live entertainment BBQ dinner.',
    keywords: 'desert safari dubai, evening desert safari, vip desert safari dubai, dune bashing dubai, desert safari package',
    canonical: 'https://endurobikedubai.com/desert-safari-dubai'
  },
  '/packages': {
    title: 'Desert Adventure Packages & Prices | Dirt Bike, Buggy & Safari Dubai',
    description: 'Compare all dirt bike, dune buggy, quad biking, and desert safari tour packages in Dubai. Best rates, group discounts, and custom adventure packages.',
    keywords: 'dirt bike packages dubai, desert buggy prices, quad bike rates dubai, desert safari deals',
    canonical: 'https://endurobikedubai.com/packages'
  },
  '/about': {
    title: 'About Enduro Bike Dubai | Leading UAE Off-Road Desert Adventure Team',
    description: 'Learn about Enduro Bike Dubai. Over 10+ years offering premium dirt bike rentals, dune buggies, top-tier safety gear, and certified guides across the UAE deserts.',
    keywords: 'about enduro bike dubai, desert adventure company dubai, motocross guides uae',
    canonical: 'https://endurobikedubai.com/about'
  },
  '/contact': {
    title: 'Contact Us | Enduro & Dirt Bike Rental Dubai | WhatsApp & Location',
    description: 'Contact Enduro Bike Dubai for instant bookings, inquiries, and custom packages. Located at XP83+8CW Al Madam, Dubai-Hatta Rd. Call or WhatsApp +971 54 446 4649.',
    keywords: 'contact dirt bike dubai, enduro dubai phone number, desert adventure location dubai',
    canonical: 'https://endurobikedubai.com/contact'
  },
  '/terms': {
    title: 'Terms & Conditions | Enduro Bike Dubai Desert Tours',
    description: 'Read the Terms and Conditions for Enduro Bike Dubai. Information on bookings, cancellations, safety guidelines, equipment, and off-road desert experiences.',
    keywords: 'terms and conditions, enduro bike dubai terms, desert safari booking policy, cancellation terms',
    canonical: 'https://endurobikedubai.com/terms'
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions | Enduro Bike Dubai Desert Tours',
    description: 'Read the Terms and Conditions for Enduro Bike Dubai. Information on bookings, cancellations, safety guidelines, equipment, and off-road desert experiences.',
    keywords: 'terms and conditions, enduro bike dubai terms, desert safari booking policy, cancellation terms',
    canonical: 'https://endurobikedubai.com/terms-and-conditions'
  },
  '/privacy': {
    title: 'Privacy Policy | Enduro Bike Dubai Desert Tours',
    description: 'Privacy Policy for Enduro Bike Dubai. Learn how we collect, protect, and handle your personal and booking information in accordance with UAE data protection regulations.',
    keywords: 'privacy policy, enduro bike dubai privacy, data protection, personal information uae',
    canonical: 'https://endurobikedubai.com/privacy'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Enduro Bike Dubai Desert Tours',
    description: 'Privacy Policy for Enduro Bike Dubai. Learn how we collect, protect, and handle your personal and booking information in accordance with UAE data protection regulations.',
    keywords: 'privacy policy, enduro bike dubai privacy, data protection, personal information uae',
    canonical: 'https://endurobikedubai.com/privacy-policy'
  }
};

const SEO = () => {
  const location = useLocation();

  useEffect(() => {
    const data = SEO_DATA[location.pathname] || SEO_DATA['/'];

    // Update Title
    document.title = data.title;

    // Helper to update or create meta tags
    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update standard meta
    setMeta('description', data.description);
    setMeta('keywords', data.keywords);

    // Update Open Graph (Facebook, WhatsApp, LinkedIn)
    setMeta('og:title', data.title, true);
    setMeta('og:description', data.description, true);
    setMeta('og:url', data.canonical, true);

    // Update Twitter Cards
    setMeta('twitter:title', data.title);
    setMeta('twitter:description', data.description);

    // Update Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', data.canonical);
  }, [location.pathname]);

  return null;
};

export default SEO;
