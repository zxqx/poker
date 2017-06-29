import groupBy from 'lodash.groupby';

export function isFourOfAKind(hand) {
  const groups = groupBy(hand, 'value');

  return Object.keys(groups)
    .some(key => groups[key].length === 4);
}
