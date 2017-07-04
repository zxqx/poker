import { hasPair } from '../../../../src/modules/hand-strength/pair.js';
import {
  pairs1,
  pairs2,
  nonPairs1
} from './has-pair.hands.js';

describe('pair', () => {
  it('should determine hand contains a pair', () => {
    expect(hasPair(pairs1)).toEqual({
      values: [5],
      kickers: [13,12,6]
    });

    expect(hasPair(pairs2)).toEqual({
      values: [8],
      kickers: [13,12,11]
    });
  });

  it('should determine hand does not contain a flush', () => {
    expect(hasPair(nonPairs1)).toBe(false);
  });
});