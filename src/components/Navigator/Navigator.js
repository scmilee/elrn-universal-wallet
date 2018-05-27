import React from 'react'
import { connect } from 'react-redux'

import AuthenticatedNavigator from './AuthenticatedNavigator'
import Login from '../Login'

const mapStateToProps = ({user, router}) => {
  return {
    user,
    router
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

const NavigatorContainer = connect(mapStateToProps)(Navigator)

export default NavigatorContainer
