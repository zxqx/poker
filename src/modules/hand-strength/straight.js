export function isStraight(hand) {
  return hand
    .sort((a, b) => a.value - b.value)
    .every((card, index) =>
      hand[index + 1] ? card.value + 1 === hand[index + 1].value : true);
}
