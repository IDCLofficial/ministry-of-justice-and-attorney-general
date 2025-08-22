export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/about",
    label: "About Us"
  },
  {
    href: "/department",
    label: "Departments"
  },
  {
    href: "/services",
    label: "Services"
  },
  {
    href: "/projects",
    label: "Projects"
  },
  {
    href: "/news",
    label: "News"
  },
  {
    href: "/events",
    label: "Events"
  },
  {
    href: "/media",
    label: "Media"
  },
  {
    href: "/contact",
    label: "Contact Us"
  }
];

export const MINISTRY_INFO = {
  name: "Ministry of Justice & Attorney General",
  logo: "/images/logo.png",
  shortName: "MOJAG",
  state: "Imo State",
  description: "Upholding Rights. Advancing Justice. Empowering Imo."
};

export const CONTACT_INFO = {
  address: "Justice Oputa High Court Complex, New Owerri (off Port-Harcourt Road), Owerri",
  phone: "+2347046242007",
  email: "info@justice.im.gov",
  workingHours: "Monday - Friday: 8:00 AM - 4:00 PM"
};
