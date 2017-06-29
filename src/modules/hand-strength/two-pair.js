import groupBy from 'lodash.groupBy';

export function isTwoPair(hand) {
  const groups = groupBy(hand, 'value');

  return Object.keys(groups).filter(key => {
    const group = groups[key];
    return group.length === 2;
  }).length === 2;
}
