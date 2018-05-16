import React from 'react'
import { connect } from 'react-redux'
import { generateWalletSeed } from '../actions/walletActions'

const mapStateToProps = ({wallet}) => {
  return {
    wallet
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleGenerateWalletSeedButton: () => {
      dispatch(generateWalletSeed())
    }
  }
}

const WalletSeed = ({ wallet, handleGenerateWalletSeedButton }) => {
  return (
    <div>
    <button onClick={() => handleGenerateWalletSeedButton()}>Generate Wallet Seed</button>
    <h2>wallet seed:&nbsp;{JSON.stringify(wallet  || {})}</h2>
    </div>
  )
}

const WalletSeedContainer = connect(mapStateToProps, mapDispatchToProps)(WalletSeed)

export default WalletSeedContainer
