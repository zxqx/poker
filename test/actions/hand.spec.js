import {
  createHand
} from '../../src/actions/hand';

describe('Hand actions', () => {
  it('should create create hand action', () => {
    expect(createHand()).toEqual({
      type: createHand.toString()
    });
  });
});
