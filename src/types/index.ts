export interface PaintFinish {
  id: string;
  name: string;
  hex: string;
  accentHex: string;
  description: string;
  reflectance: string;
  coating: string;
  imagePath: string;
}

export interface WheelDesign {
  id: string;
  name: string;
  size: string;
  type: string;
  description: string;
  cdDelta: string;
  massSavings: string;
  aerodynamicBenefit: string;
}

export interface AnnotationPoint {
  id: string;
  number: number;
  title: string;
  technicalLead: string;
  description: string;
  xPercent: number;
  yPercent: number;
}

export interface CutawaySystem {
  id: 'drive' | 'battery';
  title: string;
  kicker: string;
  tagline: string;
  technicalBadge: string;
  driverBenefit: string;
  image: string;
  filmClipType: 'flux' | 'cells';
  annotations: AnnotationPoint[];
  specs: { label: string; value: string }[];
}

export interface FleetCar {
  id: string;
  name: string;
  tagline: string;
  description: string;
  evBadge: string;
  studioImage: string;
  colorTheme: {
    primary: string;
    border: string;
    glow: string;
    text: string;
    badgeBg: string;
  };
  stats: {
    powerKw: number;
    hp: number;
    zeroToHundred: number;
    rangeKm: number;
    topSpeedKmh: number;
    batteryCapacityKwh: number;
    voltage: number;
  };
  features: string[];
}
