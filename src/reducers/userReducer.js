import {
  FETCH_USER_DATA,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_HANDLE_LOGIN,
  USER_LOGGED_IN,
  USER_LOGIN_ERROR,
  USER_MASTER_TOGGLE
} from '../actions/userActions'

const initialState = {
  isAuthenticated: false,
  isMaster: false,
  isLoginPending: false,
  profile: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return { ...state, ...action.payload }
    case USER_LOGIN:
      return { ...state, isLoginPending: true }
    case USER_LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true }
    case USER_LOGOUT:
      return { ...initialState }
    case USER_HANDLE_LOGIN:
      return { ...state, isLoginPending: false }
    case USER_LOGGED_IN:
      return {
        ...state,
        isAuthenticated: true,
        isLoginPending: false,
        profile: action.payload
      }
    case USER_LOGIN_ERROR:
      return { ...state, error: action.payload }
    case USER_MASTER_TOGGLE:
      return{...state, isMaster: !state.isMaster }

    default:
      return state
  }
}
