import React from 'react'
import { connect } from 'react-redux'
import SwipeWallet from './SwipeWallet'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

export const Secret = ({user, ...rest}) => {
  return (
      <div>
        {
          (user.isAuthenticated)
          ? <SwipeWallet></SwipeWallet>
          : <div>not authenticated</div>
        }
      </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Secret)
