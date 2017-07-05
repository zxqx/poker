import {
  createTable,
  addPlayer,
  modifyPlayerStackSize,
  removePlayer,
  sitOutPlayer,
  sitInPlayer
} from '../../src/actions/table';

describe('Table actions', () => {
  it('should create create table action', () => {
    const payload = {
      smallBlind: 0.25,
      bigBlind: 0.5,
      maxPlayers: 6,
      maxBuyIn: 50
    };

    expect(createTable(payload)).toEqual({
      type: createTable.toString(),
      payload
    });
  });

  it('should create add player action', () => {
    const payload = {
      name: 'sublime8316',
      stackSize: 34,
      seat: 2
    };

    expect(addPlayer(payload)).toEqual({
      type: addPlayer.toString(),
      payload
    });
  });

  it('should create add to player stack size action', () => {
    const payload = {
      name: 'sublime8316',
      amount: 16
    };

    expect(modifyPlayerStackSize(payload)).toEqual({
      type: modifyPlayerStackSize.toString(),
      payload
    });
  });

  it('should create remove player action', () => {
    const payload = 'sublime8316';

    expect(removePlayer(payload)).toEqual({
      type: removePlayer.toString(),
      payload
    });
  });

  it('should create sit out player action', () => {
    const payload = 'sublime8316';

    expect(sitOutPlayer(payload)).toEqual({
      type: sitOutPlayer.toString(),
      payload
    });
  });

  it('should create sit in player action', () => {
    const payload = 'sublime8316';

    expect(sitInPlayer(payload)).toEqual({
      type: sitInPlayer.toString(),
      payload
    });
  });
});
