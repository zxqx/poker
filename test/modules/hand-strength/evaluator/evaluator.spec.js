import { determineHandRanking } from '../../../../src/modules/hand-strength/evaluator.js';
import {
  straightFlushes,
  fourOfAKinds,
  fullHouses,
  flushes,
  straights,
  threeOfAKinds,
  twoPairs,
  pairs
} from './evaluator.hands.js';

describe('evaluator', () => {
  it('should determine hands are straight flushes', () => {
    straightFlushes.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('straight-flush');
    });
  });

  it('should determine hands are four of a kinds', () => {
    fourOfAKinds.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('four-of-a-kind');
    });
  });

  it('should determine hands are full houses', () => {
    fullHouses.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('full-house');
    });
  });

  it('should determine hands are flushes', () => {
    flushes.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('flush');
    });
  });

  it('should determine hands are straights', () => {
    straights.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('straight');
    });
  });

  it('should determine hands are three of a kinds', () => {
    threeOfAKinds.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('three-of-a-kind');
    });
  });

  it('should determine hands are two pairs', () => {
    twoPairs.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('two-pair');
    });
  });

  it('should determine hands are pairs', () => {
    pairs.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('pair');
    });
  });
});
