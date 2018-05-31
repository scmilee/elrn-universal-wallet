import React from 'react'
import { connect } from 'react-redux'
import { generateWalletSeed } from '../actions/walletActions'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleGenerateWalletSeedButton: () => {
      dispatch(generateWalletSeed())
    }
  }
}

const GenerateWalletSeedButton = ({ handleGenerateWalletSeedButton, ...rest }) => {
  return (
    <button onClick={() => handleGenerateWalletSeedButton()}>Generate Wallet Seed</button>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateWalletSeedButton)
