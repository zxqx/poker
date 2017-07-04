import { hasStraight } from '../../../../src/modules/hand-strength/straight';
import {
  straight1,
  straight2,
  straight3,
  straight4,
  straight5,
  straight6
} from './has-straight.hands.js';

describe('straight', () => {
  it('should determine hand contains straight', () => {
    expect(hasStraight(straight1)).toEqual({
      values: [11]
    });

    expect(hasStraight(straight2)).toEqual({
      values: [13]
    });

    expect(hasStraight(straight3)).toEqual({
      values: [14]
    });
  });

  it('should determine hand contains wheel', () => {
    expect(hasStraight(straight4)).toEqual({
      values: [5]
    });

    expect(hasStraight(straight5)).toEqual({
      values: [5]
    });

    expect(hasStraight(straight6)).toEqual({
      values: [5]
    });
  });
});
