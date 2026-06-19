import type { Metadata } from "next";
import "./globals.css";
import { ContactPill } from "@/components/ContactPill";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { company, fullAddress } from "@/lib/company";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.name} | Emergency Power Specialist`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "Northern Generator",
    "generator service Ontario",
    "emergency power systems",
    "automatic transfer switches",
    "generator rentals",
    "fuel systems",
  ],
  openGraph: {
    title: `${company.name} | Emergency Power Specialist`,
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
  image: `${company.siteUrl}/images/generator-service.png`,
  url: company.siteUrl,
  slogan: company.tagLine,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-slate-950">
      <body className="min-h-full bg-slate-950 text-white antialiased">
        <JsonLd data={organizationJsonLd} />
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <ContactPill />
        <div className="sr-only">{fullAddress}</div>
      </body>
    </html>
  );
}
