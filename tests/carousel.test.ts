import { test } from 'node:test';
import assert from 'node:assert/strict';
import { hasCarouselImages } from '../src/lib/carousel.ts';

test('an empty or missing image list has nothing to render', () => {
  assert.equal(hasCarouselImages([]), false);
  assert.equal(hasCarouselImages(undefined), false);
  assert.equal(hasCarouselImages(null), false);
});

test('a non-empty image list renders', () => {
  assert.equal(hasCarouselImages([{ src: '/a.webp', alt: 'a' }]), true);
});
