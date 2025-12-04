export interface BookingFormData {
  name: string;
  contact: string;
  date: Date;
  timeSlot: string;
  message?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  badge?: string;
  features: string[];
  highlight: boolean;
}

export interface Testimonial {
  id: number;
  image: string;
  alt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ValueProp {
  title: string;
  subtitle: string;
  description: string;
}

export interface CounselorInfo {
  name: string;
  title: string;
  credentials: string;
  capabilities: string[];
  closingMessage: string;
  photo: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  whatsappNumber: string;
  email: string;
  instagram: string;
  instagramUrl: string;
  address: string;
}

export interface HeroContent {
  headline: string;
  valueProps: string[];
  supportingText: string;
  image: string;
}
