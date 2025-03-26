export interface Education {
  title: string;
  institution: string;
  period: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    demo: string;
    github: string;
    appStore?: string;
    playStore?: string;
  };
}

export interface SocialLink {
  icon: React.ReactNode;
  url: string;
}

export interface MessageStatus {
  type: string;
  message: string;
}

export interface SectionRef {
  ref: (node?: Element | null) => void;
  inView: boolean;
}

export interface SectionRefs {
  [key: string]: SectionRef;
}
