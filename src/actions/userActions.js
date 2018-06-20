import Elrn from '../elrn-config/elrn.js'

export const FETCH_USER_DATA = 'FETCH_USER_DATA'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_HANDLE_LOGIN = 'USER_HANDLE_LOGIN'
export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'

export const fetchUserData = () => {
  const type = FETCH_USER_DATA
  const elrn = Elrn.instance;
  if (elrn.isUserSignedIn()) {
    console.log(elrn.loadUserData());
    return {
      type,
      payload: {
        isAuthenticated: true,
        profile: elrn.loadUserData()
      }
    }
  } else if (elrn.isSignInPending()) {
    return {
      type,
      payload: {
        isLoginPending: true
      }
    }
  }
  return { type }
}

export const loginWithBlockstack = () => {
  // Open the blockstack browser for sign in
  // After choosing an Id to sign in with, redirect back to the login page
  const elrn = Elrn.instance;
  elrn.redirectToSignIn(
    `${window.location.origin}/handle-login`,
    `${window.location.origin}/manifest.json`,
     ['store_write', 'publish_data'])
  return { type: USER_LOGIN }
}

export const userLogout = () => {
  const elrn = Elrn.instance;
  elrn.signUserOut()
  window.location.replace(`${window.location.origin}/`)
  return { type: USER_LOGOUT }
}

export const userLoginError = (error) => {
  return { type: USER_LOGIN_ERROR, payload: error }
}

export const handleBlockstackLogin = () => {
  return (dispatch) => {
    dispatch({ type: USER_HANDLE_LOGIN })

    // Handle sign in from Blockstack after redirect from Blockstack browser
    // Once sign in completes (promise is fulfilled), redirect to an authenticated only route
    const elrn = Elrn.instance;

    return elrn.handlePendingSignIn()
      .then(
        res => {
          window.location.replace(`${window.location.origin}/`)
          dispatch({ type: USER_LOGIN_SUCCESS })
          dispatch(fetchUserData())
        },

        error => dispatch(userLoginError(error))
      )
  }
}
