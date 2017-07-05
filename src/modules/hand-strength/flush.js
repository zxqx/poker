import groupBy from 'lodash.groupby';
import { isLooselyStraight } from './straight.js';

export function isLooselyFlush(hand) {
  const groups = groupBy(hand, 'suit');

  return Object.keys(groups).length === 1;
}

function getValues(hand) {
  const groups = groupBy(hand, 'suit');
  const keys = Object.keys(groups);

  const suit = keys.find(key => groups[key].length >= 5);

  return groups[suit]
    .map(card => card.value)
    .sort((a, b) => b - a)
    .slice(0, 5);
}

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

export function hasFlush(hand) {
  const groups = groupBy(hand, 'suit');
  const keys = Object.keys(groups);

  const criteria = keys.some(key => groups[key].length >= 5);
  const suit = keys.find(key => groups[key].length >= 5);

  return criteria && {
    values: getValues(hand),
    suit
  };
}
