import { isFullHouse } from '../../../../src/modules/hand-strength/full-house';
import {
  fullHouse1,
  fullHouse2,
  nonFullHouse1,
  nonFullHouse2
} from './full-house.hands.js';

describe('full house', () => {
  it('should determine hand is full house', () => {
    expect(isFullHouse(fullHouse1)).toEqual({
      values: [8, 3]
    });

    expect(isFullHouse(fullHouse2)).toEqual({
      values: [5, 4]
    });
  });

  it('should determine hand is not full house', () => {
    expect(isFullHouse(nonFullHouse1)).toBe(false);
    expect(isFullHouse(nonFullHouse2)).toBe(false);
  });
});
