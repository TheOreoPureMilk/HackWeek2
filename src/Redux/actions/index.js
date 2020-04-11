export const setMineSwitchState = stateCode => {
  return {
    type: "set-mine-switch-state",
    stateCode
  }
}

export const setLibSwitchState = stateCode => {
  return {
    type: "set-lib-switch-state",
    stateCode
  }
}

export const setToken = token => {
  return {
    type: 'setToken',
    token
  }
}

export const setUserInfo = (data) => {
  return {
    type: 'setUserInfo',
    data
  }
}