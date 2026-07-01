export type Locale = "es" | "en";
export type SkillCategoryId =
  | "backend"
  | "frontend"
  | "databases"
  | "architecture"
  | "tools"
  | "methodologies"
  | "security"
  | "languages";

export type LocalizedText = Record<Locale, string>;
export type LocalizedAsset = Record<Locale, string>;
export type LocalizedLink = string | LocalizedAsset;

export type LinkVariant = "primary" | "secondary";
export type SocialPlatform = "GitHub" | "LinkedIn";
export type ProfileLinkIcon = "github" | "linkedin" | "download";

export type NavItem = {
  label: LocalizedText;
  href: string;
};

export type SocialLink = {
  label: SocialPlatform;
  href: string;
};

export type ProfileLink = {
  label: LocalizedText;
  icon: ProfileLinkIcon;
  href: LocalizedLink;
  variant?: LinkVariant;
};

export type BrandData = {
  name: string;
  initials: string;
  logo: string;
  cvUrl: LocalizedAsset;
  navItems: NavItem[];
  cvLabel: LocalizedText;
  footerRights: LocalizedText;
  socialLinks: SocialLink[];
};

export type HeroData = {
  intro: LocalizedText;
  firstName: string;
  lastName: string;
  role: LocalizedText;
  editorialEyebrow: LocalizedText;
  description: LocalizedText;
  ticker: LocalizedText;
  primaryAction: {
    label: LocalizedText;
    href: string;
  };
  secondaryAction: {
    label: LocalizedText;
    href: LocalizedLink;
  };
};

export type AboutPillar = {
  title: LocalizedText;
  body: LocalizedText;
};

export type ProfileData = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  role: LocalizedText;
  location: LocalizedText;
  sideNote: LocalizedText;
  pillars: AboutPillar[];
  links: ProfileLink[];
};

export type ExperienceItem = {
  timelineLabel: LocalizedText;
  role: LocalizedText;
  aclarations: LocalizedText;
  summary: LocalizedText;
  tags: string[];
};

export type SkillGroup = {
  title: string;
  icon: string;
  categoryId?: SkillCategoryId;
  skills: {
    name: string;
    value: number;
  }[];
};

export type Technology = {
  label: string;
  icon: string;
  categoryId?: SkillCategoryId;
};

export type Project = {
  id: number;
  published: boolean;
  order: number;
  title: string;
  category: string;
  description: LocalizedText;
  tags: string[];
  repositoryUrl: string;
  projectUrl?: string;
  image?: string;
  imageAlt?: LocalizedText;
  statusLabel?: string;
};
