const tokenStorage = (state = '', action) => {
  switch (action.type) {
    case 'setToken':
      return action.token;
    default:
      window.localStorage.setItem('tokens', state)
      return state
  }
}

export default tokenStorage