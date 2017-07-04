import groupBy from 'lodash.groupBy';

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
