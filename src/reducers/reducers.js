const initalState = {
  isLogin: false,
  isLoggout: true,
}

export const isLoginReducer = (state, action) => {
  if (state === undefined) {
    return false
  }
  if (action.type === 'USER_LOGIN') {
    return state
  }
}

export const isLoggoutReducer = (state, action) => {
  if (state === undefined) {
    return false
  }
  if (action.type === 'USER_LOGGOUT') {
    return state
  }
}

export const reducer = (state, action) => {
  return {
    isLogin: isLoginReducer(state.isLogin, action),
    isLoggout: isLoggoutReducer(state.isLoggout, action),
  }
}
