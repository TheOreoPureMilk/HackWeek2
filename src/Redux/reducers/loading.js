const loginLoad = (state ='unlogining', action) => {
  switch (action.type) {
    case 'Logining':
      return 'logining'
    case 'Unlogining':
      return 'unlogining'
    default:
      return state
  }
}

export default loginLoad