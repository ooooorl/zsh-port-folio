export interface CommandOutput {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: Date;
}

export interface TerminalCommand {
  name: string;
  description: string;
  execute: () => React.ReactNode;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  website?: string;
  about: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  experience: {
    title: string;
    company: string;
    period: string;
    description: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    description?: string;
  }[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
  }[];
}
