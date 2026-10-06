import { LuGlobe, LuTrophy, LuZap, LuSmartphone, LuHeart, LuSparkles, LuBookOpen, LuFileText, LuWand, LuRocket, LuGitBranch, LuGitMerge, LuBug, LuStar, LuAward, LuCode } from 'react-icons/lu';

const colorMap = {
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-500', border: 'border-emerald-500/20' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-500', border: 'border-blue-500/20' },
  amber: { bg: 'bg-amber-500/10', text: 'text-amber-500', border: 'border-amber-500/20' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-500', border: 'border-purple-500/20' },
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-500', border: 'border-cyan-500/20' },
  rose: { bg: 'bg-rose-500/10', text: 'text-rose-500', border: 'border-rose-500/20' },
  teal: { bg: 'bg-teal-500/10', text: 'text-teal-500', border: 'border-teal-500/20' },
  indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-500', border: 'border-indigo-500/20' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-500', border: 'border-orange-500/20' },
  lime: { bg: 'bg-lime-500/10', text: 'text-lime-500', border: 'border-lime-500/20' },
  yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-500', border: 'border-yellow-500/20' },
  pink: { bg: 'bg-pink-500/10', text: 'text-pink-500', border: 'border-pink-500/20' },
  sky: { bg: 'bg-sky-500/10', text: 'text-sky-500', border: 'border-sky-500/20' },
  violet: { bg: 'bg-violet-500/10', text: 'text-violet-500', border: 'border-violet-500/20' }
};

const achievements = [
  { icon:LuGlobe, color:colorMap.emerald, title:'30+ Responsive Websites', description:'Designed and deployed over 30 responsive websites and web applications.' },
  { icon:LuCode, color:colorMap.blue, title:'Portfolio Website Launched', description:'Built and launched this personal portfolio to showcase projects and skills.' },
  { icon:LuTrophy, color:colorMap.amber, title:'50+ Coding Challenges', description:'Completed 50+ challenges on HackerRank and CodePen.' },
  { icon:LuZap, color:colorMap.purple, title:'JavaScript & API Projects', description:'Built dynamic applications using JavaScript and REST APIs.' },
  { icon:LuSmartphone, color:colorMap.cyan, title:'Mobile-First Mastery', description:'Fully adopted mobile-first responsive design methodology.' },
  { icon:LuHeart, color:colorMap.rose, title:'Positive Client Feedback', description:'Consistent positive feedback on UI, communication, and delivery.' },
  { icon:LuSparkles, color:colorMap.teal, title:'Clean Code Practices', description:'Clean code: meaningful names, DRY, modular components, consistent formatting.' },
  { icon:LuBookOpen, color:colorMap.indigo, title:'Consistent Learning', description:'Maintained a daily learning schedule for over 2 years.' },
  { icon:LuFileText, color:colorMap.orange, title:'14 Blog Articles', description:'Published 14+ educational articles helping beginners learn web dev.' },
  { icon:LuWand, color:colorMap.lime, title:'CSS Animation Expertise', description:'Mastered CSS animations, transitions, and scroll-based effects.' },
  { icon:LuRocket, color:colorMap.yellow, title:'Fast Learning Recognition', description:'Recognized by mentors for rapid skill progression and fast delivery.' },
  { icon:LuGitBranch, color:colorMap.pink, title:'Open-Source Contributions', description:'Contributed to open-source repos and shared code for other learners.' },
  { icon:LuGitMerge, color:colorMap.sky, title:'Git/GitHub Proficient', description:'Proficient with branching, merging, rebasing, and collaborative workflows.' },
  { icon:LuBug, color:colorMap.emerald, title:'Strong Debugging Skills', description:'Systematic debugging with dev tools, console methods, and testing.' },
  { icon:LuAward, color:colorMap.violet, title:'Certifications Earned', description:'Certifications in React, JavaScript, and responsive web design.' },
  { icon:LuStar, color:colorMap.amber, title:'5-Star Projects', description:'Projects received 5-star feedback from the developer community.' }
];
export default achievements;
