import { isLooselyFlush, hasFlush } from './flush.js';
import { isLooselyStraight, hasStraight } from './straight.js';

export function isStraightFlush(hand) {
  const criteria = isLooselyStraight(hand) && isLooselyFlush(hand);
  const highCard = hand.sort((a, b) => a.value - b.value)[4];

  return criteria && {
    values: [highCard.value]
  };
}

export function hasStraightFlush(hand) {
  const straight = hasStraight(hand);
  const flush = hasFlush(hand);

  const criteria = straight && flush;

  return criteria && {
    values: straight.values
  };
}
