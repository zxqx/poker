import groupBy from 'lodash.groupBy';
import { isLooselyFlush } from './flush.js';
import { isLooselyStraight } from './straight.js';

export function isStraightFlush(hand) {
  return isLooselyStraight(hand) && isLooselyFlush(hand);
}
