import { hasFullHouse } from '../../../../src/modules/hand-strength/full-house';
import {
  fullHouse1,
  fullHouse2,
  nonFullHouse1,
  nonFullHouse2
} from './has-full-house.hands.js';

describe('full house', () => {
  it('should determine hand has a full house', () => {
    expect(hasFullHouse(fullHouse1)).toEqual({
      values: [8, 3]
    });
    expect(hasFullHouse(fullHouse2)).toEqual({
      values: [13, 8]
    });
  });

  it('should determine hand is not full house', () => {
    expect(hasFullHouse(nonFullHouse1)).toBe(false);
    expect(hasFullHouse(nonFullHouse2)).toBe(false);
  });
});
