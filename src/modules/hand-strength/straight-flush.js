import groupBy from 'lodash.groupBy';
import { isLooselyFlush } from './flush.js';
import { isLooselyStraight } from './straight.js';

export function isStraightFlush(hand) {
  const criteria = isLooselyStraight(hand) && isLooselyFlush(hand);
  const highCard = hand.sort((a, b) => a.value - b.value)[4];

  return criteria && {
    values: [highCard.value]
  };
}
