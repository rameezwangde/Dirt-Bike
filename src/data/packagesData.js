export const packageCategories = [
  { id: 'all', name: 'ALL TOURS' },
  { id: 'dirt-bike', name: 'DIRT BIKES' },
  { id: 'can-am', name: 'CAN-AM BUGGIES' },
  { id: 'polaris', name: 'POLARIS RZR BUGGIES' },
  { id: 'quad-bike', name: 'QUAD BIKES' },
  { id: 'safari', name: 'DESERT SAFARI & PRIVATE TOURS' }
];

export const allPackages = [
  // ==========================================
  // 1ST: DIRT BIKES
  // ==========================================
  {
    id: 'dirt-1',
    category: 'dirt-bike',
    categoryLabel: 'DIRT BIKES',
    title: 'KTM 450CC DIRT BIKE - 1 HOUR TOUR',
    price: 400,
    priceRates: '1 hr: 400 AED',
    duration: '1-Hour',
    seats: '1 Rider',
    transfer: '300 AED 2-Way Transport',
    highlight: 'FULL PRO GEAR · UNLIMITED FUEL INCLUDED',
    description: "Feel the adrenaline on a competition-ready KTM 450cc dirt bike across Dubai's sweeping sand dunes.",
    image: '/images/ktm-450-1hr.jpeg',
    imagePosition: 'object-center',
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
    categoryLabel: 'DIRT BIKES',
    title: 'KTM 450CC DIRT BIKE - 2 HOUR EXPEDITION',
    price: 649,
    priceRates: '2 hrs: 649 AED',
    duration: '2-Hour',
    seats: '1 Rider',
    transfer: '300 AED 2-Way Transport',
    highlight: 'BIG RED DUNES · ADVANCED TECHNIQUE DRILLS',
    description: 'Tackle the iconic Big Red dunes, learn sand berm drifting and climb steep desert slopes.',
    image: '/images/ktm-450-2hr.jpeg',
    imagePosition: 'object-center',
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
    categoryLabel: 'DIRT BIKES',
    title: 'KTM 450CC DIRT BIKE - 3 HOUR ENDURO TOUR',
    price: 799,
    priceRates: '3 hrs: 799 AED',
    duration: '3-Hour',
    seats: '1 Rider',
    transfer: '300 AED 2-Way Transport',
    highlight: 'DEEP DESERT ENDURO · TECHNICAL DUNES',
    description: 'Extended backcountry desert trek testing your stamina through untouched dunes and rocky desert fringes.',
    image: '/images/ktm-450-3hr.jpeg',
    imagePosition: 'object-center',
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
    categoryLabel: 'DIRT BIKES',
    title: 'KTM 450CC DIRT BIKE - 4 HOUR (HALF-DAY)',
    price: 1000,
    priceRates: '4 hrs: 1000 AED',
    duration: '4-Hour',
    seats: '1 Rider',
    transfer: '300 AED 2-Way Transport',
    highlight: 'HALF-DAY RALLY · DEEP DESERT EXPLORATION',
    description: 'The ultimate half-day desert motocross immersion with custom rest stops and technical riding tips.',
    image: '/images/dirt-bike.jpg',
    imagePosition: 'object-center',
    specs: {
      horsepower: '63 HP Dakar Ready',
      engine: '450cc 4-Stroke',
      transmission: '5-Speed Heavy Duty',
      suspension: 'WP Suspension',
      terrain: 'Open Wilderness Desert'
    },
    inclusions: [
      '300 AED 2-Way hotel transport available',
      '4 Hours of premium desert motocross freedom',
      'Full kit: Boots, knee guards, chest armor, goggles, helmet',
      'Fuel refills and technical trail backup team',
      'Snacks, electrolytes, and refreshments'
    ]
  },
  {
    id: 'dirt-5',
    category: 'dirt-bike',
    categoryLabel: 'DIRT BIKES',
    title: 'KTM 450CC - FULL DAY DESERT RALLY SAFARI',
    price: 1550,
    priceRates: '1 Day: 1550 AED',
    duration: '1-Day',
    seats: '1 Rider',
    transfer: '300 AED 2-Way Transport',
    highlight: 'AUTHENTIC DAKAR EXPERIENCE · LUNCH INCLUDED',
    description: 'Spend an entire day living the Dakar dream navigating Dubai’s boundless ocean of golden sand.',
    image: '/images/dirt-bike-dubai-cover.jpg',
    imagePosition: 'object-center',
    specs: {
      horsepower: '63 HP Pro Rally',
      engine: '450cc Enduro Champion',
      transmission: 'Manual 5-Speed',
      suspension: 'Competition WP Set-Up',
      terrain: 'Full Desert Traverse'
    },
    inclusions: [
      'Full day trail riding with pro instructor',
      '300 AED 2-Way private hotel transport available',
      'Gourmet lunch break & desert lounge rest',
      'Complete motocross kit & unlimited fuel',
      'GoPro action photos & video moments'
    ]
  },

  // ==========================================
  // 2ND: CAN-AM BUGGIES
  // ==========================================
  {
    id: 'canam-1',
    category: 'can-am',
    categoryLabel: 'CAN-AM BUGGIES',
    title: 'CAN-AM MAVERICK XR (245 HP STAGE 4) (2 SEATER)',
    price: 1000,
    priceRates: '1 hr: 1000 AED | 2 hrs: 1800 AED',
    duration: '1-2 Hours',
    seats: '2 Seaters',
    transfer: '300 AED 2-Way Transport',
    highlight: 'FULL KEY (NO LOCKED ENGINE, ONLY OPEN KEYS)',
    description: "Dominate Dubai's red dunes with the 245 HP Stage 4 Can-Am Maverick XR, 1 hr: 1000 AED | 2 hrs: 1800 AED.",
    image: '/images/maverick-xr.jpeg',
    imagePosition: 'object-center',
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
    id: 'canam-2',
    category: 'can-am',
    categoryLabel: 'CAN-AM BUGGIES',
    title: 'CAN-AM MAVERICK XR (245 HP STAGE 4) (MAX FOR 4 SEATER)',
    price: 1000,
    priceRates: '1 hr: 1000 AED | 2 hrs: 1800 AED',
    duration: '1-2 Hours',
    seats: '4 Seaters',
    transfer: '300 AED 2-Way Transport',
    highlight: 'FULL KEY (NO LOCKED ENGINE, ONLY OPEN KEYS)',
    description: "Dominate Dubai's red dunes with the 245 HP Stage 4 Can-Am Maverick XR, 1 hr: 1000 AED | 2 hrs: 1800 AED.",
    image: '/images/x3.jpeg',
    imagePosition: 'object-center',
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
    id: 'canam-3',
    category: 'can-am',
    categoryLabel: 'CAN-AM BUGGIES',
    title: 'CAN-AM MAVERICK X3 TURBO (2 SEATER)',
    price: 1350,
    priceRates: '1 hr: 1350 AED | 2 hrs: 2150 AED',
    duration: '1-2 Hours',
    seats: '2 Seaters',
    transfer: '300 AED 2-Way Transport',
    highlight: 'FULL KEY (NO LOCKED ENGINE, ONLY OPEN KEYS)',
    description: 'High-performance Can-Am Maverick X3 Turbo engineered for high dune carving and open throttle desert runs.',
    image: '/images/can-am-4-seater.jpeg',
    imagePosition: 'object-center',
    specs: {
      horsepower: '195 HP Turbo RR',
      engine: 'Rotax ACE 900cc Turbocharged',
      transmission: 'QRS-X CVT',
      suspension: 'FOX 2.5 PODIUM QS3',
      terrain: 'Open Dunes & Sand Bowls'
    },
    inclusions: [
      'Unrestricted open key ride experience',
      'Expert desert guide leading trail',
      'Helmets, goggles, and gloves included',
      'Sandboarding gear available',
      'Cold water & soft drinks'
    ]
  },
  {
    id: 'canam-4',
    category: 'can-am',
    categoryLabel: 'CAN-AM BUGGIES',
    title: 'CAN-AM MAVERICK X3 TURBO 4 SEATER',
    price: 1000,
    priceRates: '1 hr: 1000 AED | 2 hrs: 1950 AED',
    duration: '1-2 Hours',
    seats: '4 Seaters',
    transfer: '300 AED 2-Way Transport',
    highlight: 'FAMILY & FRIENDS EXPEDITION · OPEN POWER',
    description: 'Bring family or friends together for the ultimate adrenaline rush in the dunes with 4 comfortable bucket seats.',
    image: '/images/buggy-rental-dubai-cover.jpg',
    imagePosition: 'object-[center_65%]',
    specs: {
      horsepower: '195 HP Turbo',
      engine: 'Rotax ACE 900cc Triple-Cylinder',
      transmission: 'Automatic CVT with High/Low',
      suspension: 'FOX Long-Travel Suspension',
      terrain: 'High Dunes & Open Deserts'
    },
    inclusions: [
      '4-Seater buggy with 4-point racing harnesses',
      'Full open key power',
      'Safety equipment for all 4 riders',
      'Photo opportunities on top of high dunes',
      'Unlimited refreshments'
    ]
  },

  // ==========================================
  // 3RD: POLARIS RZR BUGGIES
  // ==========================================
  {
    id: 'polaris-1',
    category: 'polaris',
    categoryLabel: 'POLARIS RZR BUGGIES',
    title: 'POLARIS RZR 1000 CC (145 HP) (2 SEATER)',
    price: 500,
    priceRates: '1 hr: 500 AED | 2 hrs: 700 AED',
    duration: '1-2 Hours',
    seats: '2 Seaters',
    transfer: '300 AED 2-Way Transport',
    highlight: 'FULL KEY (NO LOCKED ENGINE, ONLY OPEN KEYS)',
    description: 'Embark on an exciting desert journey with the 145 HP Polaris RZR 1000 CC, 1 hr: 500 AED | 2 hrs: 700 AED.',
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
    id: 'polaris-2',
    category: 'polaris',
    categoryLabel: 'POLARIS RZR BUGGIES',
    title: 'POLARIS RZR 2 SEATER (EARLY MORNING SPECIAL)',
    price: 500,
    priceRates: '1 hr: 500 AED',
    duration: '1-Hour',
    seats: '2 Seaters',
    transfer: '300 AED 2-Way Transport',
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
    id: 'polaris-3',
    category: 'polaris',
    categoryLabel: 'POLARIS RZR BUGGIES',
    title: 'POLARIS RZR TURBO S (2 SEATER)',
    price: 900,
    priceRates: '2 hrs: 900 AED',
    duration: '2-Hour',
    seats: '2 Seaters',
    transfer: '300 AED 2-Way Transport',
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
    id: 'polaris-4',
    category: 'polaris',
    categoryLabel: 'POLARIS RZR BUGGIES',
    title: 'SINGLE SEATER POLARIS RS1 (SOLO RACER)',
    price: 750,
    priceRates: '1 hr: 750 AED | 2 hrs: 1250 AED',
    duration: '1-2 Hours',
    seats: '1 Seater',
    transfer: '300 AED 2-Way Transport',
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

  // ==========================================
  // 4TH: QUAD BIKES
  // ==========================================
  {
    id: 'quad-1',
    category: 'quad-bike',
    categoryLabel: 'QUAD BIKES',
    title: '01 YAMAHA RAPTOR 700CC (MANUAL BEAST)',
    price: 500,
    priceRates: '1 hr: 500 AED | 2 hrs: 1100 AED',
    duration: '1-Hour',
    seats: '1 Rider',
    transfer: '300 AED 2-Way Transport',
    highlight: '700CC MANUAL POWER · RACE TUNED',
    description: 'Pure performance with the aggressive Yamaha Raptor 700cc manual transmission for skilled ATV adrenaline junkies.',
    image: '/images/raptor-700.jpeg',
    imagePosition: 'object-center',
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
  {
    id: 'quad-2',
    category: 'quad-bike',
    categoryLabel: 'QUAD BIKES',
    title: '02 570CC USA 🇺🇸 4X4 QUAD BIKE (POLARIS SPORTSMAN)',
    price: 350,
    priceRates: '1 hr: 350 AED | 2 hrs: 850 AED',
    duration: '1-Hour',
    seats: '1 Rider',
    transfer: '300 AED 2-Way Transport',
    highlight: 'USA 🇺🇸 570CC 4X4 · HEAVY DUTY ALL-TERRAIN',
    description: 'True American 4x4 off-road power with the 570cc Polaris Sportsman ATV. Unstoppable traction through massive sand dunes.',
    image: '/images/quad-bike.jpg',
    imagePosition: 'object-center',
    specs: {
      engine: '570cc ProStar 4-Stroke DOHC EFI',
      drive: 'True On-Demand AWD / 4x4 / 2WD',
      transmission: 'Automatic PVT (P/R/N/L/H)',
      suspension: 'Independent Rear Suspension (IRS) with 9.5" Travel',
      terrain: 'Steep Dunes, Soft Sand & Rocky Basins'
    },
    inclusions: [
      'Heavy-duty 570cc 4x4 all-wheel drive quad bike',
      'Full protective helmet, safety goggles & gloves',
      'Desert leader escorting through scenic dunes',
      'Fuel & hydration included throughout ride',
      'Sandboarding and scenic photo stop'
    ]
  },
  {
    id: 'quad-3',
    category: 'quad-bike',
    categoryLabel: 'QUAD BIKES',
    title: '03 KYMCO 250CC TO 350CC QUAD BIKE (1 HOUR)',
    price: 250,
    priceRates: '1 hr: 250 AED',
    duration: '1-Hour',
    seats: '1 Rider',
    transfer: '300 AED 2-Way Transport',
    highlight: 'AUTOMATIC TRANSMISSION · BEGINNER FRIENDLY',
    description: 'Hop onto an automatic four-wheeler Kymco quad bike and drift across gentle rolling desert dunes with ease.',
    image: '/images/kimko-1.jpeg',
    imagePosition: 'object-center',
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
    id: 'quad-4',
    category: 'quad-bike',
    categoryLabel: 'QUAD BIKES',
    title: 'KYMCO 250CC TO 350CC QUAD BIKE (2 HOURS)',
    price: 450,
    priceRates: '2 hrs: 450 AED',
    duration: '2-Hour',
    seats: '1 Rider',
    transfer: '300 AED 2-Way Transport',
    highlight: 'OPEN DESERT TRAILS · HIGH DUNE CLIMB',
    description: 'Double the excitement with a 2-hour guided quad trek navigating bigger dunes and desert valleys.',
    image: '/images/kimko-2.jpeg',
    imagePosition: 'object-center',
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
    id: 'quad-5',
    category: 'quad-bike',
    categoryLabel: 'QUAD BIKES',
    title: 'KYMCO 250CC TO 350CC QUAD BIKE (3 HOURS - SUNSET)',
    price: 650,
    priceRates: '3 hrs: 650 AED',
    duration: '3-Hour',
    seats: '1 Rider',
    transfer: '300 AED 2-Way Transport',
    highlight: 'SUNSET EXPEDITION · SANDBOARDING INCLUDED',
    description: 'Comprehensive 3-hour quad safari timed with sunset, offering breathtaking photo opportunities and sand slides.',
    image: '/images/kimko-3.jpeg',
    imagePosition: 'object-center',
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

  // ==========================================
  // 5TH: DESERT SAFARI & PRIVATE EXPERIENCES
  // ==========================================
  {
    id: 'safari-pvt-1',
    category: 'safari',
    categoryLabel: 'DESERT SAFARI',
    title: 'PRIVATE CAR FOR DUNE DRIVE',
    price: 500,
    priceRates: 'Private 4x4 Dune Drive: 500 AED',
    duration: '3-4 Hours',
    seats: 'Up to 6 Persons',
    transfer: '300 AED 2-Way Transport',
    highlight: 'PRIVATE LUXURY 4X4 · DUNE BASHING & PHOTO STOP',
    description: 'Exclusive private 4x4 Land Cruiser dune drive with licensed safari driver, sandboarding, and scenic desert photography across Dubai red dunes.',
    image: '/images/safari-4x4.jpg',
    imagePosition: 'object-center',
    specs: {
      vehicle: 'Private Toyota Land Cruiser 4x4 (Exclusive for your group)',
      capacity: 'Up to 6 Guests comfortably',
      activities: 'Extreme Dune Bashing, Sandboarding & High Dune Photo Stop',
      transport: '300 AED 2-Way Hotel Pickup & Drop-Off Available'
    },
    inclusions: [
      'Exclusive private 4x4 car (No sharing with other groups)',
      'Licensed professional desert safari driver',
      'Exciting 45-minute dune bashing on high red dunes',
      'Free sandboarding slides down steep sand dunes',
      'Sunset photography break at scenic dune peak',
      'Chilled mineral water & soft drinks provided'
    ]
  },
  {
    id: 'safari-pvt-2',
    category: 'safari',
    categoryLabel: 'DESERT SAFARI',
    title: 'PREMIUM CAMP',
    price: 900,
    priceRates: 'Premium Camp Experience: 900 AED',
    duration: '6 Hours',
    seats: 'Up to 6 Persons',
    transfer: '300 AED 2-Way Transport',
    highlight: 'PRIVATE 4X4 + DESERT SAFARI + LIVE DINNER SHOW',
    description: 'Complete private desert safari: dune bashing, camel rides, international BBQ buffet dinner, belly dance, fire & Tanoura shows.',
    image: '/images/safari-lifetime.jpg',
    imagePosition: 'object-center',
    specs: {
      vehicle: 'Private 4x4 Land Cruiser',
      duration: '6 Hours (3:00 PM – 9:00 PM)',
      dining: 'Full International BBQ Buffet Dinner (Veg & Non-Veg)',
      entertainment: 'Fire Show, Tanoura Dance & Belly Dance Performance'
    },
    inclusions: [
      '300 AED 2-Way round-trip hotel transfer available',
      'Private 4x4 dune bashing adventure with expert driver',
      'Camel ride & sandboarding experience',
      'Delicious BBQ dinner buffet with live cooking stations',
      'Live cultural stage shows: Belly Dance, Fire Show, Tanoura',
      'Henna tattooing, Arabic costumes, coffee (Gahwa) & dates'
    ]
  },
  {
    id: 'safari-pvt-3',
    category: 'safari',
    categoryLabel: 'DESERT SAFARI',
    title: 'PREMIUM CAMP SAFARI DINNER (VIP LUXURY)',
    price: 1500,
    priceRates: '5-Star VIP Luxury Experience: 1500 AED',
    duration: '6 Hours VIP',
    seats: 'Private Booking',
    transfer: '300 AED 2-Way Transport',
    highlight: '5-STAR VIP DESERT OASIS · TABLE SERVICE & EXCLUSIVE SHOWS',
    description: 'Elite 5-star VIP desert camp experience with dedicated waiter table service, gourmet dining, and front-row entertainment.',
    image: '/images/cta-background.jpg',
    imagePosition: 'object-center',
    specs: {
      experience: '5-Star VIP Luxury Desert Camp',
      dining: 'Gourmet 5-Star International Buffet with Private Table Service',
      lounge: 'Exclusive VIP Majlis Seating with Panoramic Views',
      entertainment: 'Front-Row View of Fire, Tanoura & Arabian Shows'
    },
    inclusions: [
      'VIP Luxury 2-way hotel transfer available in premium SUV (300 AED)',
      'Dune bashing in pristine private reserve dunes',
      'Dedicated private VIP table with personal waiter service',
      'Gourmet international BBQ dinner including seafood & grills',
      'Unlimited premium beverages, fresh juices, Arabic tea & coffee',
      'Camel trekking, falcon encounter & premium shisha lounge'
    ]
  },
  {
    id: 'safari-pvt-4',
    category: 'safari',
    categoryLabel: 'DESERT SAFARI',
    title: 'PRIVATE DESERT BONFIRE & DINNER SHOW SETUP',
    price: 500,
    priceRates: '500 AED Per Person (Min 4 to 5 Persons)',
    duration: '5-6 Hours',
    seats: 'Min 4 - 5 Persons',
    transfer: '300 AED 2-Way Transport',
    highlight: '🔥 PRIVATE BONFIRE SETUP · DINNER & SHOW IN OPEN DESERT',
    description: 'Exclusive private desert setup under the stars with a crackling bonfire, luxury Arabian seating, private live dinner buffet, and desert show for your group.',
    image: '/images/safari-delights.jpg',
    imagePosition: 'object-center',
    specs: {
      setup: 'Private Desert Lounge with Crackling Bonfire 🔥',
      minimumGroup: 'Minimum 4 to 5 Persons (500 AED / Person with Dinner)',
      dining: 'Private Live BBQ Dinner Served at Desert Campsite',
      atmosphere: 'Ambient Lanterns, Low Arabian Sofas, Fire Pit & Music'
    },
    inclusions: [
      'Authentic open desert private camp exclusively for your group',
      'Live crackling bonfire with marshmallow roasting',
      'Gourmet live BBQ dinner buffet with chef & attendants',
      'Live fire show / cultural desert performance at your private setup',
      '300 AED 2-Way pickup & drop-off available for the group',
      'Unlimited soft drinks, bottled water, Karak tea & Arabic coffee'
    ]
  },
  {
    id: 'safari-combo-1',
    category: 'safari',
    categoryLabel: 'DESERT SAFARI',
    title: 'POLARIS 1000CC DUNE BUGGY SAFARI COMBO',
    price: 400,
    priceRates: 'Full Experience: 400 AED',
    duration: '30 Mins',
    seats: '2 Seaters',
    transfer: '300 AED 2-Way Transport',
    highlight: 'BUGGY + DUNE BASHING + BBQ CAMP DINNER',
    description: 'The complete Dubai experience: 30 mins self-drive Polaris buggy plus 4x4 dune bashing, camel ride & BBQ buffet.',
    image: '/images/polarize-1000.jpeg',
    imagePosition: 'object-[center_72%]',
    specs: {
      vehicle: 'Polaris RZR 1000cc + 4x4 Land Cruiser',
      duration: '30 Mins Total',
      camp: 'Traditional Bedouin Desert Camp',
      food: 'International BBQ Buffet Dinner (Veg & Non-Veg)',
      entertainment: 'Belly Dance, Tanoura & Fire Show'
    },
    inclusions: [
      'Self-drive 30-minute Polaris buggy session in open dunes',
      'Thrilling 4x4 dune bashing session with licensed safari driver',
      'Camel ride experience & sandboarding',
      'Full BBQ buffet dinner with vegetarian options',
      'Live cultural entertainment shows & henna painting',
      '300 AED 2-Way hotel pickup and drop-off available'
    ]
  },
  {
    id: 'safari-combo-2',
    category: 'safari',
    categoryLabel: 'DESERT SAFARI',
    title: 'CAN-AM MAVERICK XR DUNE SAFARI VIP',
    price: 750,
    priceRates: 'VIP Experience: 750 AED',
    duration: '30 Mins',
    seats: '2 Seaters',
    transfer: '300 AED 2-Way Transport',
    highlight: 'VIP CAMP SEATING · LIVE SHOWS & PRIVATE 4X4',
    description: 'Luxury VIP safari: 30 mins Can-Am Maverick XR ride, VIP table service & Arabian shows.',
    image: '/images/maverick-xr.jpeg',
    imagePosition: 'object-center',
    specs: {
      vehicle: 'Can-Am Maverick XR 245 HP + Luxury 4x4',
      duration: '30 Mins VIP',
      camp: 'VIP Lounge with Table Service',
      food: 'Premium 5-Star International BBQ Buffet',
      entertainment: 'Exclusive Stage View Entertainment'
    },
    inclusions: [
      '30 Mins behind the wheel of Can-Am Maverick XR (Open key)',
      '300 AED 2-Way round-trip hotel transfer available',
      'VIP table with dedicated service at desert camp',
      'Unlimited soft drinks, Arabic coffee (Gahwa) & fresh dates',
      'Camel ride, henna painting & falcon photography',
      'All safety gear & guide included'
    ]
  }
];
