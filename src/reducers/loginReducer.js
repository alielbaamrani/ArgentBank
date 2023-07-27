export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGOUT = 'USER_LOGOUT'

const INITIAL_STATE = {
  isLogged: false,
  token: '',
}

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { isLogged: true, token: action.payload.body.token }
    case USER_LOGOUT:
      return { isLogged: false, token: null }
    default:
      return state
  }
}
