import { isStraightFlush } from './straight-flush.js';
import { isFourOfAKind } from './four-of-a-kind.js';
import { isFullHouse } from './full-house.js';
import { isFlush } from './flush.js';
import { isStraight } from './straight.js';
import { isThreeOfAKind } from './three-of-a-kind.js';
import { isTwoPair } from './two-pair.js';
import { isPair } from './pair.js';

export const handRankings = [
  {
    id: 'straight-flush',
    name: 'Straight Flush',
    strength: 8,
    evaluator: isStraightFlush
  },
  {
    id: 'four-of-a-kind',
    name: 'Four of a Kind',
    strength: 7,
    evaluator: isFourOfAKind
  },
  {
    id: 'full-house',
    name: 'Full House',
    strength: 6,
    evaluator: isFullHouse
  },
  {
    id: 'flush',
    name: 'Flush',
    strength: 5,
    evaluator: isFlush
  },
  {
    id: 'straight',
    name: 'Straight',
    strength: 4,
    evaluator: isStraight
  },
  {
    id: 'three-of-a-kind',
    name: 'Three of a Kind',
    strength: 3,
    evaluator: isThreeOfAKind
  },
  {
    id: 'two-pair',
    name: 'Two Pair',
    strength: 2,
    evaluator: isTwoPair
  },
  {
    id: 'pair',
    name: 'Pair',
    strength: 1,
    evaluator: isPair
  }
];

export function determineHandRanking(hand) {
  return handRankings.find(ranking => ranking.evaluator(hand));
}
