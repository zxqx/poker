import { hasTwoPair } from '../../../../src/modules/hand-strength/two-pair.js';
import {
  twoPairs1,
  nonTwoPairs1,
  nonTwoPairs2
} from './has-two-pair.hands.js';

describe('two pair', () => {
  it('should determine hand contains a two pair', () => {
    expect(hasTwoPair(twoPairs1)).toEqual({
      values: [5, 2],
      kickers: [14, 6, 4]
    });
  });

  it('should determine hand does not contain a flush', () => {
    expect(hasTwoPair(nonTwoPairs1)).toBe(false);
    expect(hasTwoPair(nonTwoPairs2)).toBe(false);
  });
});
