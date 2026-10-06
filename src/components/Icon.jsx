import * as Lu from 'react-icons/lu';
import * as Si from 'react-icons/si';

const iconMap = {
  // Navigation & UI
  LuCode: Lu.LuCode, LuMenu: Lu.LuMenu, LuX: Lu.LuX, LuArrowRight: Lu.LuArrowRight, LuSend: Lu.LuSend,
  LuChevronUp: Lu.LuChevronUp, LuChevronDown: Lu.LuChevronDown, LuExternalLink: Lu.LuExternalLink,
  LuCheck: Lu.LuCheck, LuCircleCheckBig: Lu.LuCircleCheckBig,
  // Services/Sections
  LuLayoutGrid: Lu.LuLayoutGrid, LuPenTool: Lu.LuPenTool,
  // Achievements
  LuGlobe: Lu.LuGlobe, LuTrophy: Lu.LuTrophy, LuZap: Lu.LuZap, LuSmartphone: Lu.LuSmartphone,
  LuHeart: Lu.LuHeart, LuSparkles: Lu.LuSparkles, LuBookOpen: Lu.LuBookOpen, LuFileText: Lu.LuFileText,
  LuWand: Lu.LuWand, LuRocket: Lu.LuRocket, LuGitBranch: Lu.LuGitBranch, LuGitMerge: Lu.LuGitMerge,
  LuBug: Lu.LuBug, LuMap: Lu.LuMap,
  // Contact
  LuMail: Lu.LuMail, LuPhoneCall: Lu.LuPhoneCall, LuMapPin: Lu.LuMapPin, LuClock: Lu.LuClock,
  LuGithub: Lu.LuGithub, LuCodepen: Lu.LuCodepen, LuUser: Lu.LuUser, LuAtSign: Lu.LuAtSign,
  LuTag: Lu.LuTag, LuMessageSquare: Lu.LuMessageSquare, LuShieldCheck: Lu.LuShieldCheck,
  LuHeartHandshake: Lu.LuHeartHandshake, LuQuote: Lu.LuQuote,
  // Tech stack (simple-icons)
  SiHtml5: Si.SiHtml5, SiCss3: Si.SiCss, SiJavascript: Si.SiJavascript, SiReact: Si.SiReact, SiGit: Si.SiGit,
};

function Icon({ name, className = '', style }) {
  const C = iconMap[name];
  if (!C) return null;
  return <C className={className} style={style} />;
}

export default Icon;
