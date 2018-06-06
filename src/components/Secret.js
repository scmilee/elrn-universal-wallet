import React from 'react'
import { connect } from 'react-redux'
import SwipeWallet from './SwipeWallet'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const Secret = ({user, ...rest}) => {
  return (
      <div>
        secret.js
        <br></br>
        {
          (user.isAuthenticated)
          ? <SwipeWallet></SwipeWallet>
          : ''
        }
      </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Secret)
