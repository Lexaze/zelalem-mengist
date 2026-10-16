// Single source of truth for all portfolio copy. Edit here, not in components.
import {
  Atom,
  FileCode2,
  Wind,
  Zap,
  Server,
  Terminal,
  Database,
  DatabaseZap,
  Bot,
  MessagesSquare,
  Clapperboard,
  Cpu,
  Binary,
  Workflow,
  Gauge,
} from 'lucide-react';

export const profile = {
  name: 'Zelalem Mengistu',
  role: 'Full-Stack Web Developer',
  photo: '/profile.jpg', // put your photo in public/profile.jpg
  resume: '/resume.pdf', // put your resume in public/resume.pdf
  email: 'zelalem.mengistu.001@gmail.com', // TODO: replace with your real email
  github: 'https://github.com/Lexaze', // 
  linkedin: 'https://www.linkedin.com/in/zelalem-mengistu', // 
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const typedPhrases = [
  'React + Vite',
  'Node.js APIs',
  'Python services',
  'PostgreSQL & MySQL',
  'Tailwind CSS',
];

export const aboutStats = [
  { value: 'B.Sc.', label: 'Electrical & Computer Engineering' },
  { value: 'Bootcamp', label: 'Web Development graduate' },
  { value: '3', label: 'Full-stack projects shipped' },
];

export const fundamentals = [
  {
    icon: Cpu,
    title: 'Hardware-to-software thinking',
    text: 'I understand what happens below the framework: memory, processing and I/O, which shapes how I write efficient code.',
  },
  {
    icon: Binary,
    title: 'Logic and rigor',
    text: 'Digital logic and algorithms trained me to break problems into precise, testable pieces.',
  },
  {
    icon: Workflow,
    title: 'Systems design',
    text: 'Signals, control and architecture translate naturally into clean data flow between UI, API and database.',
  },
  {
    icon: Gauge,
    title: 'Performance mindset',
    text: 'Engineers measure before they optimize. I profile, benchmark and fix real bottlenecks.',
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    description: 'Fast, accessible, responsive interfaces.',
    skills: [
      { name: 'JavaScript', icon: FileCode2 },
      { name: 'React', icon: Atom },
      { name: 'Vite', icon: Zap },
      { name: 'Tailwind CSS', icon: Wind },
    ],
  },
  {
    title: 'Backend',
    description: 'Reliable APIs and service logic.',
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Python', icon: Terminal },
    ],
  },
  {
    title: 'Databases',
    description: 'Well-modelled relational data.',
    skills: [
      { name: 'PostgreSQL', icon: DatabaseZap },
      { name: 'MySQL', icon: Database },
    ],
  },
];

export const projects = [
  {
    icon: MessagesSquare,
    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
    title: "Evangadi AI Forum",
    image: "/projects/forum.png", // screenshot in public/projects/
    tagline: "AI-powered community Q&A platform",
    description:
      "A full-stack community forum where learners ask, answer and discover knowledge. A retrieval-augmented generation (RAG) assistant answers questions using the forum's own content, so responses are grounded in real threads instead of guesswork.",
    features: [
      "RAG pipeline that retrieves relevant threads and generates grounded answers",
      "Semantic search that finds related questions beyond keyword matches",
      "AI-assisted moderation and answer suggestions",
      "Secure authentication with protected routes",
      "Relational schema for users, questions and answers",
    ],
    tags: ["React", "Node.js", "MySQL", "RAG", "LLM API", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    icon: Bot,
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    title: "ChatGPT Clone",
    image: "/projects/chatgpt-clone.png", // screenshot in public/projects/
    tagline: "Real-time conversational AI interface",
    description:
      "A polished chat experience with streaming responses, persistent conversations and a clean, keyboard-friendly interface powered by LLM API integration.",
    features: [
      "Streaming token-by-token responses",
      "Conversation history with multiple threads",
      "Markdown and code-block rendering",
      "Secure server-side API key handling",
    ],
    tags: ["React", "Node.js", "Python", "LLM API", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    icon: Clapperboard,
    gradient: "from-rose-500/20 via-orange-500/10 to-transparent",
    title: "StreamFlix",
    image: "/projects/streamflix.png", // screenshot in public/projects/
    tagline: "Netflix-inspired media discovery dashboard",
    description:
      "A high-performance streaming-style app for exploring movies and shows, with smooth carousels and live data pulled from a media API.",
    features: [
      "Responsive carousels with touch and keyboard support",
      "Dynamic data fetching with loading and error states",
      "Search, genre browsing and detail views",
      "Lazy-loaded media for fast first paint",
    ],
    tags: ["React", "Vite", "REST API", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Lexaze/MovieTMDBmovie",
    live: "#",
  },
];
