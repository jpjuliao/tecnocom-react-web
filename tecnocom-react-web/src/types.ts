// src/types.ts

// Header Props
export interface HeaderProps {
  logo: string;
  companyName: string;
}

// Content Props
export interface WebsiteLink {
  url: string;
  text: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface ContentProps {
  description: string;
  websiteLink: WebsiteLink;
  whatsappLink: WebsiteLink;
  socialLinks: SocialLink[];
}

// Footer Props
export interface FooterProps {
  copyright: string;
}
