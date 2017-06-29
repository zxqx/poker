import { isStraight } from '../../../../src/modules/hand-strength/straight';
import { straights, nonStraights } from './straight.hands.js';

describe('straight', () => {
  it('should determine hand is straight', () => {
    straights.forEach(hand => {
      expect(isStraight(hand)).toBe(true);
    });
  });

  it('should determine hand is not straight', () => {
    nonStraights.forEach(hand => {
      expect(isStraight(hand)).toBe(false);
    });
  });
});
