import groupBy from 'lodash.groupby';
import { hasPair } from './pair.js';
import { hasThreeOfAKind } from './three-of-a-kind.js';

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

/*export function hasFullHouse(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const criteria = hasPair(hand) && hasThreeOfAKind(hand);

  const values = keys
    .filter(key => groups[key].length == 3 || groups[key].length == 2)
    .sort((a, b) => groups[b].length - groups[a].length)
    .map(key => parseInt(key));

  return criteria && {
    values: values
  };
}
*/
export function hasFullHouse(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const hasAPair = keys.some(key => groups[key].length == 2);
  const hasAThreeOfAKind = keys.some(key => groups[key].length == 3)

  const criteria = hasAPair && hasAThreeOfAKind

  const values = keys
    .filter(key => groups[key].length == 3 || groups[key].length == 2)
    .sort((a, b) => groups[b].length - groups[a].length)
    .map(key => parseInt(key))

  return criteria && {
    values: values
  };
}
