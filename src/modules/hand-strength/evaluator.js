import { isHighCard } from './high-card.js';
import { isPair } from './pair.js';
import { isTwoPair } from './two-pair.js';
import { isThreeOfAKind } from './three-of-a-kind.js';
import { isStraight } from './straight.js';
import { isFlush } from './flush.js';
import { isFullHouse } from './full-house.js';
import { isFourOfAKind } from './four-of-a-kind.js';
import { isStraightFlush } from './straight-flush.js';

export const handRankings = [
  {
    id: 'high-card',
    name: 'High Card',
    strength: 0,
    evaluator: isHighCard
  },
  {
    id: 'pair',
    name: 'Pair',
    strength: 1,
    evaluator: isPair
  },
  {
    id: 'two-pair',
    name: 'Two Pair',
    strength: 2,
    evaluator: isTwoPair
  },
  {
    id: 'three-of-a-kind',
    name: 'Three of a Kind',
    strength: 3,
    evaluator: isThreeOfAKind
  },
  {
    id: 'straight',
    name: 'Straight',
    strength: 4,
    evaluator: isStraight
  },
  {
    id: 'flush',
    name: 'Flush',
    strength: 5,
    evaluator: isFlush
  },
  {
    id: 'full-house',
    name: 'Full House',
    strength: 6,
    evaluator: isFullHouse
  },
  {
    id: 'four-of-a-kind',
    name: 'Four of a Kind',
    strength: 7,
    evaluator: isFourOfAKind
  },
  {
    id: 'straight-flush',
    name: 'Straight Flush',
    strength: 8,
    evaluator: isStraightFlush
  }
];

export function determineHandRanking(hand) {
  return handRankings.find(ranking => ranking.evaluator(hand));
}
