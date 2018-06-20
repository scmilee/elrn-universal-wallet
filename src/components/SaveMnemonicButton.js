import React from 'react'
import { connect } from 'react-redux'
import { putBlockstackMnemonic } from '../actions/walletActions'
import styles from '../styles.js'

const mapStateToProps = ({wallet}) => {
  return {
    mnemonic: wallet.mnemonic
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSaveMnemonicButton: (mnemonic) => {
      dispatch(putBlockstackMnemonic(mnemonic))
    }
  }
}

const SaveMnemonicButton = ({ mnemonic, handleSaveMnemonicButton, ...rest }) => {
  return (
    <button style={styles.buttonStyle} onClick={() => handleSaveMnemonicButton( mnemonic )}>Save Passphrase</button>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveMnemonicButton)
