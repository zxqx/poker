import { hasStraightFlush } from '../../../../src/modules/hand-strength/straight-flush';
import {
  straightFlush1,
  nonStraightFlush1,
  nonStraightFlush2
} from './has-straight-flush.hands.js';

describe('straight flush', () => {
  it('should determine hand is straight flush', () => {
    expect(hasStraightFlush(straightFlush1)).toEqual({
      values: [11]
    });
  });

  it('should determine hand is not straight', () => {
    expect(hasStraightFlush(nonStraightFlush1)).toBe(false);
    expect(hasStraightFlush(nonStraightFlush2)).toBe(false);
  });
});
