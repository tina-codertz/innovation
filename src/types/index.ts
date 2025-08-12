export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'core' | 'mentors' | 'coordinator' | 'member';
  image?: string; // for core, mentors, coordinators
  images?: string[]; // for members
  email?: string;
  linkedin?: string;
  bio: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: 'ongoing' | 'completed' | 'upcoming';
  date: string;
  type: 'project' | 'event';
  registrationLink?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  description: string;
}

export interface Language {
  code: 'en' | 'sw';
  name: string;
  flag: string;
}