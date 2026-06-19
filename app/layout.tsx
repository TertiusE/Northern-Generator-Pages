import type { Metadata } from "next";
import "./globals.css";
import { ContactPill } from "@/components/ContactPill";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.name} | ${company.tagLine}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "Northern Generator",
    "emergency power systems",
    "generator service",
    "generator rentals",
    "fuel systems",
    "transfer switches",
  ],
  openGraph: {
    title: `${company.name} | ${company.tagLine}`,
    description: company.description,
    type: "website",
    url: company.siteUrl,
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.legalName,
  description: company.description,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.region,
    postalCode: company.address.postalCode,
    addressCountry: company.address.country,
  },
  areaServed: "Ontario",
  image: `${company.siteUrl}/images/logo.png`,
  url: company.siteUrl,
  slogan: company.tagLine,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-[#f6f8fc]">
      <body className="min-h-full bg-[#f6f8fc] text-slate-900 antialiased">
        <JsonLd data={organizationJsonLd} />
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <ContactPill />
      </body>
    </html>
  );
}
