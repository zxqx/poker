export function isStraight(hand) {
  const sortedHand = hand
    .map(card => card.value)
    .sort((a, b) => a - b);

  return isSequential(sortedHand) || isWheel(sortedHand);
}

function isWheel(hand) {
  const handWithoutAces = hand.filter(value => value !== 14);

  return handWithoutAces.length === 4 &&
    handWithoutAces[0] === 2 &&
    isSequential(handWithoutAces);
}

function isSequential(arr) {
  return arr.every((value, index) =>
    value + 1 === arr[index + 1] || index === arr.length - 1);
}
