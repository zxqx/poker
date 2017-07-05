import table from '../../src/reducers/table';
import { createTable, addPlayer } from '../../src/actions/table';

describe('Table reducers', () => {
  it('should handle initial state', () => {
    expect(table(undefined, {})).toEqual({ players: [] });
  });

  it('should handle create table', () => {
    const config = {
      smallBlind: 0.25,
      bigBlind: 0.5,
      maxPlayers: 6,
      maxBuyIn: 50
    };

    expect(table(undefined, {
      type: createTable,
      payload: config
    })).toEqual({
      smallBlind: 0.25,
      bigBlind: 0.5,
      maxPlayers: 6,
      maxBuyIn: 50,
      players: []
    });
  });

  it('should handle add player', () => {
    const player = {
      name: 'sublime8316',
      stackSize: 34,
      seat: 2
    };

    expect(table(undefined, {
      type: addPlayer,
      payload: player
    })).toEqual({
      players: [{
        name: 'sublime8316',
        stackSize: 34,
        seat: 2
      }]
    });
  });
});
