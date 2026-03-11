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
    "/services/planning",
    "/services/construction-management",
    "/services/contract-administration",
    "/services/contract-management",
    "/services/quantity-surveying",
    "/services/commercial-management",
    "/services/risk-management",
    "/services/dispute-resolution",
    "/projects",
    "/privacy-policy",
    "/terms-conditions",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : route.startsWith("/privacy") || route.startsWith("/terms") || route.startsWith("/disclaimer") ? 0.3 : 0.8,
  }));

  return routes;
}
