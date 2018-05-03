import React from 'react'
import { connect } from 'react-redux'

import AuthenticatedNavigator from './AuthenticatedNavigator'
import PublicNavigator from './PublicNavigator'

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
        : <PublicNavigator {...rest} />
      }
    </div>
  )
}

const NavigatorContainer = connect(mapStateToProps)(Navigator)

export default NavigatorContainer
