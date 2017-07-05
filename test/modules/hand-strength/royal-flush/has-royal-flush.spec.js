import { hasRoyalFlush } from '../../../../src/modules/hand-strength/royal-flush';
import {
  royalFlush1,
  nonRoyalFlush1,
  nonRoyalFlush2
} from './has-royal-flush.hands.js';

describe('royal flush', () => {
  it('should determine hand contains a royal flush', () => {
    expect(hasRoyalFlush(royalFlush1)).toEqual({
      values: [14]
    });
  });

  it('should determine hand is not straight', () => {
    expect(hasRoyalFlush(nonRoyalFlush1)).toBe(false);
    expect(hasRoyalFlush(nonRoyalFlush2)).toBe(false);
    expect(hasRoyalFlush(nonRoyalFlush2)).toBe(false);
  });
});
