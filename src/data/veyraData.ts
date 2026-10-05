import { PaintFinish, WheelDesign, CutawaySystem, FleetCar } from '../types';

export const PAINT_FINISHES: PaintFinish[] = [
  {
    id: 'studio-silver',
    name: 'Studio Silver',
    hex: '#D1D5DB',
    accentHex: '#94A3B8',
    description: 'Liquid mercury base with microscopic aluminum flake suspension, engineered for high studio specular reflectance.',
    reflectance: '88% Specular',
    coating: 'Quad-Coat Tri-Stage Mica',
    imagePath: '/src/assets/images/veyra_hero_silver_1791208719459.jpg',
  },
  {
    id: 'electric-green',
    name: 'Electric Green',
    hex: '#059669',
    accentHex: '#10B981',
    description: 'Deep emerald crystalline matrix that shifts from dark obsidian to luminous bioluminescent green under direct light.',
    reflectance: '79% Dynamic',
    coating: 'Nano-Ceramic Crystalline Coat',
    imagePath: '/src/assets/images/veyra_hero_electric_green_1791208809504.jpg',
  },
  {
    id: 'lime-green',
    name: 'Lime Green',
    hex: '#84CC16',
    accentHex: '#A3E635',
    description: 'High-visibility fluorescent track formulation with high-index reflective pearls, emphasizing aerodynamic body contours.',
    reflectance: '92% Luminescent',
    coating: 'Optic Hyper-Gloss Lacquer',
    imagePath: '/src/assets/images/veyra_hero_lime_green_1791208822969.jpg',
  },
  {
    id: 'sky-blue',
    name: 'Sky Blue',
    hex: '#38BDF8',
    accentHex: '#0284C7',
    description: 'Glacial ice azure with subtle titanium oxide pigments, reflecting soft skylight hues along the upper greenhouse profile.',
    reflectance: '85% Diffuse Pearl',
    coating: 'Cryo-Mica Multi-Layer',
    imagePath: '/src/assets/images/veyra_hero_sky_blue_1791208837149.jpg',
  },
  {
    id: 'graphite',
    name: 'Graphite',
    hex: '#374151',
    accentHex: '#1F2937',
    description: 'Stealth charcoal anthracite with satin sheen micro-texture, designed to absorb extraneous studio light for clean form definition.',
    reflectance: '64% Satin Matte',
    coating: 'Satin Carbon Hardcoat',
    imagePath: '/src/assets/images/veyra_hero_graphite_1791208851315.jpg',
  },
];

export const WHEEL_DESIGNS: WheelDesign[] = [
  {
    id: 'multi-spoke',
    name: 'Multi-Spoke Turbine',
    size: '21" Front / 22" Rear',
    type: 'Forged Directional Turbine',
    description: 'Intricately milled directional spokes designed to evacuate high-pressure turbulent air from the front wheel arches.',
    cdDelta: '-0.004 Cd',
    massSavings: '-3.8 kg per corner',
    aerodynamicBenefit: 'Active vortex extraction decreases front axle aerodynamic lift at speeds above 160 km/h.',
  },
  {
    id: 'aero-disc',
    name: 'Aero Disc Monobloc',
    size: '20" Front / 20" Rear',
    type: 'Carbon Composite Aero Cover',
    description: 'Flush full-carbon fairing with micro-vane perimeter cooling channels, engineered for maximum laminar slipstream flow.',
    cdDelta: '-0.012 Cd',
    massSavings: '-2.1 kg per corner',
    aerodynamicBenefit: 'Optimizes transcontinental highway cruising efficiency, adding up to 28 km to total battery range.',
  },
  {
    id: 'sport-forged',
    name: 'Sport Forged Split-5',
    size: '21" Front / 21" Rear',
    type: 'Ultra-Light Magnesium Alloy',
    description: 'Minimalist structural architecture prioritizing lowest rotational inertia for sharp turn-in and telepathic steering response.',
    cdDelta: '+0.002 Cd',
    massSavings: '-6.4 kg per corner',
    aerodynamicBenefit: 'Substantially reduces unsprung rotational mass, sharpening suspension damper reactivity over road imperfections.',
  },
];

