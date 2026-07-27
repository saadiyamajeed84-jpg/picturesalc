import {
  GraduationCap, TrendingUp, Building2, UserRound, Headset, Globe2,
  Bot, Mic, PenLine, SpellCheck, BookOpen, Volume2, MessagesSquare,
  ClipboardCheck, BrainCircuit, LineChart, Stamp, Home, Plane,
  LayoutDashboard, MessageCircle, Zap, Target, Briefcase, Award, Sparkles,
  Star, Users,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  GraduationCap, TrendingUp, Building2, UserRound, Headset, Globe2,
  Bot, Mic, PenLine, SpellCheck, BookOpen, Volume2, MessagesSquare,
  ClipboardCheck, BrainCircuit, LineChart, Stamp, Home, Plane,
  LayoutDashboard, MessageCircle, Zap, Target, Briefcase, Award, Sparkles,
  Star, Users,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}
