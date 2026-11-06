export function isLeapYear(year: number): boolean {
  if (!Number.isSafeInteger(year)) throw new TypeError('Expected integer year');
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