export const CUTAWAYS: Record<'drive' | 'battery', CutawaySystem> = {
  drive: {
    id: 'drive',
    title: 'Electric Drive Architecture',
    kicker: 'SYSTEM SPECIMEN 01',
    tagline: 'Permanent Magnet Synchronous Dual-Motor Propulsion',
    technicalBadge: '800V SILICON CARBIDE // DUAL INVERTER AWD',
    driverBenefit:
      'Instantaneous, uninterrupted propulsion. Power delivery is telepathic, delivering up to 720 kW of bidirectional torque with zero driveline lash, turning high-g apex exits into effortless, surgical momentum.',
    image: '/src/assets/images/veyra_powertrain_cutaway_1791208737964.jpg',
    filmClipType: 'flux',
    specs: [
      { label: 'Combined Output', value: '720 kW (965 hp)' },
      { label: 'Torque Response', value: '< 2.5 milliseconds' },
      { label: 'Inverter Efficiency', value: '99.2% Peak SiC' },
      { label: 'Max Rotor Velocity', value: '20,500 RPM' },
    ],
    annotations: [
      {
        id: 'drive-1',
        number: 1,
        title: 'Planetary Reduction Gearset',
        technicalLead: 'Single-Speed Micro-Honed Helical Assembly',
        description:
          'Ultra-compact dual-stage planetary gearset fabricated from case-hardened nickel-chromium alloy, engineered for silent meshing under 1,150 Nm peak driveline torque.',
        xPercent: 32,
        yPercent: 44,
      },
      {
        id: 'drive-2',
        number: 2,
        title: 'Silicon Carbide (SiC) Power Inverters',
        technicalLead: 'Pin-Fin Micro-Channel Direct Liquid Cooling',
        description:
          'High-density 800V SiC MOSFET switching modules operating at 40 kHz switching frequency to eradicate switching loss and heat buildup during extended dynamic driving.',
        xPercent: 54,
        yPercent: 36,
      },
      {
        id: 'drive-3',
        number: 3,
        title: 'Direct Oil Stator Cooling Conduits',
        technicalLead: 'Internal In-Slot Jet Lubrication',
        description:
          'Dielectric synthetic coolant sprayed directly onto copper hairpin stator ends, maintaining copper core temperatures under 72°C during repetitive maximum-power acceleration.',
        xPercent: 68,
        yPercent: 56,
      },
      {
        id: 'drive-4',
        number: 4,
        title: 'Active Dynamic Torque Vectoring Differential',
        technicalLead: 'Sub-Millisecond Axle Force Biasing',
        description:
          'Predictive multi-axis sensor fusion distributes precise micro-torque differentials across left and right tires, preempting understeer and carving pure apex paths.',
        xPercent: 41,
        yPercent: 68,
      },
    ],
  },
  battery: {
    id: 'battery',
    title: 'Cell-to-Pack Battery Architecture',
    kicker: 'SYSTEM SPECIMEN 02',
    tagline: '800V Stressed Structural Monocoque Energy Core',
    technicalBadge: '118 KWH USABLE // 350 KW DC HIGH-C CHARGING',
    driverBenefit:
      'Endurance meets uncompromised balance. An ultra-low center of gravity (360 mm) planted below the wheel centerlines virtually eliminates body roll, providing 680 km of real-world gran turismo range with repeatable thermal resilience.',
    image: '/src/assets/images/veyra_battery_cutaway_1791208753016.jpg',
    filmClipType: 'cells',
    specs: [
      { label: 'Pack Voltage', value: '800V Native System' },
      { label: 'Usable Capacity', value: '118.4 kWh' },
      { label: 'Fast Charge 10-80%', value: '15 Minutes (350 kW)' },
      { label: 'Torsional Stiffness', value: '54,000 Nm/deg' },
    ],
    annotations: [
      {
        id: 'battery-1',
        number: 1,
        title: 'Structural Carbon Composite Tub',
        technicalLead: 'Monocoque Stressed Integration',
        description:
          'The battery casing forms the bottom structural floor of the vehicle passenger cell, increasing overall chassis torsional rigidity by 42% while discarding redundant framing weight.',
        xPercent: 28,
        yPercent: 38,
      },
      {
        id: 'battery-2',
        number: 2,
        title: 'High-Nickel Cylindrical 4680 Matrix',
        technicalLead: 'Tabless Electrode Volumetric Density',
        description:
          'Over 4,200 precision cylindrical cells arranged with optimized internal current paths, slashing internal electrical resistance to support extreme 4C charge and discharge rates.',
        xPercent: 49,
        yPercent: 52,
      },
      {
        id: 'battery-3',
        number: 3,
        title: 'Cryo-Dielectric Thermal Serpentine Plates',
        technicalLead: 'Dual-Circuit Bottom and Inter-Cell Cooling',
        description:
          'Extruded micro-channel aluminum plates flowing non-conductive glycol coolant maintain pack thermal gradient within 1.5°C across all modules, even under continuous track-mode pacing.',
        xPercent: 72,
        yPercent: 45,
      },
      {
        id: 'battery-4',
        number: 4,
        title: 'Integrated 350 kW High-Current Interconnect',
        technicalLead: 'Solid Copper Low-Impedance Busway',
        description:
          'Ultrasonically welded silver-plated busbars eliminate resistive bottlenecks, allowing consistent 350 kW charging to replenish 350 km of highway range in under 10 minutes.',
        xPercent: 62,
        yPercent: 69,
      },
    ],
  },
};

