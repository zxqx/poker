import groupBy from 'lodash.groupby';

export function isFullHouse(hand) {
  const groups = groupBy(hand, 'value');

  return Object.keys(groups).every(key => {
    const group = groups[key];
    return group.length === 2 || group.length === 3;
  });
}
