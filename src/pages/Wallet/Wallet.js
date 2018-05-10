import React from 'react'
import { connect } from 'react-redux'
import Profile from '../../components/Profile.js'

const mapStateToProps = ({file, user}) => {
  return {
    file,
    user
  }
}

const mapDispatchToProps = (dispatch, nextProps) => {
  return {

  }
}

const Wallet = ({user, file, getFile, putFile, ...rest}) => {
  return (
    <div>
      <h2>logged in as:&nbsp;{JSON.stringify(user.profile.profile.name)}</h2>
    </div>
  )
}

const WalletContainer = connect(mapStateToProps, mapDispatchToProps)(Wallet)

export default WalletContainer
