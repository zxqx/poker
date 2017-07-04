import groupBy from 'lodash.groupby';

export function isFullHouse(hand) {
  const groups = groupBy(hand, 'value');

  const criteria = Object.keys(groups).every(key => {
    const group = groups[key];
    return group.length === 2 || group.length === 3;
  });

  const values = Object.keys(groups);

  return criteria && {
    values: 'values'
  };
}
