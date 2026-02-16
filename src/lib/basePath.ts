/**
 * Get the base path for the application
 * Used for assets and images when deploying to GitHub Pages subdirectory
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Helper to prefix asset URLs with base path
 * @param path - The asset path (e.g., '/logo.webp')
 * @returns The full path with base path prefix
 */
export function withBasePath(path: string): string {
  if (!path.startsWith('/')) {
    path = `/${path}`;
  }
  return `${basePath}${path}`;
}
