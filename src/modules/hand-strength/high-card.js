import groupBy from 'lodash.groupBy';
import { isFlush } from './flush';


export function isHighCard (hand) {
  const groups = groupBy(hand, 'value');

  return Object.keys(groups).length === 5 && !isFlush(hand);
}

