import { isFourOfAKind } from '../../../../src/modules/hand-strength/four-of-a-kind';
import { fourOfAKinds, nonFourOfAKinds } from './four-of-a-kind.hands.js';

describe('four of a kind', () => {
  it('should determine hand is four of a kind', () => {
    fourOfAKinds.forEach(hand => {
      expect(isFourOfAKind(hand)).toBeTruthy();
    });
  });

  it('should determine hand is not four of a kind', () => {
    nonFourOfAKinds.forEach(hand => {
      expect(isFourOfAKind(hand)).toBe(false);
    });
  });
});
