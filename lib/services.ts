export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  points: string[];
  accent: string;
};

export const services: Service[] = [
  {
    slug: "new-generators",
    title: "New Generators",
    eyebrow: "Request a Quote",
    summary: "New Generators",
    points: [
      "Installs and Upgrades",
      "Transfer Switches",
      "Elevator Connection",
      "Fire Panel Connection",
      "Natural Gas Connection",
      "Diesel Fuel System",
    ],
    accent: "from-[#21428f] via-[#2e58b8] to-[#f26522]",
  },
  {
    slug: "inspections",
    title: "Inspections",
    eyebrow: "See below for our offering",
    summary: "Regular Generator inspections are required by the Canada Standards Authority (CSA) Standard C282 ‘Emergency Electrical Power Supply for Buildings’.",
    points: [
      "Monthly",
      "Semi-Annual",
      "Annual",
      "Quinquennial",
      "Load Bank Test",
      "Infrared Survey",
    ],
    accent: "from-[#f26522] via-[#f47d3f] to-[#21428f]",
  },
  {
    slug: "fuel-systems",
    title: "Fuel Systems",
    eyebrow: "Fuel Systems",
    summary: "Northern Generator can assist you with coordinating Dyed Diesel Fuel delivery to your site.",
    points: [
      "Upgrades",
      "Tanks",
      "Exhausts",
      "Fuel Delivery",
      "Fuel Leak Detection",
      "Removal and Fuel Polishing",
    ],
    accent: "from-[#21428f] via-[#1f5fbf] to-[#f26522]",
  },
  {
    slug: "rentals",
    title: "Emergency and Prime Power",
    eyebrow: "Rentals",
    summary: "For units beyond repair, a temporary rental can be provided until your unit is replaced:",
    points: [
      "Emergency and Prime Power Rentals",
      "Backup and Standby Power Rentals",
      "Transformer Rentals",
      "Transformer Switches",
      "Power Distribution Equipment",
      "Emergency Diesel Generators",
    ],
    accent: "from-[#f26522] via-[#ff8d56] to-[#21428f]",
  },
  {
    slug: "emergency-service",
    title: "Emergency Service",
    eyebrow: "24/7 Service Available",
    summary: "Your generator system is vital to your operations and the safety of your occupants. For minimal downtown repair assistance, our qualified and certified technicians can be quickly dispatched 24 hours a day, 7 days a week, 365 days a year.",
    points: [
      "Emergency Service",
      "24/7 Service Available",
      "Call Support",
      "1.866.832.2489 Toll free",
    ],
    accent: "from-[#21428f] via-[#2c4f9f] to-[#f26522]",
  },
];

export const serviceSlugs = services.map((service) => service.slug);
export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
