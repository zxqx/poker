import { spy } from 'sinon';
import { createTable, addPlayer } from '../../src/actions/table';

describe('Table actions', () => {
  it('should create create table action', () => {
    expect(createTable()).toEqual({ type: createTable.toString() });
  });

  it('should create add player action', () => {
    expect(addPlayer()).toEqual({ type: addPlayer.toString() });
  });
});
