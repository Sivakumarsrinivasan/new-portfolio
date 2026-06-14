import type { SkillGroup, Job, Project, Education, ContactItem } from "../types";

export const profile = {
  name: "S. Sivakumar",
  role: "React Web Developer",
  location: "Chennai, Tamil Nadu",
  phone: "8939014386",
  email: "ssivakumar.dev@gmail.com",
  linkedin: "https://linkedin.com/in/siva-kumar-9b9501213",
  summary:
    "Detail-oriented Software Engineer with 3+ years of professional experience specializing in building scalable, high-performance applications using React, Node.js, and Angular. Proven expertise across the React ecosystem, including Redux, Zustand, Context API, Custom Hooks, TanStack Query, and Material UI. Competent in building secure full-stack integrations using Express.js and JWT authentication.",
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend Ecosystem",
    icon: "⚛️",
    color: "purple",
    items: ["React", "Redux", "Zustand", "Context API", "Custom Hooks", "TanStack Query", "Angular", "React Router"],
  },
  {
    category: "Languages & UI",
    icon: "🎨",
    color: "blue",
    items: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Material UI", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend & Databases",
    icon: "🛠️",
    color: "teal",
    items: ["Node.js", "Express.js", "JWT Authentication", "RESTful APIs", "MySQL", "Axios"],
  },
  {
    category: "Tools & Methods",
    icon: "🔧",
    color: "amber",
    items: ["Git", "Jira", "Agile/Scrum", "Performance Optimization", "Unit Testing", "RxJS"],
  },
];

export const experience: Job[] = [
  {
    company: "Valeo",
    role: "Software Engineer Contractor",
    period: "Jun 2025 – Jun 2026",
    current: true,
    bullets: [
      "Optimized application performance using advanced Redux concepts, managing complex normalized state structures and asynchronous middleware.",
      "Architected reusable Custom Hooks and leveraged Context API alongside TanStack Query to manage global client state and cache server responses effectively.",
      "Implemented dynamic client-side routing with React Router and built polished, responsive web layouts using Material UI and Tailwind CSS.",
      "Integrated internal generative AI tools into production environments with secure API communication via Axios.",
    ],
  },
  {
    company: "Revolution Games India",
    role: "Software Developer",
    period: "Nov 2022 – Dec 2024",
    current: false,
    bullets: [
      "Developed and maintained robust Angular applications, utilizing lifecycle hooks to optimize component lifecycle and DOM memory management.",
      "Designed complex parameterized routing architectures and handled inter-component communication via RxJS reactive programming patterns.",
      "Integrated frontend architectures with secure Node.js and Express.js endpoints protected by JWT authentication layers.",
      "Maintained, tested, and debugged high-traffic single-page systems while establishing test coverage via automated Angular utility files.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "LEA – Valeo AI Portal",
    icon: "🤖",
    company: "Valeo",
    tech: ["React", "Tailwind CSS", "Axios", "GenAI"],
    color: "purple",
    description:
      "Internal AI-powered secure web portal leveraging generative AI technologies to guide engineers through internal standards and design workflows.",
    highlights: [
      "Embedded automotive frameworks (QRQC, PDCA, FMEA) and metrics (OEE, CPI/SPI) for rapid production querying.",
      "Automated analysis of complex manufacturing datasets, project performance indicators, and operational methodologies.",
    ],
  },
  {
    title: "Play Revolution – Online Gaming Hub",
    icon: "🎮",
    company: "Revolution Games India",
    tech: ["React", "Material UI", "Bootstrap", "react-unity-webgl"],
    color: "teal",
    description:
      "Online platform hosting over 100 titles by integrating Unity WebGL builds seamlessly into a responsive React and Material UI architecture.",
    highlights: [
      "Achieved seamless Unity WebGL integration within a React environment.",
      "Designed responsive layouts with Material UI and Bootstrap for cross-device compatibility.",
    ],
  },
  {
    title: "Plannotate 3 – Civil Application",
    icon: "🏗️",
    company: "Revolution Games India",
    tech: ["Angular", "TypeScript", "Canvas API"],
    color: "blue",
    description:
      "Specialized civil engineering drawing interface to plot structural annotations directly on imagery and manage client-side interactive data layers.",
    highlights: [
      "Built interactive annotation tooling on top of image layers for civil drawings.",
      "Managed dynamic client-side data layers for real-time collaboration.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "B.Sc. in Computer Science",
    school: "Agurchand Manmull Jain College",
    year: "2019 – 2022",
    gpa: "83%",
  },
  {
    degree: "HSC",
    school: "Sri Ahobila Math Oriental High Sec School",
    year: "2019",
    gpa: "71%",
  },
  {
    degree: "SSLC",
    school: "Sri Sankara Vidhyalaya High Sec School",
    year: "2017",
    gpa: "86%",
  },
];

export const contactItems: ContactItem[] = [
  { icon: "✉️", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "📞", label: "Phone", value: profile.phone, href: `tel:+91${profile.phone}` },
  { icon: "📍", label: "Location", value: profile.location, href: null },
  { icon: "💼", label: "LinkedIn", value: "siva-kumar-9b9501213", href: profile.linkedin },
];
