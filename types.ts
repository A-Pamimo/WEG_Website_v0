export interface Service {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: 'Chart' | 'FileText' | 'Compass';
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  deliverables: string[];
  outcomes: { label: string; value: string }[];
  timeline: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  category: string;
  content: string; // Simplified markdown/text for this demo
  author: string;
}

export type PageView = 'home' | 'services' | 'work' | 'about' | 'insights' | 'contact' | 'privacy' | 'terms';