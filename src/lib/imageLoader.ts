/**
 * Custom Next.js image loader.
 *
 * Prepends NEXT_PUBLIC_BASE_PATH (set at build time) to every image src so
 * that static exports work correctly on both:
 *   - GitHub Pages:  USE_GITHUB_PAGES=true  → basePath = "/pc_quanti"
 *   - Custom domain: USE_GITHUB_PAGES unset  → basePath = ""
 *
 * No changes are needed in components — this loader is wired globally via
 * the `loaderFile` option in next.config.ts.
 */
export default function siteImageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Leave absolute, protocol-relative and data/blob URLs alone.
  if (!src.startsWith('/') || src.startsWith('//')) {
    return src;
  }
  // Avoid double-prefixing if src is already under basePath (a path segment
  // match, so "/pc_quanti-logo.webp" is still prefixed).
  if (basePath && (src === basePath || src.startsWith(`${basePath}/`))) {
    return src;
  }
  return `${basePath}${src}`;
}
