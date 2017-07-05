import { hasThreeOfAKind } from '../../../../src/modules/hand-strength/three-of-a-kind';
import {
  threeOfAKind1,
  threeOfAKind2,
  nonThreeOfAKind1
} from './has-three-of-a-kind.hands.js';

describe('three of a kind', () => {
  it('should determine hand has a three of a kind', () => {
    expect(hasThreeOfAKind(threeOfAKind1)).toEqual({
      values: [10],
      kickers: [13, 5, 3, 2]
    });
    expect(hasThreeOfAKind(threeOfAKind2)).toEqual({
      values: [5, 4],
      kickers: [7]
    });
  });
  it('should determine hand is not three of a kind', () => {
    expect(hasThreeOfAKind(nonThreeOfAKind1)).toBe(false);
  });
});
