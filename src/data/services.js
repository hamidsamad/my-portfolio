import {
  LuLayoutGrid,
  LuCode,
  LuPenTool,
} from "react-icons/lu";

const services = [
  {
    num: "01",
    icon: LuLayoutGrid,
    iconBg: "bg-emerald-500/10",
    iconBorder: "border-emerald-500/20",
    iconColor: "text-emerald-400",
    title: "Responsive Web Design",
    description:
      "Building mobile-first, responsive websites with clean and modern layouts using HTML, CSS, Flexbox, and Grid.",
  },
  {
    num: "02",
    icon: LuCode,
    iconBg: "bg-blue-500/10",
    iconBorder: "border-blue-500/20",
    iconColor: "text-blue-400",
    title: "Frontend Development",
    description:
      "Creating interactive and dynamic web applications using JavaScript, React, APIs, and modern development workflows.",
  },
  {
    num: "03",
    icon: LuPenTool,
    iconBg: "bg-amber-500/10",
    iconBorder: "border-amber-500/20",
    iconColor: "text-amber-400",
    title: "UX & Problem Solving",
    description:
      "Focusing on user experience, accessibility, and performance to deliver solutions that make a real impact for users.",
  },
];

export default services;

