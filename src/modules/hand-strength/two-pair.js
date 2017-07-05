import groupBy from 'lodash.groupby';

export function isTwoPair(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const pairs = keys.filter(key => groups[key].length === 2);
  const criteria = pairs.length === 2;

  const values = pairs.map(value => parseInt(value, 10))
    .sort((a, b) => b - a);

  const kicker = parseInt(keys.find(key => groups[key].length === 1), 10);

  return criteria && {
    values,
    kickers: [kicker]
  };
}

export function hasTwoPair(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const values = keys
    .filter(key => groups[key].length === 2)
    .map(value => parseInt(value, 10))
    .sort((a, b) => b - a);

  const kickers = keys
    .filter(key => groups[key].length !== 2)
    .map(kicker => parseInt(kicker, 10))
    .sort((a, b) => b - a);

  const criteria = values.length === 2;

  return criteria && {
    values,
    kickers
  };
}
