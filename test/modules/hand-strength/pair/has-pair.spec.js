import { hasPair } from '../../../../src/modules/hand-strength/pair.js';
import {
  pairs1,
  pairs2,
  pairs3,
  pairs4,
  nonPairs1
} from './has-pair.hands.js';

describe('pair', () => {
  it('should determine hand contains a pair', () => {
    expect(hasPair(pairs1)).toEqual({
      values: [5],
      kickers: [13, 12, 6, 4, 2]
    });

    expect(hasPair(pairs2)).toEqual({
      values: [8],
      kickers: [13, 12, 11, 9, 6, 3]
    });

    expect(hasPair(pairs3)).toEqual({
      values: [8, 6],
      kickers: [13, 12, 11, 3]
    });

    expect(hasPair(pairs4)).toEqual({
      values: [11, 8, 6],
      kickers: [13, 3]
    });
  });

  it('should determine hand does not contain a flush', () => {
    expect(hasPair(nonPairs1)).toBe(false);
  });
});
