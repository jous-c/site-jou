export type PlaygroundColSpan = 2 | 3 | 4;

export interface PlaygroundItem {
  title: string;
  description: string;
  tools?: string;
  year: string;
  src: string;
  alt: string;
  colSpan: PlaygroundColSpan;
  aspect: string;
}

export const playgroundItems: PlaygroundItem[] = [
  {
    title: 'Tree and time',
    description:
      'Screen-based installation revealing lives and quality of life sentiment in Red Hook, Brooklyn.',
    tools: 'Processing / Raspberry Pi / LCD screen / 3D Print',
    year: '2025',
    src: '/images/playground/tree-and-time.jpg',
    alt: 'Leaf-shaped screen resting on a tree stump, showing a circular quality-of-life visualization.',
    colSpan: 3,
    aspect: '878 / 1019',
  },
  {
    title: 'Desire path radio',
    description: 'Site design for Brooklyn based radio station.',
    tools: 'Collaboration / Figma / React / Next.js',
    year: '2025',
    src: '/images/playground/desire-path-radio.mp4',
    alt: 'Desire Path Radio website, with a dotted waveform and On-Air programming.',
    colSpan: 4,
    aspect: '2848 / 1550',
  },
  {
    title: 'VelloHealth',
    description: 'Site design and build for community behavioral health program',
    year: '2024',
    src: '/images/playground/vellohealth-site-design.mp4',
    alt: 'VelloHealth website design.',
    colSpan: 4,
    aspect: '2848 / 1550',
  },
  {
    title: 'Vapor',
    description: 'Pinterest-like site for storing all your youtube videos.',
    tools: 'Javascript / React / Node.js',
    year: '2024',
    src: '/images/playground/Vapor-thumbnail.avif',
    alt: 'Vapor website design.',
    colSpan: 3,
    aspect: '2048 / 1288',
  },
  {
    title: 'Drift',
    description: 'Lighting device with a gentle sequence to guide breathing.',
    tools: 'CNC cork body / Polypropylene / Light bulb / Arduino',
    year: '2019',
    src: '/images/playground/drift.png',
    alt: 'Cork Drift lamp on a bedside table, with annotations for ambient lighting.',
    colSpan: 3,
    aspect: '479 / 299',
  },
  {
    title: 'Portal of Galaxy',
    description: 'AR Projection device concept for Samsung Galaxy.',
    tools: '3D rendering / physical mockup',
    year: '2019',
    src: '/images/playground/portal-of-galaxy.jpg',
    alt: 'Portal of Galaxy AR projection devices in blue and white, with a phone docked in the white unit.',
    colSpan: 3,
    aspect: '1280 / 800',
  },
  {
    title: 'Scooter Prototype',
    description: 'Made for fun in college.',
    tools: '1” metal tube stock / Long board trucks / Foam',
    year: '2018',
    src: '/images/playground/scooter-prototype.jpg',
    alt: 'Yellow seated scooter prototype with longboard trucks, held by a person standing on a striped floor.',
    colSpan: 2,
    aspect: '398 / 501',
  },
];
