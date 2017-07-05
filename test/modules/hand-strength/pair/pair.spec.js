import { isPair } from '../../../../src/modules/hand-strength/pair';
import {
  pairs1,
  pairs2,
  nonPairs1,
  nonPairs2,
  nonPairs3,
  nonPairs4,
  nonPairs5,
  nonPairs6
} from './pair.hands.js';

describe('pair', () => {
  it('should determine hand contains a pair', () => {
    expect(isPair(pairs1)).toEqual({
      values: [5],
      kickers: [6, 4, 2]
    });

    expect(isPair(pairs2)).toEqual({
      values: [8],
      kickers: [11, 9, 6]
    });
  });

  it('should determine hand does not contain a pair', () => {
    expect(isPair(nonPairs1)).toBe(false);
    expect(isPair(nonPairs2)).toBe(false);
    expect(isPair(nonPairs3)).toBe(false);
    expect(isPair(nonPairs4)).toBe(false);
    expect(isPair(nonPairs5)).toBe(false);
    expect(isPair(nonPairs6)).toBe(false);
  });
});
