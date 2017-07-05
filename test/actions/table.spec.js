import { spy } from 'sinon';
import {
  createTable,
  modifyTable,
  addPlayer,
  modifyPlayerStackSize,
  removePlayer,
  sitOutPlayer,
  sitInPlayer,
  addPlayerChips,
  modifyPlayerSessionTotal
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

  it('should create modify table action', () => {
    const payload = {
      maxBuyIn: 50
    };

    expect(modifyTable(payload)).toEqual({
      type: modifyTable.toString(),
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

  it('should create add player chips action', () => {
    const payload = {
      name: 'sublime8316',
      amount: 50
    };

    const fn = addPlayerChips(payload);

    expect(fn).toBeInstanceOf(Function);

    const dispatch = spy();
    fn(dispatch);

    expect(dispatch.calledWith({
      type: modifyPlayerStackSize.toString(),
      payload
    })).toEqual(true);

    expect(dispatch.calledWith({
      type: modifyPlayerSessionTotal.toString(),
      payload
    })).toEqual(true);
  });
});
