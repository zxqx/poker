import groupBy from 'lodash.groupby';

export function isThreeOfAKind(hand) {
  const groups = groupBy(hand, 'value');

  return Object.keys(groups)
    .some(key => groups[key].length === 3)
    && Object.keys(groups).length === 3;
}
