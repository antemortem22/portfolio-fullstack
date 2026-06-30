export type Locale = "es" | "en";

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
  metadata: LocalizedText;
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
  period: LocalizedText;
  role: LocalizedText;
  company: string;
  summary: LocalizedText;
  tags: string[];
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
