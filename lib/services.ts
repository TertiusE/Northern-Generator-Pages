export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  description: string;
  deliverables: string[];
  faqs: ServiceFaq[];
  accent: string;
};

export const services: Service[] = [
  {
    slug: "generator-installations-upgrades",
    title: "Generator Installations & Upgrades",
    shortTitle: "Installations",
    eyebrow: "New systems",
    summary: "Plan, replace, or expand emergency generator capacity with practical field execution.",
    description:
      "Northern Generator supports generator replacements, capacity planning, equipment changeouts, and electrical/mechanical coordination for reliable emergency power projects.",
    deliverables: [
      "Site review and equipment-fit planning",
      "Replacement and upgrade coordination",
      "Startup support and turnover planning",
      "Lifecycle-minded recommendations for future serviceability",
    ],
    faqs: [
      {
        question: "Do you handle replacement planning?",
        answer:
          "Yes. The team can help assess existing equipment condition, upgrade needs, and practical replacement paths.",
      },
      {
        question: "Can you support phased upgrade work?",
        answer:
          "Yes. Upgrade projects can be organized around operational constraints and outage sensitivity.",
      },
    ],
    accent: "from-cyan-400/70 via-sky-500/50 to-blue-700/60",
  },
  {
    slug: "preventive-maintenance",
    title: "Preventive Maintenance",
    shortTitle: "Maintenance",
    eyebrow: "Ongoing reliability",
    summary: "Scheduled maintenance programs built to reduce emergency failures and support compliance-driven operations.",
    description:
      "Preventive maintenance is structured around uptime, visibility, and predictable service intervals so equipment issues are identified before they become outages.",
    deliverables: [
      "Routine inspection and maintenance visits",
      "Condition-based service observations",
      "Operational reporting and follow-up recommendations",
      "Service planning for aging generator assets",
    ],
    faqs: [
      {
        question: "Is maintenance suitable for multi-site portfolios?",
        answer:
          "Yes. Maintenance planning can be structured across multiple buildings or facilities.",
      },
      {
        question: "Do you provide actionable findings?",
        answer:
          "Yes. The goal is to convert field observations into useful next actions instead of generic notes.",
      },
    ],
    accent: "from-emerald-300/70 via-teal-500/50 to-cyan-700/60",
  },
  {
    slug: "emergency-service-repair",
    title: "Emergency Service & Repair",
    shortTitle: "Emergency",
    eyebrow: "Urgent response",
    summary: "Rapid support for generator faults, startup problems, alarms, and outage-sensitive service calls.",
    description:
      "When a building cannot wait, Northern Generator focuses on stabilizing the situation, diagnosing the issue, and restoring dependable emergency power support as quickly as practical.",
    deliverables: [
      "Troubleshooting and corrective repair response",
      "Emergency dispatch coordination",
      "Clear communication on risk, cause, and next steps",
      "Recommendations to prevent repeat failures",
    ],
    faqs: [
      {
        question: "Do you support after-hours calls?",
        answer: "Yes. Northern Generator presents its service posture as 24/7 emergency support.",
      },
      {
        question: "Can you help with recurring faults?",
        answer:
          "Yes. Recurring issues should be investigated as patterns, not just isolated one-off calls.",
      },
    ],
    accent: "from-amber-300/70 via-orange-500/50 to-red-700/60",
  },
  {
    slug: "automatic-transfer-switches",
    title: "Automatic Transfer Switches",
    shortTitle: "ATS",
    eyebrow: "Switching systems",
    summary: "Inspection, troubleshooting, and upgrade support for critical transfer equipment.",
    description:
      "Transfer-switch performance is central to dependable backup power. Northern Generator supports ATS-related inspections, issue isolation, and upgrade work for cleaner emergency transitions.",
    deliverables: [
      "ATS inspection and troubleshooting",
      "Upgrade planning for aging switchgear",
      "Emergency-power sequence review",
      "Recommendations tied to site operating risk",
    ],
    faqs: [
      {
        question: "Why prioritize ATS work?",
        answer:
          "Because even when a generator is healthy, a weak transfer sequence can still put the building at risk.",
      },
      {
        question: "Can ATS work be paired with generator upgrades?",
        answer: "Yes. Generator and ATS scope is often best reviewed together.",
      },
    ],
    accent: "from-fuchsia-300/70 via-violet-500/50 to-indigo-700/60",
  },
  {
    slug: "fuel-systems",
    title: "Fuel Systems",
    shortTitle: "Fuel Systems",
    eyebrow: "Fuel reliability",
    summary: "Fuel-system upgrades and support for diesel and gas-driven emergency power systems.",
    description:
      "Fuel delivery, storage, and safety coordination are essential parts of emergency power readiness. Northern Generator supports fuel-related generator work with a practical operations lens.",
    deliverables: [
      "Fuel-system upgrade coordination",
      "Support for diesel and gas-driven equipment",
      "Readiness-focused observations and planning",
      "Alignment between generator condition and fuel-system needs",
    ],
    faqs: [
      {
        question: "Do fuel issues affect generator reliability planning?",
        answer: "Yes. Fuel reliability should be reviewed alongside generator and ATS condition.",
      },
      {
        question: "Do you support diesel and gas-driven systems?",
        answer: "Yes. The existing public site states support for both diesel and gas-driven generators.",
      },
    ],
    accent: "from-lime-300/70 via-yellow-400/50 to-amber-600/60",
  },
  {
    slug: "generator-rentals",
    title: "Generator Rentals",
    shortTitle: "Rentals",
    eyebrow: "Temporary power",
    summary: "Rental generator support for outages, contingency planning, and temporary site requirements.",
    description:
      "Rental power can bridge outages, support planned work, or protect operations during equipment replacement. Northern Generator positions rentals as part of an uptime-first strategy.",
    deliverables: [
      "Temporary emergency power support",
      "Rental coordination around outages and projects",
      "Planning support for replacement or contingency scenarios",
      "Fast path to a service conversation when timing matters",
    ],
    faqs: [
      {
        question: "When should rental power be considered?",
        answer:
          "Rental power is useful during planned outages, delayed replacements, facility events, and unexpected equipment failures.",
      },
      {
        question: "Can rentals support broader project work?",
        answer: "Yes. Rentals often pair well with staged upgrades or replacement projects.",
      },
    ],
    accent: "from-slate-200/70 via-slate-400/50 to-slate-700/60",
  },
];

export const serviceSlugs = services.map((service) => service.slug);

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
