import {
  hasStraightFlush,
  isStraightFlush
} from './straight-flush.js';



export function isRoyalFlush(hand) {
  const results = isStraightFlush(hand);
  const highCard = results.values;
  const criteria =  results && highCard;
  console.log(criteria)



  return criteria && { values: highCard } ;
}

/*export function hasRoyalFlush(hand) {
  const straightFlush = hasStraightFlush(hand);
  const value = straightFlush.values;
  const hasAceHigh = value === 14;
  const criteria = straightFlush && hasAceHigh;

  return criteria && { values: value };
}
*/
