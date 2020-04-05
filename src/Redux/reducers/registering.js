const registerLoad = (state = 'unregister', action) => {
  switch (action.type) {
    case 'Registering':
      return 'registering'
    case 'Unregistering':
      return 'unregister'
    default:
      return state
  }
}

export default registerLoad