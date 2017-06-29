import groupBy from 'lodash.groupBy';
import { isLooselyFlush } from './flush';
import { isLooselyStraight } from './straight'

export function isHighCard (hand) {
  const groups = groupBy(hand, 'value');

  return Object.keys(groups).length === 5 && !isLooselyFlush(hand) && !isLooselyStraight(hand);
}
