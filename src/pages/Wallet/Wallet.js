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
      <h2>{JSON.stringify(user.profile.profile.name)}</h2>
      <p>Wallet List view</p>
      <hr />
      <hr />
      <Profile />
    </div>
  )
}

const WalletContainer = connect(mapStateToProps, mapDispatchToProps)(Wallet)

export default WalletContainer
