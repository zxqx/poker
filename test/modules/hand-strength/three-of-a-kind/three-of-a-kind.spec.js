import { isThreeOfAKind } from '../../../../src/modules/hand-strength/three-of-a-kind';
import {
  threeOfAKind1,
  threeOfAKind2,
  nonThreeOfAKind1,
  nonThreeOfAKind2
} from './three-of-a-kind.hands.js';

describe('three of a kind', () => {
  it('should determine hand is three of a kind', () => {
    expect(isThreeOfAKind(threeOfAKind1)).toEqual({
      values: [10],
      kickers: [13, 3]
    });

    expect(isThreeOfAKind(threeOfAKind2)).toEqual({
      values: [5],
      kickers: [8, 4]
    });
  });

  it('should determine hand is not three of a kind', () => {
    expect(isThreeOfAKind(nonThreeOfAKind1)).toBe(false);
    expect(isThreeOfAKind(nonThreeOfAKind2)).toBe(false);
  });
});
