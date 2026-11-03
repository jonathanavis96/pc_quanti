// Every indexable page route. The sitemap is built from this list, and
// tests/routes.test.ts fails if a page exists under app/ without an entry here.
export const indexableRoutes = [
  "",
  "/about",
  "/team",
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
] as const;

// Pages that exist but must stay out of the sitemap.
export const unlistedRoutes = [
  "/test-error", // Sentry smoke test, gated off in production
  "/services/claims-management", // client-side redirect to /services/dispute-resolution
] as const;

const legalRoutes = new Set(["/privacy-policy", "/terms-conditions", "/disclaimer"]);

export function sitemapPriority(route: string): number {
  if (route === "") return 1;
  if (route === "/contact") return 0.9;
  if (legalRoutes.has(route)) return 0.3;
  return 0.8;
}
