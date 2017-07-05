import {
  determineHandRanking,
  determineWinningHands
} from '../../../../src/modules/hand-strength/evaluator.js';

import {
  highCards,
  pairs,
  twoPairs,
  threeOfAKinds,
  straights,
  flushes,
  fullHouses,
  fourOfAKinds,
  straightFlushes
} from './rankings.hands.js';

import {
  straightVsThreeOfAKind,
  fullHouseVsFlush,
  sixHanded
} from './winning.hands.js';

describe('evaluator', () => {
  it('should determine hands are high cards', () => {
    highCards.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('high-card');
    });
  });

  it('should determine hands are pairs', () => {
    pairs.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('pair');
    });
  });

  it('should determine hands are two pairs', () => {
    twoPairs.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('two-pair');
    });
  });

  it('should determine hands are three of a kinds', () => {
    threeOfAKinds.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('three-of-a-kind');
    });
  });

  it('should determine hands are straights', () => {
    straights.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('straight');
    });
  });

  it('should determine hands are flushes', () => {
    flushes.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('flush');
    });
  });

  it('should determine hands are full houses', () => {
    fullHouses.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('full-house');
    });
  });

  it('should determine hands are four of a kinds', () => {
    fourOfAKinds.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('four-of-a-kind');
    });
  });

  it('should determine hands are straight flushes', () => {
    straightFlushes.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('straight-flush');
    });
  });

  it('should determine straight is winning hand', () => {
    expect(determineWinningHands(straightVsThreeOfAKind).id).toBe('straight');
  });

  it('should determine full house is winning hand', () => {
    expect(determineWinningHands(fullHouseVsFlush).id).toBe('full-house');
  });

  it('should determine best of 6 hands', () => {
    expect(determineWinningHands(sixHanded).id).toBe('four-of-a-kind');
  });
});