export const FLEET_CARS: FleetCar[] = [
  {
    id: 'obsidian-gt',
    name: 'Obsidian GT',
    tagline: 'The Midnight Gran Turismo',
    description:
      'Engineered for stealth and relentless intercontinental pace. Carbon-ceramic composite brakes nestled within aero-flow blades, enveloped in obsidian crystal metallic paint with electric green aerodynamic accents.',
    evBadge: 'DUAL MOTOR AWD // 800V ARCHITECTURE',
    studioImage: '/src/assets/images/fleet_obsidian_gt_1791208764433.jpg',
    colorTheme: {
      primary: '#10B981',
      border: 'border-emerald-500/30',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.15)]',
      text: 'text-emerald-400',
      badgeBg: 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40',
    },
    stats: {
      powerKw: 780,
      hp: 1046,
      zeroToHundred: 2.4,
      rangeKm: 620,
      topSpeedKmh: 320,
      batteryCapacityKwh: 120,
      voltage: 800,
    },
    features: [
      'Twin SiC Inverters with 1,220 Nm torque output',
      'Active magnetic ride dampers with 1,000 Hz road scanning',
      'Carbon-Kevlar floor tunnels with ground effect venturis',
      'Quad-zone micro-climate cockpit with active acoustic nulling',
    ],
  },
  {
    id: 'aero-s',
    name: 'Aero S',
    tagline: 'Pure Aerodynamic Elegance',
    description:
      'The pinnacle of low-drag grand touring. Active floor tunnels and a fluid teardrop canopy deliver an industry-leading 0.188 drag coefficient, finished in iridescent pearl white over sky blue aero elements.',
    evBadge: 'EFFICIENCY PRO GRAND TOURER',
    studioImage: '/src/assets/images/fleet_aero_s_1791208779550.jpg',
    colorTheme: {
      primary: '#38BDF8',
      border: 'border-sky-500/30',
      glow: 'shadow-[0_0_30px_rgba(56,189,248,0.15)]',
      text: 'text-sky-400',
      badgeBg: 'bg-sky-950/40 text-sky-300 border-sky-800/40',
    },
    stats: {
      powerKw: 640,
      hp: 858,
      zeroToHundred: 2.8,
      rangeKm: 700,
      topSpeedKmh: 290,
      batteryCapacityKwh: 112,
      voltage: 800,
    },
    features: [
      'Record-breaking 0.188 Cd laminar airflow silhouette',
      'Active motorized rear diffuser extending at 110 km/h',
      'Solar-embedded roof glass replenishing auxiliary 12V systems',
      'Ultra-dense cell chemistry optimized for long-range cruising',
    ],
  },
  {
    id: 'velocity-r',
    name: 'Velocity R',
    tagline: 'Unrestricted Track Supremacy',
    description:
      'Bespoke track-focused machine featuring an active carbon dual-plane rear wing, dual-element front splitter, and dedicated torque vectoring across three silicon carbide inverters finished in vibrant lime green.',
    evBadge: 'TRI-MOTOR TRACK SPEC',
    studioImage: '/src/assets/images/fleet_velocity_r_1791208792337.jpg',
    colorTheme: {
      primary: '#A3E635',
      border: 'border-lime-500/30',
      glow: 'shadow-[0_0_30px_rgba(163,230,53,0.15)]',
      text: 'text-lime-400',
      badgeBg: 'bg-lime-950/40 text-lime-300 border-lime-800/40',
    },
    stats: {
      powerKw: 950,
      hp: 1274,
      zeroToHundred: 2.1,
      rangeKm: 480,
      topSpeedKmh: 350,
      batteryCapacityKwh: 105,
      voltage: 900,
    },
    features: [
      'Triple-motor architecture with independent rear wheel drive',
      'Dry-sump direct liquid nitrogen flash cooling loop',
      'Generates 850 kg of downforce at 250 km/h',
      'Center-lock forged magnesium wheels with track slicks',
    ],
  },
];
