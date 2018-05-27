import React from 'react'
import { connect } from 'react-redux'
import { generateWalletSeed } from '../actions/walletActions'

const mapStateToProps = ({wallet}) => {
  return {
    seed : wallet.seed
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleGenerateWalletSeedButton: () => {
      dispatch(generateWalletSeed())
    }
  }
}

const WalletSeed = ({ seed, handleGenerateWalletSeedButton, ...rest }) => {
  return (
    <div>
    <button onClick={() => handleGenerateWalletSeedButton()}>Generate Wallet Seed</button>
    <h2>hex seed:&nbsp;{(seed !== {}) ? seed.toString('hex') : ''}</h2>
    </div>
  )
}

const WalletSeedContainer = connect(mapStateToProps, mapDispatchToProps)(WalletSeed)

export default WalletSeedContainer
