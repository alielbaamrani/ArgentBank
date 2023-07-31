export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'
export const USER_LOGOUT_ERROR = 'USER_LOGOUT_ERROR'

const INITIAL_STATE = {
  errorMessage: '',
}

export const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_ERROR:
      return { errorMessage: action.payload}
    case USER_LOGOUT_ERROR:
      return { errorMessage: action.payload.body.message }
    default:
      return state
  }
}
