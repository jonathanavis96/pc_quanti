/**
 * Whether the project image carousel has anything to show. An empty or
 * missing image list renders nothing instead of crashing on images[0].
 */
export function hasCarouselImages(images: readonly unknown[] | null | undefined): boolean {
  return Array.isArray(images) && images.length > 0;
}
