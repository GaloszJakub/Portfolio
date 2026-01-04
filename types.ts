export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  color: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  videoUrl?: string; // Using image placeholders for demo
}

export interface Review {
  id: string;
  client: string;
  company: string;
  text: string;
  x: number;
  y: number;
}
