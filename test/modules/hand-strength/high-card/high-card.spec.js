import { isHighCard } from '../../../../src/modules/hand-strength/high-card';
import { highCard, nonHighCard } from './high-card.hands.js';

describe('high card', () => {
  it('should determine hand ranking is high card', () => {
    highCard.forEach(hand => {
      expect(isHighCard(hand)).toBe(true);
    });
  });

  it('should determine hand ranking is not high card', () => {
    nonHighCard.forEach(hand => {
      expect(isHighCard(hand)).toBe(false);
    });
  });
});
