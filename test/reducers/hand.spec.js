import hand from '../../src/reducers/hand';
import {
  createHand
} from '../../src/actions/hand';

describe('Hand reducers', () => {
  it('should handle initial state', () => {
    expect(hand(undefined, {})).toEqual({
      actions: [],
      availableActions: []
    });
  });

  it('should handle create hand', () => {
    expect(hand({
      actions: [
        {
          type: 'BET',
          amount: 1.5
        }
      ],
      availableActions: [
        'fold', 'call', 'raise'
      ]
    },
    { type: createHand })).toEqual({
      actions: [],
      availableActions: []
    });
  });
});
