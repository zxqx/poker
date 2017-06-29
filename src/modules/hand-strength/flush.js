import groupBy from 'lodash.groupBy';
import { isLooselyStraight } from './straight.js';

export function isFlush(hand) {
  return isLooselyFlush(hand) && !isLooselyStraight(hand);
}

export function isLooselyFlush(hand) {
  const groups = groupBy(hand, 'suit');

  return Object.keys(groups).length === 1;
}
