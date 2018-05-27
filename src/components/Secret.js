import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const Secret = ({user, ...rest}) => {
  return (
      <div>
        secret.js
        <br></br>
        {
          (user.isAuthenticated)
          ? `logged in as: ${user.profile.profile.name || user.profile.username}`
          : ''
        }
      </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Secret)
