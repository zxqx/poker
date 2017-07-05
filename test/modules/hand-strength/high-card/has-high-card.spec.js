import { hasHighCard } from '../../../../src/modules/hand-strength/high-card';
import {
  highCard1,
  nonHighCard1,
  nonHighCard2
} from './has-high-card.hands.js';

describe('high card', () => {
  it('should determine hand ranking is high card', () => {
    expect(hasHighCard(highCard1)).toEqual({
      values: [13, 10, 9, 7, 5, 4, 2]
    });
  });

  it('should determine hand ranking is not high card', () => {
    expect(hasHighCard(nonHighCard1)).toBe(false);
    expect(hasHighCard(nonHighCard2)).toBe(false);
  });
});
