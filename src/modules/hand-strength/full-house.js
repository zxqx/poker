import groupBy from 'lodash.groupby';

export function isFullHouse(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const criteria = keys.every(key => {
    const group = groups[key];
    return group.length === 2 || group.length === 3;
  });

  const values = keys
    .sort((a, b) => groups[b].length - groups[a].length)
    .map(key => parseInt(key));

  return criteria && {
    values
  };
}
