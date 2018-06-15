import React from 'react'
import { connect } from 'react-redux'
import { putBlockstackMnemonic } from '../actions/walletActions'

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
    <button onClick={() => handleSaveMnemonicButton( mnemonic )}>save mnemonic</button>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveMnemonicButton)
