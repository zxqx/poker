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
  });

  //it('should determine hand is not straight flush', () => {
    //nonStraightFlushes.forEach(hand => {
      //expect(isStraightFlush(hand)).toBe(false);
    //});
  //});
});
