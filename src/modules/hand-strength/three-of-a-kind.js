import groupBy from 'lodash.groupby';

export function isThreeOfAKind(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const criteria = keys.some(key => groups[key].length === 3)
    && keys.length === 3;

  const value = parseInt(keys.find(key => groups[key].length === 3), 10);

  const kickers = keys
    .filter(key => parseInt(key, 10) !== value)
    .map(kicker => parseInt(kicker, 10))
    .sort((a, b) => b - a);

  return criteria && {
    values: [value],
    kickers
  };
}

export function hasThreeOfAKind(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const criteria = keys.some(key => groups[key].length === 3);

  const values = keys
    .filter(key => groups[key].length === 3)
    .map(value => parseInt(value, 10))
    .sort((a, b) => b - a);

  const kickers = keys
    .filter(key => groups[key].length !== 3)
    .map(kicker => parseInt(kicker, 10))
    .sort((a, b) => b - a);

  return criteria && {
    values,
    kickers
  };
}
