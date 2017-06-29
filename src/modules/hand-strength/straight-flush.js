import { isFlush } from './flush';
import { isStraight } from './straight';
import  groupBy from 'lodash.groupBy';

export function isStraightFlush (hand) {
   const flush = isFlush(hand);
   const straight = isStraight(hand);

   return flush && straight;
}

