const tokenStorage = (state = '', action) => {
  switch (action.type) {
    case 'setToken':
      return action.token;
    default:
      return state
  }
}

export default tokenStorage