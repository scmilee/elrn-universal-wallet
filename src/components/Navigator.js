import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import AuthenticatedNavigator from './AuthenticatedNavigator'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const Navigator = ({user, ...rest}) => {
  return (
    <div>
      {
        (user.isAuthenticated)
        ? <AuthenticatedNavigator />
        : <Login />
      }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator)
