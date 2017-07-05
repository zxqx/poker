import { isLooselyFlush } from './flush.js';
import uniqBy from 'lodash.uniqby';

function isSequential(sortedHand) {
  return sortedHand.every((card, index, arr) =>
    index === arr.length - 1 || card.value + 1 === arr[index + 1].value);
}

function getSequential(sortedHand) {
  const uniqSortedHand = uniqBy(sortedHand, 'value');

  return uniqSortedHand.filter((card, index, arr) =>
    (arr[index + 1] && card.value + 1 === arr[index + 1].value
    &&
    arr[index - 1] && card.value - 1 === arr[index - 1].value)
    || (isSequential(uniqSortedHand.slice(index, index + 5)) &&
      uniqSortedHand.slice(index, index + 5).length === 5)
    || (isSequential(uniqSortedHand.slice(index - 4, index + 1)) &&
      uniqSortedHand.slice(index - 4, index + 1).length === 5)
  );
}

function isWheel(sortedHand) {
  const handWithoutAces = sortedHand.filter(card => card.value !== 14);

  return handWithoutAces.length === 4 &&
    handWithoutAces[0].value === 2 &&
    isSequential(handWithoutAces);
}

export function isLooselyStraight(hand) {
  const sortedHand = hand.sort((a, b) => a.value - b.value);

  return isSequential(sortedHand) || isWheel(sortedHand);
}

function hasWheel(sortedHand) {
  const wheel = uniqBy(sortedHand.filter(card =>
    card.value === 14 ||
    card.value === 2 ||
    card.value === 3 ||
    card.value === 4 ||
    card.value === 5
  ), 'value');

  return wheel[0].value === 2
    && wheel.length === 5;
}

export function isStraight(hand) {
  const sortedHand = hand.sort((a, b) => a.value - b.value);
  const criteria = isLooselyStraight(sortedHand) && !isLooselyFlush(sortedHand);

  return criteria && {
    values: isWheel(sortedHand) ? [5] : [sortedHand[4].value]
  };
}

export function hasStraight(hand) {
  const sortedHand = hand.sort((a, b) => a.value - b.value);
  const sequential = getSequential(hand);

  if (sequential.length >= 5) {
    return {
      values: [sequential[sequential.length - 1].value]
    };
  }

  else if (hasWheel(sortedHand)) {
    return {
      values: [5]
    };
  }

  return false;
}
