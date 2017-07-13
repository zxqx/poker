import { isRoyalFlush } from '../../../../src/modules/hand-strength/royal-flush';
import {
  royalFlush1,
  nonRoyalFlush1,
  nonRoyalFlush2,
  nonRoyalFlush3
} from './royal-flush.hands.js';

describe('royal flush', () => {
  it('should determine hand is a royal flush', () => {
    expect(isRoyalFlush(royalFlush1)).toEqual({
      values: [14]
    });
  });

  it('should determine hand is not a royal flush', () => {
    expect(isRoyalFlush(nonRoyalFlush1)).toBe(false);
    expect(isRoyalFlush(nonRoyalFlush2)).toBe(false);
    expect(isRoyalFlush(nonRoyalFlush3)).toBe(false);
  });
});
