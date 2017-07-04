import { isFourOfAKind } from '../../../../src/modules/hand-strength/four-of-a-kind';
import {
  fourOfAKind1,
  fourOfAKind2,
  nonFourOfAKind1,
  nonFourOfAKind2
} from './four-of-a-kind.hands.js';

describe('four of a kind', () => {
  it('should determine hand is four of a kind', () => {
    expect(isFourOfAKind(fourOfAKind1)).toEqual({
      values: [10],
      kickers: [13]
    });
    expect(isFourOfAKind(fourOfAKind2)).toEqual({
      values: [5],
      kickers: [4]
    });
  });

  it('should determine hand is not four of a kind', () => {
    expect(isFourOfAKind(nonFourOfAKind1)).toBe(false);
    expect(isFourOfAKind(nonFourOfAKind2)).toBe(false);
  });
});
