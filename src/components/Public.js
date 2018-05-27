import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import * as blockstack from 'blockstack'

// Public routes are only accessible when not signed in with Blockstack
export default ({component, ...rest}) => {
  // This will be stored in redux eventually
  const isAuthenticated = blockstack.isUserSignedIn()

  return (
    <Route
      {...rest}
      render={props => {
        return !isAuthenticated ? React.createElement(component, {...props})
          : <Redirect to='/' />
      }}
    />
  )
}
