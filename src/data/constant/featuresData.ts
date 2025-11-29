import { 
  Bell, 
  BookOpen, 
  Users, 
  Briefcase, 
  Wrench,
  Calendar,
  GraduationCap,
  Bot,
  School
} from 'lucide-react';

export const features = [
  {
    icon: Bell,
    title: 'Curated Notices',
    description: 'Stay updated with exam, admission, result, and general notices with customizable alerts',
    color: 'from-blue-500 to-cyan-500',
    link: '/notices'
  },
  {
    icon: BookOpen,
    title: 'Academic Resources',
    description: 'Access syllabus, PYQs, notes, and library resources for all departments',
    color: 'from-purple-500 to-pink-500',
    link: '/resources'
  },
  {
    icon: Users,
    title: 'Community Hub',
    description: 'Connect with peers, join study groups, and get guidance from alumni',
    color: 'from-green-500 to-emerald-500',
    link: '/community'
  },
  {
    icon: Briefcase,
    title: 'Career & Placement',
    description: 'Explore placements, internships, and mentorship opportunities',
    color: 'from-orange-500 to-red-500',
    link: '/career'
  },
  {
    icon: Wrench,
    title: 'Productivity Tools',
    description: 'PDF tools, calculators, timetable maker, and more utilities',
    color: 'from-indigo-500 to-purple-500',
    link: '/tools'
  },
  {
    icon: Calendar,
    title: 'Academic Calendar',
    description: 'Never miss important dates, exams, and deadlines',
    color: 'from-pink-500 to-rose-500',
    link: '/calendar'
  },
  {
    icon: GraduationCap,
    title: 'Scholarship Saathi',
    description: 'Find financial aid opportunities and scholarships tailored for CU students',
    color: 'from-yellow-500 to-orange-500',
    link: '/scholarships'
  },
  {
    icon: Bot,
    title: 'Cusaathi AI',
    description: 'Your personal AI assistant for instant answers to all your academic queries',
    color: 'from-violet-500 to-fuchsia-500',
    link: '/ai-chat'
  },
  {
    icon: School,
    title: 'College Directory',
    description: 'Explore detailed information about all 151+ affiliated colleges and departments',
    color: 'from-cyan-600 to-blue-600',
    link: '/colleges'
  },
];
