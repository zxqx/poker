import groupBy from 'lodash.groupby';

export function isTwoPair(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const pairs = keys.filter(key => groups[key].length === 2);
  const criteria = pairs.length === 2;

  const values = pairs.map(value => parseInt(value))
    .sort((a, b) => b - a);

  const kicker = parseInt(keys.find(key => groups[key].length === 1));

  return criteria && {
    values,
    kickers: [kicker]
  };
}

export function hasTwoPair(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const value = keys
    .filter(key => groups[key].length === 2)
    .map(value => parseInt(value))
    .sort((a,b) => b-a)

  const kickers = keys
    .filter(key => groups[key].length !== 2)
    .map(kicker => parseInt(kicker))
    .sort((a,b) => b-a)

  const criteria = value.length == 2;

  return criteria &&  {
    values: value,
    kickers
  };
}
