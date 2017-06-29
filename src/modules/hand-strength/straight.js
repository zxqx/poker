import { isLooselyFlush } from './flush.js';

export function isStraight(hand) {
  const sortedHand = hand.sort((a, b) => a.value - b.value);

  return isLooselyStraight(sortedHand) && !isLooselyFlush(sortedHand);
}

export function isLooselyStraight(hand) {
  const sortedHand = hand.sort((a, b) => a.value - b.value);

  return isSequential(sortedHand) || isWheel(sortedHand);
}

function isWheel(sortedHand) {
  const handWithoutAces = sortedHand.filter(card => card.value !== 14);

  return handWithoutAces.length === 4 &&
    handWithoutAces[0].value === 2 &&
    isSequential(handWithoutAces);
}

function isSequential(sortedHand) {
  return sortedHand.every((card, index, arr) =>
    index === arr.length - 1 || card.value + 1 === arr[index + 1].value);
}
