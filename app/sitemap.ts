import { MetadataRoute } from "next";
import { siteConfig } from "@/src/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const routes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/services/project-management",
    "/services/quantity-surveying",
    "/services/contract-administration",
    "/services/claims-management",
    "/services/project-controls",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));

  return routes;
}
