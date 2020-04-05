const Changeloadmes = (state = '加载中...', action) => {
  switch (action.type) {
    case 'login':
      return '登录中...'
    case 'register':
      return '注册中...'
    default:
      return state
  }
}

export default Changeloadmes