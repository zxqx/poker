import groupBy from 'lodash.groupBy';
import { isLooselyStraight } from './straight.js';

export function isFlush(hand) {
  const criteria = isLooselyFlush(hand) && !isLooselyStraight(hand);

  const values = hand
    .sort((a, b) => b.value - a.value)
    .map(card => card.value);

  return criteria && {
    values,
    suit: hand[0].suit
  };
}

export function isLooselyFlush(hand) {
  const groups = groupBy(hand, 'suit');

  return Object.keys(groups).length === 1;
}
