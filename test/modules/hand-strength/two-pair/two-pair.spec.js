import { isTwoPair } from '../../../../src/modules/hand-strength/two-pair';
import { twoPairs, nonTwoPairs } from './two-pair.hands.js';

describe('two pair', () => {
  it('should determine hand is a two pair', () => {
    twoPairs.forEach(hand => {
      expect(isTwoPair(hand)).toBe(true);
    });
  });

  it('should determine hand is not a two pair', () => {
    nonTwoPairs.forEach(hand => {
      expect(isTwoPair(hand)).toBe(false);
    });
  });
});
