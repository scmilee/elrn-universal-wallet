import React from 'react'
import { userLogout } from '../actions/userActions'
import { connect } from 'react-redux'
import Home from './Home'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: () => {
      dispatch(userLogout())
    }
  }
}

const Logout = ({user, handleLogout, ...rest}) => {
  if (user.isAuthenticated) {
    handleLogout()
  }
  return (
      <Home></Home>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
