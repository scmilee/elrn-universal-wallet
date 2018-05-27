import React from 'react'
import { connect } from 'react-redux'

import AuthenticatedNavigator from './AuthenticatedNavigator'
import Login from './Login'

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

const Navigator = ({user, ...rest}) => {
  return (
    <div>
      {
        (user.isAuthenticated)
        ? <AuthenticatedNavigator user={user} {...rest} />
        : <Login />
      }
    </div>
  )
}

export default connect(mapStateToProps)(Navigator)
