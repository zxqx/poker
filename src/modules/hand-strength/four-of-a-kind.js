import groupBy from 'lodash.groupby';

export function isFourOfAKind(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const criteria = keys.some(key => groups[key].length === 4);

  const value = parseInt(keys.find(key => groups[key].length === 4), 10);

  const kickers = keys
    .filter(key => parseInt(key, 10) !== value)
    .map(kicker => parseInt(kicker, 10))
    .sort((a, b) => b - a);

  return criteria && {
    values: [value],
    kickers
  };
}

export function hasFourOfAKind(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const criteria = keys.some(key => groups[key].length === 4);

  const values = keys
    .filter(key => groups[key].length === 4)
    .map(value => parseInt(value, 10))
    .sort((a, b) => b - a);

  const kickers = keys
    .filter(key => groups[key].length !== 4)
    .map(kicker => parseInt(kicker, 10))
    .sort((a, b) => b - a);

  return criteria && {
    values,
    kickers
  };
}
