import groupBy from 'lodash.groupBy';

export function isFlush(hand) {
  const groups = groupBy(hand, 'suit');

  return Object.keys(groups).length === 1;
}

