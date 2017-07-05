import groupBy from 'lodash.groupby';
import { isLooselyFlush, hasFlush } from './flush';
import { isLooselyStraight, hasStraight } from './straight';

export function isHighCard(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const criteria = keys.length === 5 &&
    !isLooselyFlush(hand) && !isLooselyStraight(hand);

  const values = keys.map(key => parseInt(key, 10))
    .sort((a, b) => b - a);

  return criteria && {
    values
  };
}

export function hasHighCard(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const criteria = keys.length === hand.length &&
    !hasFlush(hand) && !hasStraight(hand);

  const values = keys.map(key => parseInt(key, 10))
    .sort((a, b) => b - a);

  return criteria && {
    values
  };
}
