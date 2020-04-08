const mineTabSwitch = (state = '幸运信', action) => {
  switch (action.type) {
    case 'set-mine-switch-state':
      return action.stateCode
    default:
      return state
  }
}

export default mineTabSwitch

