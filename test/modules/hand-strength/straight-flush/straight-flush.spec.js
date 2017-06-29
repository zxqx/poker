import { isStraightFlush } from '../../../../src/modules/hand-strength/straight-flush';
import { straightFlushes, nonStraightFlushes } from './straight-flush.hands.js';

describe('straight flush', () => {
  it('should determine hand is straight flush', () => {
    straightFlushes.forEach(hand => {
      expect(isStraightFlush(hand)).toBe(true);
    });
  });

  it('should determine hand is not straight flush', () => {
    nonStraightFlushes.forEach(hand => {
      expect(isStraightFlush(hand)).toBe(false);
    });
  });
});
