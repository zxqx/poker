import { hasFlush } from '../../../../src/modules/hand-strength/flush';
import {
  flush1,
  flush2,
  nonFlush1
} from './has-flush.hands.js';

describe('flush', () => {
  it('should determine hand contains a flush', () => {
    expect(hasFlush(flush1)).toEqual({
      values: [14, 10, 5, 4, 2],
      suit: 'spades'
    });

    expect(hasFlush(flush2)).toEqual({
      values: [14, 13, 12, 9, 8],
      suit: 'diamonds'
    });
  });

  it('should determine hand does not contain a flush', () => {
    expect(hasFlush(nonFlush1)).toBe(false);
  });
});
