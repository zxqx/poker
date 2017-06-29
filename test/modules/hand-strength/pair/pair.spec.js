import { isPair } from '../../../../src/modules/hand-strength/pair';
import { pairs, nonPairs } from './pair.hands.js';

describe('pair', () => {
  it('should determine hand contains a pair', () => {
    pairs.forEach(hand => {
      expect(isPair(hand)).toBe(true);
    });
  });

  it('should determine hand does not contain a pair', () => {
    nonPairs.forEach(hand => {
      expect(isPair(hand)).toBe(false);
    });
  });
});
