import { isHighCard } from '../../../../src/modules/hand-strength/high-card';
import {
  highCard1,
  highCard2,
  highCard3,
  highCard4,
  highCard5,
  nonHighCard1,
  nonHighCard2,
  nonHighCard3,
  nonHighCard4
} from './high-card.hands.js';

describe('high card', () => {
  it('should determine hand ranking is high card', () => {
    expect(isHighCard(highCard1)).toEqual({
      values: [13, 6, 5, 4, 2]
    });

    expect(isHighCard(highCard2)).toEqual({
      values: [14, 9, 8, 6, 5]
    });

    expect(isHighCard(highCard3)).toEqual({
      values: [11, 10, 9, 8, 2]
    });

    expect(isHighCard(highCard4)).toEqual({
      values: [14, 11, 6, 3, 2]
    });

    expect(isHighCard(highCard5)).toEqual({
      values: [14, 8, 4, 3, 2]
    });
  });

  it('should determine hand ranking is not high card', () => {
    expect(isHighCard(nonHighCard1)).toBe(false);
    expect(isHighCard(nonHighCard2)).toBe(false);
    expect(isHighCard(nonHighCard3)).toBe(false);
    expect(isHighCard(nonHighCard4)).toBe(false);
  });
});
