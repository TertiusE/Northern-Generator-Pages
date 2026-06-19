export const company = {
  name: "Northern Generator",
  legalName: "NORTHERN GENERATOR COMPANY LTD",
  tagLine: "Your Emergency Power Specialist",
  description:
    "NORTHERN GENERATOR COMPANY LTD is your trusted service provider for emergency power systems in the GTA and surrounding areas (Ontario, Canada). We are dedicated to tailoring power solutions that fit any need to keep your business thriving and risk free.",
  siteUrl: "https://tertiuse.github.io/Northern-Generator-Pages",
  email: "ngc@northerngenerator.com",
  phone: "905.264.9744",
  tollFree: "1.866.832.2489",
  hours: "Mon - Fri 8:30AM - 5:00PM",
  serviceAvailability: "24/7 Service Available",
  address: {
    street: "100 Caster Ave",
    city: "Woodbridge",
    region: "Ontario",
    postalCode: "L4L 5Y9",
    country: "CA",
  },
  hero: {
    eyebrow: "40+ years",
    title: "Your Emergency Power Specialist",
    subtitle:
      "NORTHERN GENERATOR COMPANY LTD is your trusted service provider for emergency power systems in the GTA and surrounding areas (Ontario, Canada). We are dedicated to tailoring power solutions that fit any need to keep your business thriving and risk free.",
  },
  metrics: [
    { label: "In the Industry", value: "40+ years" },
    { label: "Emergency Service", value: "24/7" },
    { label: "Call Support", value: "905.264.9744" },
    { label: "Toll free", value: "1.866.832.2489" },
  ],
  homepageServiceGroups: [
    {
      title: "New Generators",
      items: [
        "Installs and Upgrades",
        "Transfer Switches",
        "Elevator Connection",
        "Fire Panel Connection",
        "Natural Gas Connection",
        "Diesel Fuel System",
      ],
    },
    {
      title: "Inspections",
      items: [
        "Monthly",
        "Semi-Annual",
        "Annual",
        "Quinquennial",
        "Load Bank Test",
        "Infrared Survey",
      ],
    },
    {
      title: "Fuel Systems",
      items: [
        "Upgrades",
        "Tanks",
        "Exhausts",
        "Fuel Delivery",
        "Fuel Leak Detection",
        "Removal and Fuel Polishing",
      ],
    },
    {
      title: "Emergency and Prime Power",
      items: [
        "Backup and Standby Power",
        "Load Bank",
        "Transformer Switches",
        "Power Distribution Equipment",
        "Emergency Diesel Generators",
      ],
    },
  ],
  aboutHeading: "Servicing emergency diesel and gas driven generators in Ontario, for over forty years",
  aboutParagraphs: [
    "Northern Generator Company has been servicing emergency diesel and gas driven generators in Ontario for over 40 years. We are a privately owned and operated company, proudly Canadian and a strong member of our community. Honesty and integrity are at the heart of our business. As such, we have serviced thousands of happy customers over various industries such as high-rise and residential, commercial, industrial, government, and healthcare.",
    "The experience of our skilled team qualifies us to be your supplier of choice in all areas of generator repair and preventative maintenance. We provide a broad range of related customized repairs, services and equipment to ensure a well-managed emergency power supply. We also partner with experts in the field such as engineers, contractors, master electricians and property managers to develop the best catered solution for your project, whether small or large.",
  ],
  valueSections: [
    {
      title: "Technology & Innovation",
      body: "Utilizing the latest technology in emergency power systems to provide tailored solutions that exceed industry standards. Continuously researching and adapting new developments to meet our clients' needs.",
    },
    {
      title: "Comprehensive Solutions",
      body: "Offering a wide range of services, including generator sales and service, generator rentals, fuel inspections, fuel system upgrades, fuel fill and cleaning and automated filtration systems, to ensure that all of our clients' needs are met.",
    },
    {
      title: "Customer-Focused Approach",
      body: "Prioritizing customer satisfaction and building lasting relationships through 24 hour on call emergency service and a commitment to educating and protecting our clients.",
    },
  ],
  cta: {
    title: "Ensure Reliable Emergency Power with Northern Generator",
    body: "The power grid is facing unprecedented challenges. Don’t let power outages disrupt your business or compromise public safety. Northern Generator is your trusted emergency power specialist, offering tailored solutions to fit your specific needs. Contact us today to speak with a power generation expert and get a customized quote.",
    button: "Call us now!",
  },
  testimonials: [
    {
      quote: "Northern Generator has been honest and upfront about all issues. Pricing was very competitive. Highly recommend them.",
      author: "Theresa M, Senior Property Manager",
    },
    {
      quote: "It's a great company. The staff are very efficient and know what they are doing. They are easy to work with. Great customer service and knowledgeable in what they do. Very happy they take care of our generators. A pleasure to work with.",
      author: "JB, Property Manager",
    },
    {
      quote: "The Tech always shows up on time with a smile on his face and courteous attitude that really stands out. I have to say, all of your technicians and staff are very professional!",
      author: "Dianne, Facilities Specialist",
    },
  ],
  footerBlurb:
    "We are your 24/7 Emergency Power Specialist! For over 40 years, Northern Generator has specialized in the supply and maintenance of emergency power systems. We are your trusted supplier of choice for ALL your emergency power needs.",
  homepageBadges: [
    "WSIB Excellence Program 2026",
    "EGSA Member and Certified Technicians",
    "Generac Partners",
    "Certified Supplier Badge",
  ],
  footerBadges: [
    "WSIB Excellence Program 2026",
    "EGSA Member and Certified Technicians",
    "Generac Partners",
    "TSSA Fuels Safety Contractor Reg. #76641783",
  ],
  rentalsText: [
    "At Northern Generator Company we also specialize in RENTALS. For a temporary replacement of your primary back-up power in an emergency, or to bridge the gap during major repairs we offer rental generators and automatic transfer switches. suitable for high-rise residential, commercial and industrial style buildings. We can also provide prime power rentals and ensure steady fuel supply as needed. Generators with remote-start capability are also available.",
    "We are proud to provide you without delay the best solutions with competitive pricing, particularly in an emergency situation. Give us a call or fill out the Contact Form for assistance.",
  ],
  contactIntro:
    "For customized generator maintenance solutions, service and repairs, or rentals, we would be happy to promptly provide a quotation. Kindly fill out the form below and we will respond within 24 hours.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/rentals", label: "Rentals" },
    { href: "/contact", label: "Contact Us" },
  ],
} as const;

export const fullAddress = `${company.address.street} ${company.address.city}, ${company.address.region} ${company.address.postalCode}`;
