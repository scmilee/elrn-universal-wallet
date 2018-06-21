import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const Authenticated = ({user, component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => {
        return user.isAuthenticated ?
          React.createElement(component, {...props}) :
          <Redirect to='/logout' />
      }}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Authenticated)
