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
    .map(key => parseInt(key, 10));

  return criteria && {
    values
  };
}

export function hasFullHouse(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const hasAThreeOfAKind = keys
    .filter(key => groups[key].length === 3)
    .sort((a, b) => groups[b] - groups[a]);

  const values = keys
    .filter(key => groups[key].length === 3 || groups[key].length === 2)
    .sort((a, b) => b - a)
    .map(key => parseInt(key, 10));

  const criteria = hasAThreeOfAKind.length >= 1 && values.length > 1;

  return criteria && {
    values
  };
}
