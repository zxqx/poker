import { isFlush } from '../../../../src/modules/hand-strength/flush';
import {
  flush1,
  flush2,
  nonFlush1,
  nonFlush2,
  nonFlush3,
  nonFlush4
} from './flush.hands.js';

describe('flush', () => {
  it('should determine hand contains a flush', () => {
    expect(isFlush(flush1)).toEqual({
      values: [14, 10, 5, 4, 2],
      suit: 'spades'
    });

    expect(isFlush(flush2)).toEqual({
      values: [11, 9, 8, 7, 6],
      suit: 'clubs'
    });
  });

  it('should determine hand does not contain a flush', () => {
    expect(isFlush(nonFlush1)).toBe(false);
    expect(isFlush(nonFlush2)).toBe(false);
    expect(isFlush(nonFlush3)).toBe(false);
    expect(isFlush(nonFlush4)).toBe(false);
  });
});
