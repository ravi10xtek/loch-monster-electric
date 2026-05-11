export const servicePages = {
  residential: {
    slug: 'residential-electrical-services',
    seo: {
      title: 'Residential Electrical Services | Loch Monster Electric',
      description: 'Licensed residential electricians serving the Twin Cities metro. Panel upgrades, EV chargers, repairs, rewiring & more. Call 763-292-1191.',
    },
    hero: {
      eyebrow: 'Residential',
      title: ['RESIDENTIAL', 'ELECTRICAL SERVICES'],
      tagline: 'Keeping the Lights On, And the Heat, and the Wi-Fi.',
      body: "Rome wasn't built in a day—and when something goes wrong, it can throw your whole day off. That's why Loch Monster Electric is here to make sure your power is safe, your setup is solid, and your home stays right—and done right. We work with homeowners across the Twin Cities to fix the little things before they turn into big ones, and handle the big ones when they show up. Whether you're dealing with flickering lights, mystery outlets, or adding an EV charger in the garage, we'll get in there—and make a bunch of problems disappear.",
    },
    whatWeHandle: {
      eyebrow: 'What We Handle',
      heading: 'FIX ELECTRICAL ISSUES BEFORE THEY TURN INTO BIGGER PROBLEMS.',
      body: 'From panel upgrades and rewiring to light fixtures, EV chargers, and smart home setups—we make homes work the way they should.',
      cta: 'ALL RESIDENTIAL SERVICES ›',
      tabs: [
        { id: 'repairs', label: 'ELECTRICAL REPAIRS', href: '/residential-electrical-services/electrical-repairs' },
        { id: 'upgrades', label: 'ELECTRICAL UPGRADES', href: '/residential-electrical-services/electrical-upgrades' },
        { id: 'installations', label: 'INSTALLATIONS', href: '/residential-electrical-services/installations' },
        { id: 'safety', label: 'SAFETY & COMPLIANCE', href: '/residential-electrical-services/safety-compliance' },
      ],
      cards: {
        repairs: [
          { label: 'OUTLET & SWITCH REPAIR', body: 'Fast diagnosis and repair of dead outlets, faulty switches, and wiring issues throughout your home.', color: '#2a2a2a', gradient: 'linear-gradient(160deg,#191919,#333)' },
          { label: 'CIRCUIT BREAKER REPAIR', body: 'Tripping breakers, overloaded panels, and fuse box problems diagnosed and fixed right.', color: '#1a2a1a', gradient: 'linear-gradient(160deg,#0d1f0d,#2a3a2a)' },
          { label: 'EMERGENCY ELECTRICAL REPAIR', body: 'Sparking wires, no power, burning smells—we respond fast when it can\'t wait until Monday.', color: '#1a1a2a', gradient: 'linear-gradient(160deg,#0d0d1f,#2a2a3a)' },
          { label: 'SAFETY & COMPLIANCE', body: 'Inspections, code corrections, GFCI/AFCI upgrades, and smoke detector systems.', color: '#2a1a1a', gradient: 'linear-gradient(160deg,#1f0d0d,#3a2a2a)' },
        ],
        upgrades: [
          { label: 'PANEL UPGRADES', body: 'Replace outdated panels and fuse boxes with modern, code-compliant electrical service.', color: '#2a2a2a', gradient: 'linear-gradient(160deg,#191919,#333)' },
          { label: 'SERVICE UPGRADES', body: 'Increase your home\'s electrical capacity to handle modern loads—EVs, heat pumps, and more.', color: '#1a2a1a', gradient: 'linear-gradient(160deg,#0d1f0d,#2a3a2a)' },
          { label: 'WHOLE-HOME REWIRING', body: 'Safely replace aging or aluminum wiring throughout your home, room by room or all at once.', color: '#1a1a2a', gradient: 'linear-gradient(160deg,#0d0d1f,#2a2a3a)' },
          { label: 'SUBPANEL INSTALLATION', body: 'Add a subpanel for a garage, workshop, or addition without overloading your main panel.', color: '#2a1a1a', gradient: 'linear-gradient(160deg,#1f0d0d,#3a2a2a)' },
        ],
        installations: [
          { label: 'EV CHARGER INSTALLATION', body: 'Level 2 home charger installation—circuit, permit, and inspection handled start to finish.', color: '#2a2a2a', gradient: 'linear-gradient(160deg,#191919,#333)' },
          { label: 'SMART HOME WIRING', body: 'Smart switches, thermostats, doorbells, and whole-home networking wired correctly the first time.', color: '#1a2a1a', gradient: 'linear-gradient(160deg,#0d1f0d,#2a3a2a)' },
          { label: 'LIGHTING & CEILING FANS', body: 'Recessed lighting, fixtures, ceiling fans, and dimmers installed cleanly and to code.', color: '#1a1a2a', gradient: 'linear-gradient(160deg,#0d0d1f,#2a2a3a)' },
          { label: 'NEW CIRCUITS', body: 'Add dedicated circuits for appliances, home offices, hot tubs, or any high-draw equipment.', color: '#2a1a1a', gradient: 'linear-gradient(160deg,#1f0d0d,#3a2a2a)' },
        ],
        safety: [
          { label: 'GFCI / AFCI UPGRADES', body: 'Protect kitchens, bathrooms, and bedrooms with modern arc and ground fault protection.', color: '#2a2a2a', gradient: 'linear-gradient(160deg,#191919,#333)' },
          { label: 'SMOKE & CO DETECTORS', body: 'Hardwired detector installation and interconnection throughout your home for full coverage.', color: '#1a2a1a', gradient: 'linear-gradient(160deg,#0d1f0d,#2a3a2a)' },
          { label: 'CODE INSPECTIONS', body: 'Pre-sale, post-purchase, or routine inspections to make sure your home is safe and up to code.', color: '#1a1a2a', gradient: 'linear-gradient(160deg,#0d0d1f,#2a2a3a)' },
          { label: 'SURGE PROTECTION', body: 'Whole-home surge protection to guard your appliances, electronics, and HVAC from power spikes.', color: '#2a1a1a', gradient: 'linear-gradient(160deg,#1f0d0d,#3a2a2a)' },
        ],
      },
      ctaCard: 'ALL ELECTRICAL\nSERVICES',
    },
  },

  commercial: {
    slug: 'commercial-electrical-services',
    seo: {
      title: 'Commercial Electrical Services | Loch Monster Electric',
      description: 'Commercial electricians for the Twin Cities metro. Office buildouts, panel upgrades, lighting retrofits & code compliance. Call 763-292-1191.',
    },
    hero: {
      eyebrow: 'Commercial',
      title: ['COMMERCIAL', 'ELECTRICAL SERVICES'],
      tagline: 'Powering Your Business Without the Downtime.',
      body: "Your business can't afford to stop. Whether it's a tripped breaker at the worst time, a lighting retrofit that needs to be done over a weekend, or a full office buildout from the ground up—Loch Monster Electric shows up ready to work around your schedule. We handle commercial jobs across the Twin Cities for offices, retail, warehouses, and multi-unit properties. Licensed, insured, and built around getting the job done without the runaround.",
    },
    whatWeHandle: {
      eyebrow: 'What We Handle',
      heading: 'KEEP YOUR BUSINESS RUNNING WITHOUT ELECTRICAL SURPRISES.',
      body: 'From office buildouts and lighting retrofits to panel upgrades and code compliance—we keep your business powered and protected.',
      cta: 'ALL COMMERCIAL SERVICES ›',
      tabs: [
        { id: 'buildouts', label: 'OFFICE BUILDOUTS', href: '/commercial-electrical-services/compliance-infrastructure' },
        { id: 'lighting', label: 'LIGHTING RETROFITS', href: '/commercial-electrical-services/lighting-systems' },
        { id: 'panels', label: 'PANEL UPGRADES', href: '/commercial-electrical-services/power-distribution' },
        { id: 'compliance', label: 'CODE COMPLIANCE', href: '/commercial-electrical-services/compliance-infrastructure' },
      ],
      cards: {
        buildouts: [
          { label: 'TENANT IMPROVEMENTS', body: 'Electrical for new or renovated commercial spaces—circuits, panels, lighting, and data drops.', color: '#2a2a2a', gradient: 'linear-gradient(160deg,#191919,#333)' },
          { label: 'NEW CIRCUIT INSTALLATION', body: 'Dedicated circuits for equipment, workstations, signage, and specialty commercial loads.', color: '#1a2a1a', gradient: 'linear-gradient(160deg,#0d1f0d,#2a3a2a)' },
          { label: 'COMMERCIAL WIRING', body: 'Rough-in and finish wiring for new construction and major renovation projects.', color: '#1a1a2a', gradient: 'linear-gradient(160deg,#0d0d1f,#2a2a3a)' },
          { label: 'DATA & LOW VOLTAGE', body: 'Structured cabling, access control wiring, and low-voltage systems for modern workplaces.', color: '#2a1a1a', gradient: 'linear-gradient(160deg,#1f0d0d,#3a2a2a)' },
        ],
        lighting: [
          { label: 'LED RETROFITS', body: 'Upgrade fluorescent and HID fixtures to energy-efficient LED—lower bills, better light quality.', color: '#2a2a2a', gradient: 'linear-gradient(160deg,#191919,#333)' },
          { label: 'EXTERIOR LIGHTING', body: 'Parking lot, signage, and security lighting installed and maintained for your property.', color: '#1a2a1a', gradient: 'linear-gradient(160deg,#0d1f0d,#2a3a2a)' },
          { label: 'EMERGENCY LIGHTING', body: 'Code-compliant emergency and exit lighting installation and annual testing.', color: '#1a1a2a', gradient: 'linear-gradient(160deg,#0d0d1f,#2a2a3a)' },
          { label: 'LIGHTING CONTROLS', body: 'Occupancy sensors, dimmers, and automated lighting systems to cut energy costs.', color: '#2a1a1a', gradient: 'linear-gradient(160deg,#1f0d0d,#3a2a2a)' },
        ],
        panels: [
          { label: 'PANEL REPLACEMENT', body: 'Replace outdated commercial panels with properly rated equipment sized for your load.', color: '#2a2a2a', gradient: 'linear-gradient(160deg,#191919,#333)' },
          { label: 'LOAD BALANCING', body: 'Diagnose and correct overloaded circuits and unbalanced loads before they become problems.', color: '#1a2a1a', gradient: 'linear-gradient(160deg,#0d1f0d,#2a3a2a)' },
          { label: 'SUBPANEL INSTALLATION', body: 'Add subpanels for expansion, equipment zones, or secondary spaces in your building.', color: '#1a1a2a', gradient: 'linear-gradient(160deg,#0d0d1f,#2a2a3a)' },
          { label: 'SERVICE UPGRADES', body: 'Increase your building\'s electrical service capacity to support business growth.', color: '#2a1a1a', gradient: 'linear-gradient(160deg,#1f0d0d,#3a2a2a)' },
        ],
        compliance: [
          { label: 'CODE CORRECTIONS', body: 'Identify and correct NEC violations before they become inspection failures or liability issues.', color: '#2a2a2a', gradient: 'linear-gradient(160deg,#191919,#333)' },
          { label: 'INSPECTION PREP', body: 'Get your building ready for city inspections with a thorough pre-inspection walkthrough.', color: '#1a2a1a', gradient: 'linear-gradient(160deg,#0d1f0d,#2a3a2a)' },
          { label: 'ARC FAULT PROTECTION', body: 'AFCI breaker upgrades for commercial spaces where code requires arc fault protection.', color: '#1a1a2a', gradient: 'linear-gradient(160deg,#0d0d1f,#2a2a3a)' },
          { label: 'GROUNDING & BONDING', body: 'Proper grounding and bonding to protect equipment, personnel, and your building.', color: '#2a1a1a', gradient: 'linear-gradient(160deg,#1f0d0d,#3a2a2a)' },
        ],
      },
      ctaCard: 'ALL COMMERCIAL\nSERVICES',
    },
  },

  hoa: {
    slug: 'hoa-electrical-services',
    seo: {
      title: 'HOA Electrical Services | Loch Monster Electric',
      description: 'HOA & property management electrical services in the Twin Cities. Common areas, EV charging, emergency repairs & annual inspections. Call 763-292-1191.',
    },
    hero: {
      eyebrow: 'HOA & Property Management',
      title: ['HOA ELECTRICAL', 'SERVICES'],
      tagline: "Managing Common Areas Has Enough Headaches. Electrical Isn't One of Them.",
      body: "HOAs and property managers have a lot to keep track of. When electrical issues come up in common areas, amenities, or tenant units, you need someone who shows up on time, communicates clearly, and gets it done right the first time. Loch Monster Electric works with HOAs and property managers across the Twin Cities—handling everything from emergency repairs to scheduled maintenance, annual inspections, and EV charging station installs.",
    },
    whatWeHandle: {
      eyebrow: 'What We Handle',
      heading: 'ELECTRICAL MANAGEMENT BUILT FOR HOAS AND PROPERTY MANAGERS.',
      body: "We work on a schedule that fits your operations—minimizing disruption to residents and keeping your properties safe and up to code.",
      cta: 'HOA SERVICES ›',
      tabs: [
        { id: 'common', label: 'COMMON AREAS', href: '/hoa-electrical-services/hoa-common-areas' },
        { id: 'emergency', label: 'EMERGENCY REPAIRS', href: '/hoa-electrical-services/hoa-emergency-repairs' },
        { id: 'ev', label: 'EV CHARGING', href: '/hoa-electrical-services/hoa-ev-charging' },
        { id: 'inspections', label: 'INSPECTIONS', href: '/hoa-electrical-services/hoa-inspections' },
      ],
      cards: {
        common: [
          { label: 'HALLWAY & LOBBY LIGHTING', body: 'Interior common area lighting kept bright, efficient, and compliant for residents and guests.', color: '#2a2a2a', gradient: 'linear-gradient(160deg,#191919,#333)' },
          { label: 'EXTERIOR & PARKING LIGHTING', body: 'Parking lot, walkway, and entry lighting installed and maintained for safety and security.', color: '#1a2a1a', gradient: 'linear-gradient(160deg,#0d1f0d,#2a3a2a)' },
          { label: 'AMENITY ELECTRICAL', body: 'Pool, clubhouse, fitness center, and shared space electrical kept safe and operational.', color: '#1a1a2a', gradient: 'linear-gradient(160deg,#0d0d1f,#2a2a3a)' },
          { label: 'COMMON AREA REPAIRS', body: 'Fast turnaround on outlets, switches, panels, and wiring issues in shared spaces.', color: '#2a1a1a', gradient: 'linear-gradient(160deg,#1f0d0d,#3a2a2a)' },
        ],
        emergency: [
          { label: '24/7 EMERGENCY RESPONSE', body: 'Around-the-clock emergency electrical service for HOAs and property managers who can\'t wait.', color: '#2a2a2a', gradient: 'linear-gradient(160deg,#191919,#333)' },
          { label: 'POWER RESTORATION', body: 'Rapid diagnosis and restoration of power outages affecting units or common areas.', color: '#1a2a1a', gradient: 'linear-gradient(160deg,#0d1f0d,#2a3a2a)' },
          { label: 'HAZARD REPAIR', body: 'Sparking wires, burning smells, and exposed conductors addressed immediately and safely.', color: '#1a1a2a', gradient: 'linear-gradient(160deg,#0d0d1f,#2a2a3a)' },
          { label: 'STORM DAMAGE REPAIR', body: 'Post-storm electrical assessment and repair to get your property back online fast.', color: '#2a1a1a', gradient: 'linear-gradient(160deg,#1f0d0d,#3a2a2a)' },
        ],
        ev: [
          { label: 'EV STATION INSTALLATION', body: 'Level 2 EV charger installation in parking areas—single units or multi-port stations.', color: '#2a2a2a', gradient: 'linear-gradient(160deg,#191919,#333)' },
          { label: 'LOAD MANAGEMENT', body: 'Smart load management systems that balance EV charging demand with your building\'s capacity.', color: '#1a2a1a', gradient: 'linear-gradient(160deg,#0d1f0d,#2a3a2a)' },
          { label: 'PERMIT & INSPECTION', body: 'Full permit pulling and city inspection coordination so you don\'t have to deal with the paperwork.', color: '#1a1a2a', gradient: 'linear-gradient(160deg,#0d0d1f,#2a2a3a)' },
          { label: 'BILLING INTEGRATION', body: 'Help selecting and installing EV charging systems with resident billing and usage tracking.', color: '#2a1a1a', gradient: 'linear-gradient(160deg,#1f0d0d,#3a2a2a)' },
        ],
        inspections: [
          { label: 'ANNUAL INSPECTIONS', body: 'Scheduled annual electrical inspections for common areas, panels, and shared systems.', color: '#2a2a2a', gradient: 'linear-gradient(160deg,#191919,#333)' },
          { label: 'CODE COMPLIANCE CHECKS', body: 'Keep your property current with NEC code requirements and avoid liability exposure.', color: '#1a2a1a', gradient: 'linear-gradient(160deg,#0d1f0d,#2a3a2a)' },
          { label: 'MAINTENANCE CONTRACTS', body: 'Ongoing maintenance agreements for predictable budgeting and priority scheduling.', color: '#1a1a2a', gradient: 'linear-gradient(160deg,#0d0d1f,#2a2a3a)' },
          { label: 'DOCUMENTATION & REPORTS', body: 'Written inspection reports and electrical documentation for board meetings and insurance.', color: '#2a1a1a', gradient: 'linear-gradient(160deg,#1f0d0d,#3a2a2a)' },
        ],
      },
      ctaCard: 'ALL HOA\nSERVICES',
    },
  },
};
