import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('recognizes leap year', () => {
  assert.equal(api.isLeapYear(2024), true);
});
test('recognizes common year', () => {
  assert.equal(api.isLeapYear(2023), false);
});
test('handles non-leap century', () => {
  assert.equal(api.isLeapYear(1900), false);
});
test('handles leap century', () => {
  assert.equal(api.isLeapYear(2000), true);
});
test('handles year zero', () => {
  assert.equal(api.isLeapYear(0), true);
});
test('rejects fractional year', () => {
  assert.throws(() => api.isLeapYear(2024.5), TypeError);
});
