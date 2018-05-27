import React from 'react'

import { connect } from 'react-redux'

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

const Secret = ({user, ...rest}) => {
  return (
      <div>
        {
          (user.isAuthenticated)
          ? `logged in`
          : ''
        }
      </div>
  )
}

export default connect(mapStateToProps)(Secret)
