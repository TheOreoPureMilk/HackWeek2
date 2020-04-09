const tokenStorage = (state = '', action) => {
  switch (action.type) {
    case 'setToken':
      window.localStorage.setItem('tokens', action.token)
      return action.token;
    default:
      window.localStorage.setItem('tokens', state)
      return state
  }
}

export default tokenStorage