export const packageCategories = [
  { id: 'all', name: 'ALL TOURS', countKey: 'all' },
  { id: 'buggy', name: 'BUGGY TOURS', countKey: 'buggy' },
  { id: 'dirt-bike', name: 'DIRT BIKE TOURS', countKey: 'dirt-bike' },
  { id: 'quad-bike', name: 'QUAD BIKE TOURS', countKey: 'quad-bike' },
  { id: 'safari', name: 'DESERT SAFARI', countKey: 'safari' }
];

export const allPackages = [
  // --- BUGGY TOURS ---
  {
    id: 'buggy-1',
    category: 'buggy',
    categoryLabel: 'BUGGY TOURS',
    title: 'CAN-AM MAVERICK XR (245 HP STAGE 4) (2 SEATER)',
    price: 1000,
    priceRates: '1 hr: 1000 AED | 2 hrs: 1800 AED',
    duration: '1-2 Hours',
    seats: '2 Seaters',
    transfer: '300 AED',
    highlight: 'FULL KEY (NO LOCKED ENGINE, ONLY OPEN KEYS)',
    description: "Dominate Dubai's red dunes with the 245 HP Stage 4 Can-Am Maverick XR, 1 hr: 1000 AED | 2 hrs: 1800 AED.",
    image: '/images/maverick-xr.jpeg',
    specs: {
      horsepower: '245 HP Stage 4',
      engine: 'Rotax ACE 900cc Turbo RR',
      transmission: 'Quick Response System X CVT',
      suspension: 'FOX 3.0 PODIUM RC2 Piggyback',
      terrain: 'High Red Dunes & Desert Basins'
    },
    inclusions: [
      'Full open key power (No governor/engine lock)',
      'Professional certified desert escort & guide',
      'Full safety gear: Helmets, goggles & gloves',
      'Complimentary chilled soft drinks & water',
      'Free sandboarding session at high dunes'
    ]
  },
  {
    id: 'buggy-2',
    category: 'buggy',
    categoryLabel: 'BUGGY TOURS',
    title: 'CAN-AM MAVERICK XR (245 HP STAGE 4) (MAX FOR 4 SEATER)',
    price: 1000,
    priceRates: '1 hr: 1000 AED | 2 hrs: 1800 AED',
    duration: '1-2 Hours',
    seats: '4 Seaters',
    transfer: '300 AED',
    highlight: 'FULL KEY (NO LOCKED ENGINE, ONLY OPEN KEYS)',
    description: "Dominate Dubai's red dunes with the 245 HP Stage 4 Can-Am Maverick XR, 1 hr: 1000 AED | 2 hrs: 1800 AED.",
    image: '/images/x3.jpeg',
    specs: {
      horsepower: '245 HP Stage 4',
      engine: 'Rotax ACE 900cc Turbo RR',
      transmission: 'High-Performance CVT',
      suspension: 'FOX 3.0 Long-Travel Suspension',
      terrain: 'Deep Desert & Big Red Dunes'
    },
    inclusions: [
      'Accommodates up to 4 passengers with full harnesses',
      'Full open key power (No engine limiters)',
      'Certified lead pilot guide throughout tour',
      'Safety equipment provided for all passengers',
      'Unlimited hydration and chilled refreshments'
    ]
  },
  {
    id: 'buggy-3',
    category: 'buggy',
    categoryLabel: 'BUGGY TOURS',
    title: 'POLARIS RZR 1000 CC (145 HP) (2 SEATER)',
    price: 400,
    priceRates: '1 hr: 400 AED | 2 hrs: 700 AED',
    duration: '1-2 Hours',
    seats: '2 Seaters',
    transfer: '300 AED',
    highlight: 'FULL KEY (NO LOCKED ENGINE, ONLY OPEN KEYS)',
    description: 'Embark on an exciting desert journey with the 145 HP Polaris RZR 1000 CC, 1 hr: 400 AED | 2 hrs: 700 AED.',
    image: '/images/polarize-1000.jpeg',
    imagePosition: 'object-[center_72%]',
    specs: {
      horsepower: '145 HP ProStar 1000',
      engine: '999cc 4-Stroke DOHC Twin Cylinder',
      transmission: 'Automatic PVT P/R/N/L/H',
      suspension: 'Walker Evans Needle Shocks',
      terrain: 'Rolling Red Sand Dunes'
    },
    inclusions: [
      'Unrestricted open key ride experience',
      'Experienced lead guide with safety backup',
      'Certified DOT-approved helmet & protective eye gear',
      'Desert photo opportunities at scenic dune crests',
      'Complimentary chilled water and snacks'
    ]
  },
  {
    id: 'buggy-4',
    category: 'buggy',
    categoryLabel: 'BUGGY TOURS',
    title: 'POLARIS RZR 2 SEATER (EARLY MORNING SPECIAL)',
    price: 850,
    priceRates: '1 hr: 850 AED',
    duration: '1-Hour',
    seats: '2 Seaters',
    transfer: '300 AED',
    highlight: 'SUNRISE SPECIAL · FRESH UNTOUCHED DUNES',
    description: 'Experience Dubai dunes at dawn with cooler temperatures and magical sunrise photo stops.',
    image: '/images/polaris.jpeg',
    imagePosition: 'object-[center_68%]',
    specs: {
      horsepower: '110 HP ProStar',
      engine: '1000cc Dual Cylinder EFI',
      transmission: 'Automatic Dual-Range',
      suspension: 'Independent Dual A-Arm',
      terrain: 'Al Badayer / Big Red Sunrise Route'
    },
    inclusions: [
      'Early morning slot for the best temperature & lighting',
      'Full safety briefing and driving guidance',
      'All safety gear: Helmets, dust masks, goggles',
      'Sunrise stop at highest dune summit',
      'Chilled refreshments included'
    ]
  },
  {
    id: 'buggy-5',
    category: 'buggy',
    categoryLabel: 'BUGGY TOURS',
    title: 'POLARIS RZR TURBO S (2 SEATER)',
    price: 1250,
    priceRates: '2 hrs: 1250 AED',
    duration: '2-Hour',
    seats: '2 Seaters',
    transfer: '300 AED',
    highlight: 'FULL KEY (NO LOCKED ENGINE, ONLY OPEN KEYS)',
    description: 'Conquer the most demanding desert ridges with top-tier turbo torque and 72-inch wide track stability.',
    image: '/images/polaris-3.jpeg',
    imagePosition: 'object-[center_65%]',
    specs: {
      horsepower: '168 HP Turbo',
      engine: 'ProStar Turbo HO',
      transmission: 'Heavy Duty Automatic PVT',
      suspension: 'FOX 3.0 Live Valve Dynamic Suspension',
      terrain: 'Razor Dunes & Steep Sand Slopes'
    },
    inclusions: [
      'Unrestricted full key acceleration',
      'High-speed dune cruising behind pro marshal',
      'Complete rider safety suit & gear',
      'Sandboarding gear available upon request',
      'Cold water, isotonic drinks & energy snacks'
    ]
  },
  {
    id: 'buggy-6',
    category: 'buggy',
    categoryLabel: 'BUGGY TOURS',
    title: 'SINGLE SEATER POLARIS RS1 (SOLO RACER)',
    price: 750,
    priceRates: '1 hr: 750 AED | 2 hrs: 1250 AED',
    duration: '1-2 Hours',
    seats: '1 Seater',
    transfer: '300 AED',
    highlight: 'FULL KEY (NO LOCKED ENGINE, ONLY OPEN KEYS)',
    description: 'The ultimate solo desert kart with central-cockpit agility and razor-sharp steering.',
    image: '/images/polaris-2.jpeg',
    imagePosition: 'object-[center_70%]',
    specs: {
      horsepower: '110 HP ProStar HO',
      engine: 'Single Seater Center Cockpit',
      transmission: 'Automatic PVT',
      suspension: 'Walker Evans Velocity Shocks',
      terrain: 'Technical Sand Bowls & High Peaks'
    },
    inclusions: [
      'True rally driver experience (Center seat position)',
      'No speed governor restrictions',
      'Full gear: Pro helmet, goggles, gloves',
      'Guided route tailored to your driving skills',
      'Chilled refreshments'
    ]
  },
  {
    id: 'buggy-7',
    category: 'buggy',
    categoryLabel: 'BUGGY TOURS',
    title: 'POLARIS RZR FOSSIL ROCK SAFARI TOUR',
    price: 1800,
    priceRates: '3 hrs: 1800 AED',
    duration: '3-Hour',
    seats: '2 Seaters',
    transfer: 'Included',
    highlight: 'HISTORIC EXPEDITION · FOSSIL & CAMEL ROCK',
    description: 'A 3-hour legendary desert safari from Al Badayer across deep red dunes to ancient Fossil Rock.',
    image: '/images/buggy-rental-dubai-cover.jpg',
    imagePosition: 'object-[center_65%]',
    specs: {
      horsepower: '145 HP ProStar',
      engine: '1000cc Dual Cylinder',
      transmission: 'Automatic',
      suspension: 'Walker Evans Long Travel',
      terrain: 'Cross-Country Desert & Rock Formations'
    },
    inclusions: [
      '3-Hour extensive expedition to Fossil Rock',
      'Complimentary private hotel transfer (Dubai/Sharjah)',
      'Sandboarding and fossil discovery exploration',
      'Complimentary snacks, fruits & beverages',
      'Complete safety equipment & escort vehicle'
    ]
  },

  // --- DIRT BIKE TOURS ---
  {
    id: 'dirt-1',
    category: 'dirt-bike',
    categoryLabel: 'DIRT BIKE TOURS',
    title: 'KTM 450CC DIRT BIKE - 1 HOUR TOUR',
    price: 400,
    priceRates: '1 hr: 400 AED',
    duration: '1-Hour',
    seats: '1 Rider',
    transfer: 'Available',
    highlight: 'FULL PRO GEAR · UNLIMITED FUEL INCLUDED',
    description: "Feel the adrenaline on a competition-ready KTM 450cc dirt bike across Dubai's sweeping sand dunes.",
    image: '/images/ktm-450-1hr.jpeg',
    specs: {
      horsepower: '63 HP Motocross Power',
      engine: '450cc 4-Stroke SOHC Single',
      transmission: '5-Speed Manual Clutch',
      suspension: 'WP XACT Air Forks',
      terrain: 'Desert Motocross Dunes'
    },
    inclusions: [
      'KTM 450 SX-F / EXC-F Pro Motocross Bike',
      'Alpinestars / Fox body armor, helmet, boots & gloves',
      'Desert riding guide & coaching for all levels',
      'Full tank of high-octane fuel',
      'Hydration pack & cold bottled water'
    ]
  },
  {
    id: 'dirt-2',
    category: 'dirt-bike',
    categoryLabel: 'DIRT BIKE TOURS',
    title: 'KTM 450CC DIRT BIKE - 2 HOUR EXPEDITION',
    price: 649,
    priceRates: '2 hrs: 649 AED',
    duration: '2-Hour',
    seats: '1 Rider',
    transfer: 'Available',
    highlight: 'BIG RED DUNES · ADVANCED TECHNIQUE DRILLS',
    description: 'Tackle the iconic Big Red dunes, learn sand berm drifting and climb steep desert slopes.',
    image: '/images/ktm-450-2hr.jpeg',
    specs: {
      horsepower: '63 HP Motocross Power',
      engine: '450cc Liquid-Cooled SOHC',
      transmission: '5-Speed Competition',
      suspension: 'WP XACT Fully Adjustable',
      terrain: 'High Red Sand Dunes & Bowls'
    },
    inclusions: [
      '2 Full hours of intense desert riding',
      'Pro coaching on sand balance and throttle management',
      'Complete protective body armor, boots & gear',
      'High-speed guided trails matching rider ability',
      'Hydration and energy snacks'
    ]
  },
  {
    id: 'dirt-3',
    category: 'dirt-bike',
    categoryLabel: 'DIRT BIKE TOURS',
    title: 'KTM 450CC DIRT BIKE - 3 HOUR ENDURO TOUR',
    price: 799,
    priceRates: '3 hrs: 799 AED',
    duration: '3-Hour',
    seats: '1 Rider',
    transfer: 'Available',
    highlight: 'DEEP DESERT ENDURO · TECHNICAL DUNES',
    description: 'Extended backcountry desert trek testing your stamina through untouched dunes and rocky desert fringes.',
    image: '/images/ktm-450-3hr.jpeg',
    specs: {
      horsepower: '63 HP Enduro Setup',
      engine: '450cc High Performance',
      transmission: '5-Speed Manual',
      suspension: 'WP XACT Enduro Tuned',
      terrain: 'Enduro & Dune Cross-Country'
    },
    inclusions: [
      '3-Hour technical ride through remote desert paths',
      'Lead and sweep desert guide escorts',
      'Premium brand protective gear from head to toe',
      'Multiple scenic viewpoints with photo stops',
      'Energy refreshments and mineral water'
    ]
  },
  {
    id: 'dirt-4',
    category: 'dirt-bike',
    categoryLabel: 'DIRT BIKE TOURS',
    title: 'KTM 450CC DIRT BIKE - 4 HOUR (HALF-DAY)',
    price: 1000,
    priceRates: '4 hrs: 1000 AED',
    duration: '4-Hour',
    seats: '1 Rider',
    transfer: 'Included',
    highlight: 'HALF-DAY RALLY · FREE HOTEL TRANSFER',
    description: 'The ultimate half-day desert motocross immersion with custom rest stops and technical riding tips.',
    image: '/images/dirt-bike.jpg',
    specs: {
      horsepower: '63 HP Dakar Ready',
      engine: '450cc 4-Stroke',
      transmission: '5-Speed Heavy Duty',
      suspension: 'WP Suspension',
      terrain: 'Open Wilderness Desert'
    },
    inclusions: [
      'Complimentary hotel pickup & drop-off',
      '4 Hours of premium desert motocross freedom',
      'Full kit: Boots, knee guards, chest armor, goggles, helmet',
      'Fuel refills and technical trail backup team',
      'Snacks, electrolytes, and refreshments'
    ]
  },
  {
    id: 'dirt-5',
    category: 'dirt-bike',
    categoryLabel: 'DIRT BIKE TOURS',
    title: 'KTM 450CC - FULL DAY DESERT RALLY SAFARI',
    price: 1550,
    priceRates: '1 Day: 1550 AED',
    duration: '1-Day',
    seats: '1 Rider',
    transfer: 'Included',
    highlight: 'AUTHENTIC DAKAR EXPERIENCE · LUNCH INCLUDED',
    description: 'Spend an entire day living the Dakar dream navigating Dubai’s boundless ocean of golden sand.',
    image: '/images/dirt-bike-dubai-cover.jpg',
    specs: {
      horsepower: '63 HP Pro Rally',
      engine: '450cc Enduro Champion',
      transmission: 'Manual 5-Speed',
      suspension: 'Competition WP Set-Up',
      terrain: 'Full Desert Traverse'
    },
    inclusions: [
      'Full day trail riding with pro instructor',
      'Complimentary luxury private hotel transfers',
      'Gourmet lunch break & desert lounge rest',
      'Complete motocross kit & unlimited fuel',
      'GoPro action photos & video moments'
    ]
  },

  // --- QUAD BIKE TOURS ---
  {
    id: 'quad-1',
    category: 'quad-bike',
    categoryLabel: 'QUAD BIKE TOURS',
    title: '250CC - 350CC KYMCO QUAD (1 HOUR)',
    price: 350,
    priceRates: '1 hr: 350 AED',
    duration: '1-Hour',
    seats: '1 Rider',
    transfer: '300 AED',
    highlight: 'AUTOMATIC TRANSMISSION · BEGINNER FRIENDLY',
    description: 'Hop onto an automatic four-wheeler quad bike and drift across gentle rolling desert dunes with ease.',
    image: '/images/kimko-1.jpeg',
    specs: {
      engine: '300cc 4-Stroke Liquid Cooled',
      transmission: 'Automatic CVT (F-N-R)',
      drive: '2WD Sport Chain Drive',
      suspension: 'Double A-Arm Front / Swingarm Rear',
      terrain: 'Fenced Area & Open Dunes'
    },
    inclusions: [
      'Automatic easy-to-ride quad (No gears needed)',
      'Full protective helmet, goggles & gloves',
      'Desert guide leading safe routes',
      'Safety briefing & test ride before departure',
      'Complimentary chilled water'
    ]
  },
  {
    id: 'quad-2',
    category: 'quad-bike',
    categoryLabel: 'QUAD BIKE TOURS',
    title: '250CC - 350CC KYMCO QUAD (2 HOURS)',
    price: 550,
    priceRates: '2 hrs: 550 AED',
    duration: '2-Hour',
    seats: '1 Rider',
    transfer: '300 AED',
    highlight: 'OPEN DESERT TRAILS · HIGH DUNE CLIMB',
    description: 'Double the excitement with a 2-hour guided quad trek navigating bigger dunes and desert valleys.',
    image: '/images/kimko-2.jpeg',
    specs: {
      engine: '350cc High Output EFI',
      transmission: 'Fully Automatic CVT',
      drive: 'Sport ATV 2WD',
      suspension: 'High Clearance Gas Shocks',
      terrain: 'Open Desert & Sand Valleys'
    },
    inclusions: [
      '2 Hours of guided desert exploration',
      'Full protective gear supplied',
      'Photo break at panoramic dune crests',
      'Experienced escort guide with first-aid certification',
      'Chilled refreshments included'
    ]
  },
  {
    id: 'quad-3',
    category: 'quad-bike',
    categoryLabel: 'QUAD BIKE TOURS',
    title: '250CC - 350CC KYMCO QUAD (3 HOURS)',
    price: 750,
    priceRates: '3 hrs: 750 AED',
    duration: '3-Hour',
    seats: '1 Rider',
    transfer: '300 AED',
    highlight: 'SUNSET EXPEDITION · SANDBOARDING INCLUDED',
    description: 'Comprehensive 3-hour quad safari timed with sunset, offering breathtaking photo opportunities and sand slides.',
    image: '/images/kimko-3.jpeg',
    specs: {
      engine: '350cc Performance Quad',
      transmission: 'Automatic with Reverse',
      drive: 'Heavy-Duty 2WD',
      suspension: 'Dual A-Arm Suspension',
      terrain: 'Big Red Dunes & Desert Valleys'
    },
    inclusions: [
      '3-Hour deep desert quad biking journey',
      'Free sandboarding session during rest stop',
      'All protective equipment provided',
      'Sunset observation and picture session',
      'Cold bottled water and soft drinks'
    ]
  },
  {
    id: 'quad-4',
    category: 'quad-bike',
    categoryLabel: 'QUAD BIKE TOURS',
    title: 'YAMAHA RAPTOR 700CC (MANUAL BEAST)',
    price: 600,
    priceRates: '1 hr: 600 AED | 2 hrs: 1100 AED',
    duration: '1-Hour',
    seats: '1 Rider',
    transfer: '300 AED',
    highlight: '700CC MANUAL POWER · RACE TUNED',
    description: 'Pure performance with the aggressive Yamaha Raptor 700cc manual transmission for skilled ATV adrenaline junkies.',
    image: '/images/raptor-700.jpeg',
    specs: {
      engine: '686cc Liquid-Cooled SOHC 4-Valve',
      transmission: '5-Speed Manual with Reverse',
      drive: 'Heavy-Duty 2WD Chain Drive',
      suspension: 'Piggyback High/Low Speed Shocks',
      terrain: 'Steep Dunes & High Speed Sand Flats'
    },
    inclusions: [
      'High-performance 700cc Raptor with open power',
      'Racing helmet, goggles and safety gear',
      'Guided high-speed trail with experienced rider',
      'Unlimited fuel for session',
      'Cold beverages and water'
    ]
  },

  // --- DESERT SAFARI TOURS ---
  {
    id: 'safari-1',
    category: 'safari',
    categoryLabel: 'DESERT SAFARI',
    title: 'POLARIS 1000CC DUNE BUGGY SAFARI COMBO',
    price: 450,
    priceRates: 'Full Experience: 450 AED',
    duration: '4-6 Hours',
    seats: '2 Seaters',
    transfer: 'Included',
    highlight: 'BUGGY + DUNE BASHING + BBQ CAMP DINNER',
    description: 'The complete Dubai experience: 1 hour self-drive Polaris buggy plus 4x4 dune bashing, camel ride & BBQ buffet.',
    image: '/images/polarize-1000.jpeg',
    specs: {
      vehicle: 'Polaris RZR 1000cc + 4x4 Land Cruiser',
      duration: '4 to 6 Hours Total',
      camp: 'Traditional Bedouin Desert Camp',
      food: 'International BBQ Buffet Dinner (Veg & Non-Veg)',
      entertainment: 'Belly Dance, Tanoura & Fire Show'
    },
    inclusions: [
      'Self-drive 1-hour Polaris buggy session in open dunes',
      'Thrilling 4x4 dune bashing session with licensed safari driver',
      'Camel ride experience & sandboarding',
      'Full BBQ buffet dinner with vegetarian options',
      'Live cultural entertainment shows & henna painting',
      'Round-trip hotel pickup and drop-off included'
    ]
  },
  {
    id: 'safari-2',
    category: 'safari',
    categoryLabel: 'DESERT SAFARI',
    title: 'CAN-AM MAVERICK XR DUNE SAFARI VIP',
    price: 950,
    priceRates: 'VIP Experience: 950 AED',
    duration: '4-6 Hours',
    seats: '2 Seaters',
    transfer: 'Included',
    highlight: 'VIP CAMP SEATING · LIVE SHOWS & PRIVATE 4X4',
    description: 'Luxury VIP safari: 1 hour Can-Am Maverick XR ride, private desert transport, VIP table service & Arabian shows.',
    image: '/images/maverick-xr.jpeg',
    specs: {
      vehicle: 'Can-Am Maverick XR 245 HP + Luxury 4x4',
      duration: '4 to 6 Hours VIP',
      camp: 'VIP Lounge with Table Service',
      food: 'Premium 5-Star International BBQ Buffet',
      entertainment: 'Exclusive Stage View Entertainment'
    },
    inclusions: [
      '1 Hour behind the wheel of Can-Am Maverick XR (Open key)',
      'Private 4x4 round-trip transfer from your hotel or residence',
      'VIP table with dedicated service at desert camp',
      'Unlimited soft drinks, Arabic coffee (Gahwa) & fresh dates',
      'Camel ride, henna painting & falcon photography',
      'All safety gear & guide included'
    ]
  },
  {
    id: 'safari-3',
    category: 'safari',
    categoryLabel: 'DESERT SAFARI',
    title: 'EVENING DESERT SAFARI WITH QUAD BIKE COMBO',
    price: 300,
    priceRates: 'Combo Package: 300 AED',
    duration: '6 Hours',
    seats: '1 Quad / 4x4',
    transfer: 'Included',
    highlight: 'HOTEL PICKUP · QUAD RIDE · FIRE SHOW & DINNER',
    description: 'All-inclusive evening desert adventure with hotel pickup, quad bike ride, 4x4 dune bashing, camel trek and dinner show.',
    image: '/images/safari-adventure.jpg',
    specs: {
      vehicle: 'ATV Quad Bike + 4x4 Dune Cruiser',
      duration: '6 Hours (3:00 PM to 9:00 PM)',
      camp: 'Bedouin Oasis Camp',
      food: 'Live BBQ Buffet with Sweets & Salads',
      entertainment: 'Fire Show, Tanoura Dance & Arabic Music'
    },
    inclusions: [
      'Round-trip 4x4 pickup & drop-off from Dubai/Sharjah hotels',
      'Dedicated quad bike desert riding session',
      'High-energy dune bashing on Al Lahbab red dunes',
      'Sunset photography stop on high dunes',
      'Camel ride, sandboarding, BBQ dinner and cultural shows'
    ]
  }
];
