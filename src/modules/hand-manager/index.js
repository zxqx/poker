export function startPreflopAction(state) {
  return dispatchTableAction(state, {
    type: 'START_PREFLOP_ACTION'
  });
}

export function determineAvailableActions(lastAction) {
  if (lastAction.type === 'START_PREFLOP_ACTION') {
    return ['fold', 'call', 'raise'];
  }
}

export function dispatchHandAction(state, action) {
  return {
    players: state.players,
    actions: [
      ...state.actions,
      action
    ],
    availableActions: determineAvailableActions(action)
  }
}
