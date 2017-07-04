import { isStraight } from '../../../../src/modules/hand-strength/straight';
import {
  straight1,
  straight2,
  straight3,
  straight4,
  straight5,
  nonStraight1,
  nonStraight2,
  nonStraight3
} from './straight.hands.js';

describe('straight', () => {
  it('should determine hand is straight', () => {
    expect(isStraight(straight1)).toEqual({
      values: [6]
    });

    expect(isStraight(straight2)).toEqual({
      values: [9]
    });

    expect(isStraight(straight3)).toEqual({
      values: [11]
    });

    expect(isStraight(straight4)).toEqual({
      values: [14]
    });

    expect(isStraight(straight5)).toEqual({
      values: [5]
    });
  });

  it('should determine hand is not straight', () => {
    expect(isStraight(nonStraight1)).toBe(false);
    expect(isStraight(nonStraight2)).toBe(false);
    expect(isStraight(nonStraight3)).toBe(false);
  });
});
