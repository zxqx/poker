import { isThreeOfAKind } from '../../../../src/modules/hand-strength/three-of-a-kind';
import { threeOfAKinds, nonThreeOfAKinds } from './three-of-a-kind.hands.js';

describe('three of a kind', () => {
  it('should determine hand is three of a kind', () => {
    threeOfAKinds.forEach(hand => {
      expect(isThreeOfAKind(hand)).toBe(true);
    });
  });

  it('should determine hand is not three of a kind', () => {
    nonThreeOfAKinds.forEach(hand => {
      expect(isThreeOfAKind(hand)).toBe(false);
    });
  });
});
