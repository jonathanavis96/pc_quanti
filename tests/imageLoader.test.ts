import { test } from 'node:test';
import assert from 'node:assert/strict';
import loader from '../src/lib/imageLoader.ts';

function load(src: string, base: string) {
  process.env.NEXT_PUBLIC_BASE_PATH = base;
  return loader({ src, width: 640 });
}

test('prefixes a root-relative src with the base path', () => {
  assert.equal(load('/logo.webp', '/pc_quanti'), '/pc_quanti/logo.webp');
});

test('does not double-prefix a src already under the base path', () => {
  assert.equal(load('/pc_quanti/logo.webp', '/pc_quanti'), '/pc_quanti/logo.webp');
});

test('prefixes a file whose name merely starts with the base path text', () => {
  assert.equal(load('/pc_quanti-logo.webp', '/pc_quanti'), '/pc_quanti/pc_quanti-logo.webp');
});

test('leaves absolute and data URLs untouched', () => {
  assert.equal(load('https://cdn.example.com/a.webp', '/pc_quanti'), 'https://cdn.example.com/a.webp');
  assert.equal(load('data:image/png;base64,AAAA', '/pc_quanti'), 'data:image/png;base64,AAAA');
});

test('returns src unchanged when no base path is set', () => {
  assert.equal(load('/logo.webp', ''), '/logo.webp');
});
