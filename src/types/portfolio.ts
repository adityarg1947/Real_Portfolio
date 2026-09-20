export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  category: string;
  status: 'Completed' | 'In Development' | 'Explored';
  statusColor: 'emerald' | 'amber' | 'sky';
  techStack: string[];
  gradient: string;
  iconName: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface TechItem {
  name: string;
  category: 'Languages' | 'Backend & DB' | 'Cloud & Systems' | 'Frontend & Tools';
  icon: string;
  badgeText: string;
  accentColor?: string;
}

export interface JourneyMilestone {
  step: string;
  yearOrCategory: string;
  title: string;
  subtitle: string;
  description: string;
  badgeLabel: string;
  icon: string;
  color: string;
}

export interface MindsetPrinciple {
  number: number;
  title: string;
  explanation: string;
  icon: string;
  accentColor: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  location: string;
  status: string;
  details: string;
  accentColor: string;
}

export interface GithubUserData {
  username: string;
  name: string;
  bio: string;
  publicRepos: number;
  followers: number;
  following: number;
  profileUrl: string;
  avatarUrl?: string;
}
