export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image?: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
  category: 'infrastructure' | 'backend' | 'fullstack' | 'devops' | 'systems';
  impact?: string;
  role?: string;
  date?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: number;
  tags: string[];
  featured: boolean;
  image?: string;
}

export interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  technologies: string[];
  achievements?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
