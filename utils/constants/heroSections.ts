export interface HeroConfig {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  height?: 'small' | 'medium' | 'large' | 'extra-large';
  alignment?: 'left' | 'center';
  overlay?: boolean;
  className?: string;
}

export const HERO_CONFIGS = {
  HOME: {
    title: "Justice that Works.\nLaw that Serves.\nUpholding Rights.",
    description: "The Ministry of Justice & Attorney General is the legal backbone of Imo State, committed to upholding the rule of law, promoting justice, and safeguarding the rights of all citizens.",
    height: 'extra-large' as const,
    alignment: 'left' as const
  },
  
  PROJECTS: {
    title: "Justice Sector Projects",
    description: "Ongoing initiatives to modernize court processes, enhance access to justice, and improve legal infrastructure across Imo State",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  TEAM: {
    title: "Judicial Leadership",
    description: "Dedicated legal professionals and judicial officers committed to upholding justice and the rule of law in Imo State",
    height: 'medium' as const,
    alignment: 'left' as const,
    className: "py-16 md:py-24"
  },
  
  SERVICES: {
    title: "Legal Services",
    description: "Comprehensive legal services including prosecution, civil litigation, legal drafting, and citizens' rights protection",
    height: 'medium' as const,
    alignment: 'left' as const,
    overlay: false
  },
  
  NEWS: {
    title: "Legal Updates & Press Releases",
    description: "Stay informed about judicial decisions, legal reforms, and important announcements from the Ministry of Justice",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  MEDIA: {
    title: "Judicial Gallery & Resources",
    description: "Explore our collection of legal resources, court judgments, and media from the Imo State judiciary",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  EVENTS: {
    title: "Judicial Events & Programs",
    description: "Court sessions, legal workshops, and public engagements across Imo State's justice sector",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  ABOUT: {
    title: "About the Ministry of Justice & Attorney General",
    description: "Ensuring justice, upholding the rule of law, and protecting the rights of all citizens through an independent and efficient judiciary",
    height: 'medium' as const,
    alignment: 'left' as const
  },

  DEPARTMENT: {
    title: "Judicial Departments & Agencies",
    description: "Explore the various departments and agencies that form the justice delivery system in Imo State",
    height: 'medium' as const,
    alignment: 'left' as const
  }
} as const;
