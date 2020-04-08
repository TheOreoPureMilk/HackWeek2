const libTabSwitch = (libStateCode = '幸运信', action) => {
  switch (action.type) {
    case 'set-lib-switch-state':
      return action.stateCode
    default:
      return libStateCode
  }
}

export default libTabSwitch