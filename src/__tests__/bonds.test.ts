import test from 'ava';
import {CURRENT_YIELD} from '../bonds';

test('CURRENT_YIELD', (t) => {
  t.is(CURRENT_YIELD(), 2);
});
