export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  message: string;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}