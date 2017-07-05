import { hasStraightFlush } from './straight-flush.js';
import { hasStraight } from './straight.js'


export function hasRoyalFlush(hand) {
  const straightFlush = hasStraightFlush(hand);
  const values = straightFlush.values
  const hasAceHigh = values == 14;
  const criteria = straightFlush && hasAceHigh;

  console.log(values)

  return criteria && {
    values: values
  };
}
