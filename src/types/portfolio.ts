export type Language = 'vi' | 'en';

export type LocalizedText = {
  vi: string;
  en: string;
};

export type DomainId = 'programming' | 'commerce' | 'marketing' | 'logistics';

export type AccentColor = 'sky' | 'amber' | 'rose' | 'emerald';

export interface Pillar {
  id: DomainId;
  accent: AccentColor;
  title: LocalizedText;
  shortTitle: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  highlights: LocalizedText[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  domain: DomainId;
  title: LocalizedText;
  summary: LocalizedText;
  metric: LocalizedText;
  role: LocalizedText;
  period: string;
  tags: string[];
  details: {
    context: LocalizedText;
    solution: LocalizedText;
    impact: LocalizedText;
  };
  link?: string;
}

export interface ExperienceItem {
  id: string;
  period: LocalizedText;
  role: LocalizedText;
  organization: LocalizedText;
  domain: DomainId;
  description: LocalizedText;
  achievements: LocalizedText[];
}

export interface CollaborationOption {
  domain: DomainId;
  title: LocalizedText;
  description: LocalizedText;
}

export interface SocialLinks {
  email: string;
  phone: string;
  zalo: string;
  facebook: string;
  github: string;
  linkedin?: string;
}

export interface ProfileData {
  brand: {
    name: string;
    monogram: string;
    location: LocalizedText;
    availability: LocalizedText;
    avatarUrl?: string;
  };
  hero: {
    eyebrow: LocalizedText;
    headline: LocalizedText;
    subheadline: LocalizedText;
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
    stats: Array<{
      value: string;
      label: LocalizedText;
    }>;
  };
  pillars: Pillar[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  collaborations: CollaborationOption[];
  social: SocialLinks;
}
