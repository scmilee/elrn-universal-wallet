import React from 'react'
import { connect } from 'react-redux'
import { generateWalletSeed } from '../actions/walletActions'
import styles from '../styles.js'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleGenerateWalletSeedButton: () => {
      dispatch(generateWalletSeed())
    }
  }
}

 export const GenerateWalletSeedButton = ({ handleGenerateWalletSeedButton, ...rest }) => {
  return (
    <button style={styles.buttonStyle} onClick={() => handleGenerateWalletSeedButton()}>new passphrase</button>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateWalletSeedButton)
