import { determineHandRanking } from '../../../../src/modules/hand-strength/evaluator.js';
import { straightFlushes } from './evaluator.hands.js';

describe('evaluator', () => {
  it('should determine hands are straight flushes', () => {
    straightFlushes.forEach(hand => {
      expect(determineHandRanking(hand).id).toBe('straight-flush');
    });
  });
});
