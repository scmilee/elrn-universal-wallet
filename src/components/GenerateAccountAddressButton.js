import React from 'react'
import { connect } from 'react-redux'
import styles from '../styles.js'
import {generateAccountAddress} from '../actions/walletActions.js'

const mapStateToProps = ({wallet}) => {
  return {
      mnemonic: wallet.mnemonic,
      accountCount: wallet.accountCount
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return{
		handleGenerateAccountAddress: (mnemonic, accountCount) => {
			dispatch(generateAccountAddress(mnemonic, accountCount))
		}
	}
}

export const GenerateAccountAddressButton = ({ mnemonic, accountCount , handleGenerateAccountAddress,...rest}) => {
  return (
    <div>
    <button style={styles.buttonStyle} onClick={() => handleGenerateAccountAddress(mnemonic, accountCount)}>Generate Child Account</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateAccountAddressButton);