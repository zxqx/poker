import groupBy from 'lodash.groupBy';
import { isLooselyFlush } from './flush';
import { isLooselyStraight } from './straight'

export function isHighCard(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const criteria = keys.length === 5 &&
    !isLooselyFlush(hand) && !isLooselyStraight(hand);

  const values = keys.map(key => parseInt(key))
    .sort((a, b) => b - a);

  return criteria && {
    values
  };
}
