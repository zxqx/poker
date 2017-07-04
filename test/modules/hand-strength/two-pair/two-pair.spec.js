import { isTwoPair } from '../../../../src/modules/hand-strength/two-pair';
import {
  twoPair1,
  twoPair2,
  nonTwoPair1,
  nonTwoPair2,
  nonTwoPair3,
  nonTwoPair4,
  nonTwoPair5
} from './two-pair.hands.js';

describe('two pair', () => {
  it('should determine hand is a two pair', () => {
    expect(isTwoPair(twoPair1)).toEqual({
      values: [5, 2],
      kickers: [6]
    });

    expect(isTwoPair(twoPair2)).toEqual({
      values: [8, 6],
      kickers: [9]
    });
  });

  it('should determine hand is not a two pair', () => {
    expect(isTwoPair(nonTwoPair1)).toBe(false);
    expect(isTwoPair(nonTwoPair2)).toBe(false);
    expect(isTwoPair(nonTwoPair3)).toBe(false);
    expect(isTwoPair(nonTwoPair4)).toBe(false);
    expect(isTwoPair(nonTwoPair5)).toBe(false);
  });
});
