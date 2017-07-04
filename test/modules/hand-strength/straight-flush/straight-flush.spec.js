import { isStraightFlush } from '../../../../src/modules/hand-strength/straight-flush';
import {
  straightFlush1,
  straightFlush2,
  straightFlush3,
  straightFlush4,
  nonStraightFlush1,
  nonStraightFlush2,
  nonStraightFlush3
} from './straight-flush.hands.js';

describe('straight flush', () => {
  it('should determine hand is straight flush', () => {
    expect(isStraightFlush(straightFlush1)).toEqual({
      values: [6]
    });

    expect(isStraightFlush(straightFlush2)).toEqual({
      values: [9]
    });

    expect(isStraightFlush(straightFlush3)).toEqual({
      values: [11]
    });

    expect(isStraightFlush(straightFlush4)).toEqual({
      values: [14]
    });
  });

  it('should determine hand is not straight flush', () => {
    expect(isStraightFlush(nonStraightFlush1)).toBe(false);
    expect(isStraightFlush(nonStraightFlush2)).toBe(false);
    expect(isStraightFlush(nonStraightFlush3)).toBe(false);
  });
});
