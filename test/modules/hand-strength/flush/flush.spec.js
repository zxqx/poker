import { isFlush } from '../../../../src/modules/hand-strength/flush';
import { flush , nonFlush  } from './flush.hands.js';

describe('flush', () => {
  it('should determine hand contains a flush', () => {
    flush.forEach(hand => {
      expect(isFlush(hand)).toBe(true);
    });
  });

  it('should determine hand does not contain a flush ', () => {
    nonFlush.forEach(hand => {
      expect(isFlush(hand)).toBe(false);
    });
  });
});

