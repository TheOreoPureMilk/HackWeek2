let Logining = 'Logining'
let Unlogining = 'Unlogining'

export const goLogin = () => {
  return {
    type:Logining
  }
}

export const endLogin = () => {
  return {
    type:Unlogining
  }
}


let Registering = 'Registering'
let Unregistering = 'Unregistering'

export const goRegister = () => {
  return {
    type:Registering
  }
}

export const endRegister = () => {
  return {
    type:Unregistering
  }
}