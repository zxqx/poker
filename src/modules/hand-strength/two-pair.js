import groupBy from 'lodash.groupBy';

export function isTwoPair(hand) {
  const groups = groupBy(hand, 'value');

  return Object.keys(groups)
    .filter(key => groups[key].length === 2)
    .length === 2;
}
