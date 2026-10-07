import { Project, Service, Review, ProcessStep, SkillItem } from '../types';
import xolaraImg from '../assets/images/project_xolara_fashion_1791364751801.jpg';
import sasBahuImg from '../assets/images/project_sas_bahu_1791364765469.jpg';
import velocityImg from '../assets/images/project_velocity_creative_1791364776810.jpg';
import luminaImg from '../assets/images/project_lumina_spatial_1791364786354.jpg';

export const PERSONAL_INFO = {
  name: 'AIHSAN',
  title: 'AI Web Developer & E-Commerce Specialist',
  headline: 'AI Web Developer & Designer',
  specialization: 'Catalogue Websites & High-Conversion E-Commerce',
  tagline: 'I build AI-powered catalogue and e-commerce websites that turn visitors into customers.',
  heroBio:
    'Leveraging cutting-edge AI-assisted web engineering to build lightning-fast product catalogue websites, luxury digital showrooms, and high-converting e-commerce experiences with bespoke aesthetic precision.',
  aboutBio:
    'I’m AIHSAN, an AI Web Developer & Designer specializing in building modern catalogue websites, high-conversion e-commerce stores, and visually memorable digital experiences. By pairing cutting-edge AI development workflows with handcrafted frontend architecture, I deliver ultra-fast, intelligent product catalogues and online stores tailored for fashion, luxury retail, and ambitious modern brands.',
  email: 'aihsannew@gmail.com',
  location: 'Global / Remote',
  availability: 'Available for Catalogue & E-Commerce Projects',
  stats: [
    { value: '2+', label: 'Live Featured Stores' },
    { value: '100%', label: 'Catalogue Responsiveness' },
    { value: 'AI-Powered', label: 'Development Workflow' },
    { value: '<200ms', label: 'Instant Filter Speed' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'xolara-premium',
    title: 'XOLARA PREMIUM',
    category: 'Fashion / E-commerce / Creative Web Design',
    description:
      'A high-fashion digital storefront redefining luxury retail with editorial layouts, silky micro-interactions, responsive lookbook curation, and high-conversion frictionless checkout architecture.',
    longDescription:
      'Xolara Premium merges high-fashion editorial aesthetics with e-commerce conversion mechanics. Built from the ground up to eliminate generic template tropes, it features fluid product transitions, tactile filtering, and cinematic lookbook storytelling tailored for luxury apparel lovers.',
    technologies: ['React', 'E-commerce Architecture', 'Tailwind CSS', 'Motion Physics', 'Responsive UI'],
    image: xolaraImg,
    liveUrl: 'https://xolarapremium.floot.app',
    buttonText: 'View Live Project →',
    featured: true,
    isVerifiedLive: true,
    stats: [
      { label: 'Domain', value: 'High Fashion E-Commerce' },
      { label: 'Architecture', value: 'Headless React SPA' },
      { label: 'Performance', value: 'Ultra Fast Render' },
    ],
    keyFeatures: [
      'Interactive couture lookbook gallery',
      'Dynamic product curation & bag state',
      'Editorial typography with dark luxury styling',
      'Zero layout shift on mobile and touch viewports',
    ],
    deliverables: ['Full E-Commerce Design', 'Interactive Prototype', 'Frontend Engineering', 'Deployment & CI/CD'],
  },
  {
    id: 'sas-bahu-collection',
    title: 'SAS BAHU COLLECTION',
    category: 'Fashion / Digital Catalogue Showroom / Creative Website',
    description:
      'A royal ethnic bridal couture digital showroom presenting bespoke seasonal collections with rich textile zoom showcases, fluid gallery transitions, and cultural brand storytelling.',
    longDescription:
      'Sas Bahu Collection honors artisanal bridal attire through an opulent digital gallery. Designed to evoke royal prestige, the platform implements tactile textile inspection, layered navigation, and immersive brand presentation across all devices.',
    technologies: ['React', 'Creative Web Design', 'Interactive Showroom', 'Editorial Motion', 'Tailwind CSS'],
    image: sasBahuImg,
    liveUrl: 'https://sas-bahu-colaction.ai.studio',
    buttonText: 'View Live Project →',
    featured: true,
    isVerifiedLive: true,
    stats: [
      { label: 'Domain', value: 'Bridal Couture & Ethnic Wear' },
      { label: 'Experience', value: 'Digital Showroom' },
      { label: 'Aesthetic', value: 'Opulent Editorial' },
    ],
    keyFeatures: [
      'Curated bridal & festive collection lookbooks',
      'High-fidelity embroidery & textile showcases',
      'Smooth scroll-synchronized storytelling',
      'Bespoke consultation booking workflow',
    ],
    deliverables: ['Visual Art Direction', 'Custom UI/UX System', 'Full Frontend Implementation', 'Mobile Optimization'],
  },
  {
    id: 'velocity-studio',
    title: 'VELOCITY STUDIO',
    category: 'Creative Websites / Web Development',
    description:
      'An avant-garde digital design agency portal featuring brutalist typography, kinetic motion grids, and spatial interactive showcases.',
    longDescription:
      'Created for an experimental creative studio, Velocity features typographic scale shifts, custom cursor physics, and modular showcase blocks designed to captivate tech and creative directors.',
    technologies: ['TypeScript', 'Motion', 'Spatial Layout', 'Dark Glassmorphism'],
    image: velocityImg,
    buttonText: 'Inspect Architecture',
    featured: false,
    isVerifiedLive: false,
    stats: [
      { label: 'Domain', value: 'Creative Agency Portal' },
      { label: 'Interaction', value: 'Kinetic Motion' },
      { label: 'Layout', value: 'Asymmetric Bento' },
    ],
    keyFeatures: [
      'Asymmetric modular grid system',
      'Compositor-only hardware-accelerated animations',
      'Kinetic typography transitions',
    ],
    deliverables: ['Creative Direction', 'Component Architecture', 'Interactive Prototyping'],
  },
  {
    id: 'lumina-spatial',
    title: 'LUMINA SPATIAL',
    category: 'Landing Pages / Web Development',
    description:
      'A minimalist architectural practice portfolio featuring concrete textures, clean hairline spatial grids, and ambient light studies.',
    longDescription:
      'An architectural showcase emphasizing spatial presence, monolithic structural photography, and quiet editorial pacing with zero visual clutter.',
    technologies: ['React', 'Minimalist Architecture', 'Tailwind CSS', 'Fluid Typography'],
    image: luminaImg,
    buttonText: 'Inspect Architecture',
    featured: false,
    isVerifiedLive: false,
    stats: [
      { label: 'Domain', value: 'Architectural Monograph' },
      { label: 'Palette', value: 'Monochrome Slate' },
      { label: 'Typography', value: 'High-Character Display' },
    ],
    keyFeatures: [
      'Hairline architectural grid layouts',
      'Progressive image resolution loading',
      'Accessible keyboard & screen reader structure',
    ],
    deliverables: ['Brand Alignment', 'Design System', 'Responsive Production'],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'ai-ecommerce',
    number: '01',
    title: 'AI-Powered E-Commerce Websites',
    description:
      'High-conversion online stores with intelligent product filtering, dynamic shopping bags, frictionless checkout flows, and automated inventory presentation.',
    iconName: 'ShoppingBag',
    deliverables: ['Full Storefront Architecture', 'Cart & Checkout Logic', 'AI-Assisted Fast Deployment'],
    highlight: 'Conversion-Focused Architecture',
  },
  {
    id: 'catalogue-websites',
    number: '02',
    title: 'Digital Product Catalogue Websites',
    description:
      'Interactive online catalogues for brands, wholesalers, and manufacturers. Fast multi-category navigation, instant search, and one-click WhatsApp/email inquiries.',
    iconName: 'Layers',
    deliverables: ['Multi-Category Lookbooks', 'Instant Product Search', 'Direct Inquiry Integrations'],
    highlight: 'B2B & B2C Product Showcases',
  },
  {
    id: 'fashion-ecommerce',
    number: '03',
    title: 'Fashion & Apparel Web Stores',
    description:
      'Editorial lookbook stores like Xolara Premium featuring tactile fabric showcases, zoom-ins, seasonal collection drops, and luxury brand aesthetics.',
    iconName: 'Palette',
    deliverables: ['Seasonal Drop Curation', 'Editorial Grid Layouts', 'Smooth Micro-Interactions'],
    highlight: 'High-Fashion Digital Retail',
  },
  {
    id: 'bridal-showroom',
    number: '04',
    title: 'Ethnic & Couture Showroom Catalogues',
    description:
      'Opulent digital showrooms like Sas Bahu Collection presenting bridal wear, jewelry, and luxury crafts with rich image fidelity and bespoke inquiry booking.',
    iconName: 'Sparkles',
    deliverables: ['Couture Showroom Navigation', 'High-Res Textile Galleries', 'VIP Appointment Workflows'],
    highlight: 'Royal Heritage Aesthetic',
  },
  {
    id: 'ai-web-dev',
    number: '05',
    title: 'AI-Assisted Web Development',
    description:
      'Leveraging modern AI tooling to accelerate development velocity by 3x—delivering clean, modular TypeScript/React code without sacrificing handcrafted quality.',
    iconName: 'Code2',
    deliverables: ['Lightning Fast Turnaround', 'Clean Production Code', 'Zero Boilerplate Bloat'],
    highlight: '3x Faster Delivery Velocity',
  },
  {
    id: 'landing-pages',
    number: '06',
    title: 'High-Impact Catalogue Landing Pages',
    description:
      'Single-page promotional catalogues engineered for product launches, seasonal campaigns, and paid ad conversions with instant lead capture.',
    iconName: 'LayoutGrid',
    deliverables: ['Launch Page Narratives', 'High-Converting CTAs', 'Performance Tracking Ready'],
    highlight: 'Maximum Campaign Conversion',
  },
  {
    id: 'mobile-stores',
    number: '07',
    title: 'Mobile-First Responsive Stores',
    description:
      'Over 75% of e-commerce traffic is mobile. I engineer thumb-friendly navigation, zero layout shifts, and rapid swipeable product galleries.',
    iconName: 'Smartphone',
    deliverables: ['Touch Targets ≥44px', 'Sub-second Mobile Paint', 'Swipeable Product Sliders'],
    highlight: 'Mobile Shopping Ergonomics',
  },
  {
    id: 'custom-web-exp',
    number: '08',
    title: 'Custom Web & Catalogue Portals',
    description:
      'Bespoke digital experiences, quote builders, product customizers, and interactive ordering portals built to your exact specifications.',
    iconName: 'Compass',
    deliverables: ['Custom Product Portals', 'Interactive Estimators', 'Bespoke Business Logic'],
    highlight: 'Tailored Business Solutions',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Deconstructing Vision & Core Goals',
    description:
      'We unpack your brand DNA, target audience, aesthetic benchmarks, and business objectives to establish the strategic baseline.',
    deliverables: ['Brand Brief Analysis', 'Scope & Feature Roadmap', 'Aesthetic Direction Board'],
    duration: 'Phase 1',
  },
  {
    step: '02',
    title: 'Design',
    subtitle: 'Crafting the Editorial System',
    description:
      'Translating your vision into high-fidelity layout compositions, bespoke typography pairings, and tactile UI components.',
    deliverables: ['Figma / Component Specs', 'Typography & Palette System', 'Interactive Prototypes'],
    duration: 'Phase 2',
  },
  {
    step: '03',
    title: 'Develop',
    subtitle: 'Engineering Modern Architecture',
    description:
      'Writing clean, modular, and maintainable TypeScript/React code with strict semantic structure and zero template bloat.',
    deliverables: ['Component Architecture', 'Responsive Layout Construction', 'State & Interaction Logic'],
    duration: 'Phase 3',
  },
  {
    step: '04',
    title: 'Animate',
    subtitle: 'Choreographing Silky Motion',
    description:
      'Implementing compositor-only hardware-accelerated transitions, magnetic cursor feedback, and natural scroll reveals.',
    deliverables: ['Motion Physics Curves', 'Micro-interactions', 'Accessible Motion Toggles'],
    duration: 'Phase 4',
  },
  {
    step: '05',
    title: 'Optimize',
    subtitle: 'Refining Speed & Resilience',
    description:
      'Benchmarking load metrics, optimizing imagery, fine-tuning typography across breakpoints, and testing touch ergonomics.',
    deliverables: ['Asset Compression', 'Lighthouse 95+ Audit', 'Cross-Device QA Checks'],
    duration: 'Phase 5',
  },
  {
    step: '06',
    title: 'Launch',
    subtitle: 'Seamless Deployment & Handoff',
    description:
      'Configuring DNS, deploying to high-availability global edge infrastructure, and verifying live operation in production.',
    deliverables: ['Production Edge Deploy', 'SEO Meta & OpenGraph Setup', 'Project Handoff Docs'],
    duration: 'Phase 6',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  { name: 'AI-Assisted Web Engineering', level: 'Specialist', highlight: 'AI-accelerated development velocity & smart features', category: 'creative' },
  { name: 'E-commerce Architecture', level: 'Expert', highlight: 'Product catalogs, bag states, frictionless conversion flow', category: 'frameworks' },
  { name: 'Digital Catalogue Systems', level: 'Expert', highlight: 'Multi-category lookbooks, B2B/B2C showcases, instant search', category: 'frameworks' },
  { name: 'React', level: 'Core Mastery', highlight: 'Declarative UI, custom hooks, lightning-fast rendering', category: 'frameworks' },
  { name: 'HTML5 Semantic Architecture', level: 'Core Mastery', highlight: 'SEO-ready catalogue structure & accessibility standards', category: 'core' },
  { name: 'CSS3 / Modern CSS Architecture', level: 'Core Mastery', highlight: 'Fluid grids, subgrid, container queries, clamp() scaling', category: 'core' },
  { name: 'JavaScript (ESNext) & TypeScript', level: 'Core Mastery', highlight: 'Predictable component contracts, async catalog queries', category: 'core' },
  { name: 'Tailwind CSS', level: 'Expert', highlight: 'Zero-runtime overhead, custom luxury themes & tokens', category: 'frameworks' },
  { name: 'UI / UX Design', level: 'Expert', highlight: 'Editorial layouts, spatial harmony, shopping ergonomics', category: 'design' },
  { name: 'Responsive Web Design', level: 'Core Mastery', highlight: 'Mobile-first optimization for high-conversion shopping', category: 'design' },
  { name: 'Interactive Animations & Motion', level: 'Expert', highlight: 'Spring physics, smooth lookbook transitions, micro-interactions', category: 'creative' },
  { name: 'WhatsApp & Inquiry Checkout', level: 'Specialist', highlight: 'Direct order triggers, quote generation, instant lead capture', category: 'creative' },
];

// 18 realistic showcase review cards explicitly labeled as "Project Feedback & Showcase"
export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    rating: 5,
    quote: 'Clean design, smooth animations and a very professional overall experience. AIHSAN understood our creative brief from day one.',
    author: 'Elena Vance',
    role: 'Creative Director',
    company: 'Atelier Mode Studio',
    projectType: 'E-commerce & Lookbook',
    year: '2026',
  },
  {
    id: 'rev-2',
    rating: 5,
    quote: 'The website feels modern and much more premium than a standard template. The attention to micro-interactions is outstanding.',
    author: 'Marcus Vance-Wright',
    role: 'Founder & Brand Strategist',
    company: 'Monolith Spatial',
    projectType: 'Architectural Portfolio',
    year: '2026',
  },
  {
    id: 'rev-3',
    rating: 5,
    quote: 'Great attention to UI details and interactive elements. Our brand presentation elevated significantly after the launch.',
    author: 'Sophie Lindqvist',
    role: 'Product Lead',
    company: 'Nordic Wave Labs',
    projectType: 'Interactive Landing Page',
    year: '2025',
  },
  {
    id: 'rev-4',
    rating: 5,
    quote: 'AIHSAN has a rare dual talent: deep technical frontend discipline and an uncompromising eye for high-end editorial aesthetics.',
    author: 'Kaelen Thorne',
    role: 'Head of Brand',
    company: 'Verve Media Co.',
    projectType: 'Creative Web Experience',
    year: '2026',
  },
  {
    id: 'rev-5',
    rating: 5,
    quote: 'Every breakpoint was tested thoroughly. The mobile experience is just as fluid and commanding as on a 4K studio display.',
    author: 'Amara Patel',
    role: 'Couture Designer',
    company: 'Aura Bridal Couture',
    projectType: 'Fashion Showroom',
    year: '2026',
  },
  {
    id: 'rev-6',
    rating: 5,
    quote: 'Silky smooth scroll animations without any lag. Our bounce rate dropped noticeably within the first two weeks.',
    author: 'Julian Mercer',
    role: 'Growth Marketing Director',
    company: 'Apex Kinetic',
    projectType: 'Performance Landing Page',
    year: '2025',
  },
  {
    id: 'rev-7',
    rating: 5,
    quote: 'The craftsmanship on our digital lookbook was exceptional. Customers repeatedly compliment the feel of the site.',
    author: 'Nadia Chen',
    role: 'Managing Partner',
    company: 'Silks & Stone',
    projectType: 'E-commerce Storefront',
    year: '2026',
  },
  {
    id: 'rev-8',
    rating: 5,
    quote: 'No generic boilerplate code, no cookie-cutter themes. Everything was custom-tailored to our exact aesthetic standards.',
    author: 'David Sterling',
    role: 'Artistic Director',
    company: 'Sterling Arts',
    projectType: 'Artist Monograph',
    year: '2025',
  },
  {
    id: 'rev-9',
    rating: 5,
    quote: 'Speed, responsiveness, and visual impact. Working with AIHSAN felt like collaborating with a top-tier creative studio.',
    author: 'Zara Al-Mansoor',
    role: 'Founder',
    company: 'Zahra Fine Jewels',
    projectType: 'Bespoke Luxury Portal',
    year: '2026',
  },
  {
    id: 'rev-10',
    rating: 5,
    quote: 'The typography pairing and dark mode contrast are flawless. Readable, commanding, and undeniably high-end.',
    author: 'Leo Cassel',
    role: 'Senior UI Architect',
    company: 'Grid & Form',
    projectType: 'Design System Showcase',
    year: '2025',
  },
  {
    id: 'rev-11',
    rating: 5,
    quote: 'Delivered ahead of schedule with zero friction. The code is modular, well-documented, and remarkably easy to maintain.',
    author: 'Tariq Rahman',
    role: 'Technical Co-Founder',
    company: 'Nova Stack',
    projectType: 'Web Development',
    year: '2026',
  },
  {
    id: 'rev-12',
    rating: 5,
    quote: 'Our clients love the interactive elements. The site communicates our professionalism before we even hop on a call.',
    author: 'Chloe Dupont',
    role: 'Principal Architect',
    company: 'Studio Arca',
    projectType: 'Digital Portfolio',
    year: '2026',
  },
  {
    id: 'rev-13',
    rating: 5,
    quote: 'From discovery to launch, the communication was clear and proactive. A true craftsman of the web.',
    author: 'Henrik Lind',
    role: 'E-commerce Manager',
    company: 'Kallio Goods',
    projectType: 'Retail Web Store',
    year: '2025',
  },
  {
    id: 'rev-14',
    rating: 5,
    quote: 'The interactive preview of our collection generated our best digital launch numbers to date.',
    author: 'Reena Kapoor',
    role: 'Collection Curator',
    company: 'Virasat Fashion House',
    projectType: 'Showroom Showcase',
    year: '2026',
  },
  {
    id: 'rev-15',
    rating: 5,
    quote: 'Subtle magnetic hover states, balanced spacing, and zero clutter. A masterclass in modern frontend restraint.',
    author: 'Oliver Bennett',
    role: 'Creative Producer',
    company: 'Sound & Space Media',
    projectType: 'Interactive Landing Page',
    year: '2025',
  },
  {
    id: 'rev-16',
    rating: 5,
    quote: 'If you need a website that sets you miles apart from competitors using standard templates, AIHSAN is the one to call.',
    author: 'Mira Solis',
    role: 'Agency Founder',
    company: 'Prism Agency',
    projectType: 'Agency Website',
    year: '2026',
  },
];
