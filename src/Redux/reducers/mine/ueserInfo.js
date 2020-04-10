const userInfo = (state = {}, action) => {
  switch (action.type) {
    case 'setUserInfo':
      return action.date;
    default:
      return state;
  }
}

export default userInfo