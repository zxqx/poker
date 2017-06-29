import { isFullHouse } from '../../../../src/modules/hand-strength/full-house';
import { fullHouses, nonFullHouses } from './full-house.hands.js';

describe('full house', () => {
  it('should determine hand is full house', () => {
    fullHouses.forEach(hand => {
      expect(isFullHouse(hand)).toBe(true);
    });
  });

  it('should determine hand is not full house', () => {
    nonFullHouses.forEach(hand => {
      expect(isFullHouse(hand)).toBe(false);
    });
  });
});
