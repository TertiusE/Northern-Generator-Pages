export const company = {
  name: "Northern Generator",
  legalName: "Northern Generator Company Ltd.",
  tagLine: "Emergency power systems built for critical uptime.",
  description:
    "Northern Generator supplies, services, upgrades, and supports emergency power systems across Ontario with a 24/7 response mindset.",
  siteUrl: "https://tertieuse.github.io/Northern-Generator",
  email: "ngc@northerngenerator.com",
  phone: "905.264.9744",
  tollFree: "1.866.832.2489",
  address: {
    street: "100 Caster Ave",
    city: "Woodbridge",
    region: "Ontario",
    postalCode: "L4L 5Y9",
    country: "CA",
  },
  hero: {
    eyebrow: "24/7 emergency power specialist",
    title: "Industrial emergency power, redesigned for confidence.",
    subtitle:
      "Generator service, installations, ATS upgrades, fuel-system work, and rental support for buildings that cannot afford downtime.",
  },
  metrics: [
    { label: "Years supporting emergency power systems", value: "40+" },
    { label: "Service response posture", value: "24/7" },
    { label: "Primary coverage", value: "Ontario" },
    { label: "Dispatch base", value: "Woodbridge" },
  ],
  trustPoints: [
    "Generator service, repair, and lifecycle planning",
    "Automatic transfer switch inspection and upgrade work",
    "Fuel-system coordination for diesel and gas-driven equipment",
    "Rental generator support for temporary and contingency power",
  ],
  badges: [
    "WSIB Excellence Program 2026",
    "EGSA member and certified technicians",
    "Generac partner",
    "TSSA Fuels Safety Contractor Reg. #76641783",
  ],
  industries: [
    "Commercial real estate",
    "Industrial operations",
    "Multi-site property portfolios",
    "Mission-critical facilities",
  ],
  testimonials: [
    {
      quote:
        "Northern Generator has been honest and upfront about all issues. Pricing was very competitive.",
      author: "Theresa M.",
      role: "Senior Property Manager",
    },
    {
      quote:
        "The tech always shows up on time with a smile on his face and courteous attitude that really stands out.",
      author: "Dianne",
      role: "Facilities Specialist",
    },
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/rentals", label: "Rentals" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const fullAddress = `${company.address.street}, ${company.address.city}, ${company.address.region} ${company.address.postalCode}`;
