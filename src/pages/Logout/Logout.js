import React from 'react'
import { userLogout } from '../../actions/userActions'
import { connect } from 'react-redux'
import Home from '../Home/Home'

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

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
