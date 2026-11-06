import * as api from '@lp-labs/gregorian-leap-year';
import { isLeapYear } from '@lp-labs/gregorian-leap-year';
console.log(isLeapYear(2024));
// @ts-expect-error invalid argument must be rejected by declarations
api.isLeapYear('2024');
