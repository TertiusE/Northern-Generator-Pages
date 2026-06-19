import type { MetadataRoute } from "next";
import { company } from "@/lib/company";
import { serviceSlugs } from "@/lib/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/rentals", "/contact"];

  return [
    ...routes.map((route) => ({
      url: `${company.siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${company.siteUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
