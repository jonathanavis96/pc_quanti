import { MetadataRoute } from "next";
import { siteConfig } from "@/src/config/site";
import { indexableRoutes, sitemapPriority } from "@/src/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: sitemapPriority(route),
  }));
}
