import { hasFourOfAKind } from '../../../../src/modules/hand-strength/four-of-a-kind';
import {
  fourOfAKind1,
  fourOfAKind2,
  nonFourOfAKind1
} from './has-four-of-a-kind.hands.js';

describe('four of a kind', () => {
  it('should determine hand has four of a kind', () => {
    expect(hasFourOfAKind(fourOfAKind1)).toEqual({
      values: [10],
      kickers: [13,7,2]
    });
    expect(hasFourOfAKind(fourOfAKind2)).toEqual({
      values: [5],
      kickers: [4]
    });
  });
  it('should determine hand is not four of a kind', () => {
    expect(hasFourOfAKind(nonFourOfAKind1)).toBe(false);
  });
});
