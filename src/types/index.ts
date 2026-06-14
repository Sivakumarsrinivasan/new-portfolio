export interface SkillGroup {
  category: string;
  icon: string;
  color: "purple" | "teal" | "blue" | "amber";
  items: string[];
}

export interface Job {
  company: string;
  role: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export interface Project {
  title: string;
  icon: string;
  company: string;
  tech: string[];
  color: "purple" | "teal" | "blue";
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  gpa: string;
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href: string | null;
}
