import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

// Public routes are only accessible when not signed in with Blockstack
export const Public = ({user, component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => {
        return !user.isAuthenticated ?
        React.createElement(component, {...props}) :
        <Redirect to='/' />
      }}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Public)
