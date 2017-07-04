import groupBy from 'lodash.groupby';

export function isThreeOfAKind(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const criteria = keys.some(key => groups[key].length === 3)
    && keys.length === 3;

  const value = parseInt(keys.find(key => groups[key].length === 3));

  const kickers = keys
    .filter(key => parseInt(key) !== value)
    .map(kicker => parseInt(kicker))
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

  const value = keys
    .filter(key => groups[key].length === 3)
    .map(value => parseInt(value))
    .sort((a,b) => b-a)

  const kickers = keys
    .filter(key => groups[key].length !== 3)
    .map(kicker => parseInt(kicker))
    .sort((a,b) => b-a)

  return criteria && {
    values: value,
    kickers
  };
}
