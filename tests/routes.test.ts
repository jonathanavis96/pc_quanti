import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { indexableRoutes, unlistedRoutes, sitemapPriority } from '../src/lib/routes.ts';

const appDir = join(import.meta.dirname, '..', 'app');

function pageRoutes(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return pageRoutes(path);
    if (!/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) return [];
    const route = relative(appDir, dir).split(sep).join('/');
    return [route ? `/${route}` : ''];
  });
}

test('every page under app/ is either in the sitemap or deliberately unlisted', () => {
  const known = new Set<string>([...indexableRoutes, ...unlistedRoutes]);
  const missing = pageRoutes(appDir).filter((route) => !known.has(route));
  assert.deepEqual(missing, []);
});

test('every sitemap route has a page', () => {
  const pages = new Set(pageRoutes(appDir));
  const orphaned = indexableRoutes.filter((route) => !pages.has(route));
  assert.deepEqual(orphaned, []);
});

test('sitemap priorities', () => {
  assert.equal(sitemapPriority(''), 1);
  assert.equal(sitemapPriority('/contact'), 0.9);
  assert.equal(sitemapPriority('/privacy-policy'), 0.3);
  assert.equal(sitemapPriority('/team'), 0.8);
  assert.equal(sitemapPriority('/terms-of-reference'), 0.8);
});
