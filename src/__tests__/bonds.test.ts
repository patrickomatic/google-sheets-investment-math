import test from 'ava';
import {CURRENT_YIELD, YIELD_TO_MATURITY} from '../bonds';

test('CURRENT_YIELD', (t) => {
  t.is(CURRENT_YIELD(50, 1000), 0.05);
});

test('YIELD_TO_MATURITY', (t) => {
  t.is(YIELD_TO_MATURITY(50, 1000), 0.05);
});
