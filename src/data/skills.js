import { LuLayoutGrid, LuCode, LuPenTool, LuDatabase, LuServer, LuSmartphone, LuGitBranch, LuZap } from 'react-icons/lu';
import { SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiGit, SiGithub, SiFigma, SiRedux, SiTypescript, SiVite, SiExpress, SiNextdotjs, SiSass } from 'react-icons/si';

export const services = [
  { icon: LuLayoutGrid, title: 'Web Design', desc: 'Mobile-first, pixel-perfect designs using modern layouts, color theory, and typography.' },
  { icon: LuCode, title: 'Frontend Development', desc: 'Interactive, performant applications with React, JavaScript, and modern tooling.' },
  { icon: LuServer, title: 'Backend Development', desc: 'RESTful APIs and server-side logic with Node.js, Express, and database integration.' },
  { icon: LuPenTool, title: 'UI/UX Design', desc: 'User-centered interfaces focused on clarity, accessibility, and delight.' },
  { icon: LuDatabase, title: 'Database Design', desc: 'Efficient MongoDB schemas with Mongoose for scalable data models.' },
  { icon: LuGitBranch, title: 'Version Control', desc: 'Git & GitHub workflows including branching, PRs, and collaborative development.' }
];

export const techStack = [
  { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
  { icon: SiCss, name: 'CSS3', color: '#1572B6' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiRedux, name: 'Redux', color: '#764ABC' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#38B2AC' },
  { icon: SiSass, name: 'Sass', color: '#CC6699' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiExpress, name: 'Express', color: '#888888' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiGithub, name: 'GitHub', color: '#ffffff' },
  { icon: SiVite, name: 'Vite', color: '#646CFF' },
  { icon: SiFigma, name: 'Figma', color: '#F24E1E' }
];

export const skillBars = [
  { name: 'HTML5 / CSS3', level: 95 },
  { name: 'JavaScript (ES6+)', level: 88 },
  { name: 'React.js', level: 85 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Responsive Design', level: 94 },
  { name: 'Node.js / Express', level: 75 },
  { name: 'MongoDB / Mongoose', level: 72 },
  { name: 'TypeScript', level: 70 },
  { name: 'GSAP / Animations', level: 82 },
  { name: 'Git / GitHub', level: 85 }
];

export const testimonials = [
  { quote: "Hamid delivered our restaurant website beyond expectations — clean code, fast, and perfectly responsive. A true professional.", name: "Client", role: "Restaurant Owner" },
  { quote: "Exceptional eye for detail and design. The animations and interactions felt premium and polished.", name: "Mentor", role: "Senior Developer" },
  { quote: "Fast learner with great communication. Would definitely hire again for frontend work.", name: "Client", role: "Startup Founder" }
];
