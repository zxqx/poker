import table from '../../src/reducers/table';
import {
  createTable,
  modifyTable,
  addPlayer,
  modifyPlayerStackSize,
  removePlayer,
  sitOutPlayer,
  sitInPlayer,
  modifyPlayerSessionTotal
} from '../../src/actions/table';

describe('Table reducers', () => {
  it('should handle initial state', () => {
    expect(table(undefined, {})).toEqual({ players: {} });
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
      players: {}
    });
  });

  it('should handle modify table', () => {
    const config = {
      maxBuyIn: 100
    };

    expect(table({
      smallBlind: 0.25,
      bigBlind: 0.5,
      maxPlayers: 6,
      maxBuyIn: 50,
      players: {}
    }, {
      type: modifyTable,
      payload: config
    })).toEqual({
      smallBlind: 0.25,
      bigBlind: 0.5,
      maxPlayers: 6,
      maxBuyIn: 100,
      players: {}
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
      players: {
        sublime8316: {
          name: 'sublime8316',
          stackSize: 34,
          seat: 2,
          sitting: true
        }
      }
    });
  });

  it('should handle add to player stack size', () => {
    const player = {
      name: 'sublime8316',
      amount: 16
    };

    expect(table({
      players: {
        sublime8316: {
          name: 'sublime8316',
          stackSize: 34,
          seat: 2,
          sitting: true
        }
      }
    }, {
      type: modifyPlayerStackSize,
      payload: player
    })).toEqual({
      players: {
        sublime8316: {
          name: 'sublime8316',
          stackSize: 50,
          seat: 2,
          sitting: true
        }
      }
    });
  });

  it('should handle remove player', () => {
    const player = 'sublime8316';

    expect(table({
      players: {
        sublime8316: {
          name: 'sublime8316',
          stackSize: 34,
          seat: 2,
          sitting: true
        }
      }
    }, {
      type: removePlayer,
      payload: player
    })).toEqual({
      players: {}
    });
  });

  it('should handle sit out player', () => {
    const player = 'sublime8316';

    expect(table({
      players: {
        sublime8316: {
          name: 'sublime8316',
          stackSize: 34,
          seat: 2,
          sitting: true
        }
      }
    }, {
      type: sitOutPlayer,
      payload: player
    })).toEqual({
      players: {
        sublime8316: {
          name: 'sublime8316',
          stackSize: 34,
          seat: 2,
          sitting: false
        }
      }
    });
  });

  it('should handle sit in player', () => {
    const player = 'sublime8316';

    expect(table({
      players: {
        sublime8316: {
          name: 'sublime8316',
          stackSize: 34,
          seat: 2,
          sitting: false
        }
      }
    }, {
      type: sitInPlayer,
      payload: player
    })).toEqual({
      players: {
        sublime8316: {
          name: 'sublime8316',
          stackSize: 34,
          seat: 2,
          sitting: true
        }
      }
    });
  });


  it('should handle modify player session total', () => {
    const player = {
      name: 'sublime8316',
      amount: 50
    };

    expect(table({
      players: {
        sublime8316: {
          name: 'sublime8316',
          sessionTotal: 0,
          seat: 2,
          sitting: true
        }
      }
    }, {
      type: modifyPlayerSessionTotal,
      payload: player
    })).toEqual({
      players: {
        sublime8316: {
          name: 'sublime8316',
          sessionTotal: 50,
          seat: 2,
          sitting: true
        }
      }
    });
  });
});
