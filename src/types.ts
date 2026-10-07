export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  buttonText: string;
  featured: boolean;
  isVerifiedLive: boolean;
  stats?: {
    label: string;
    value: string;
  }[];
  keyFeatures?: string[];
  deliverables?: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  highlight: string;
}

export interface Review {
  id: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  projectType: string;
  year: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface SkillItem {
  name: string;
  level: 'Core Mastery' | 'Advanced' | 'Expert' | 'Specialist';
  highlight: string;
  category: 'core' | 'frameworks' | 'design' | 'creative';
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}
