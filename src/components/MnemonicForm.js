import React from 'react'
import { connect } from 'react-redux'
import { loadMnemonic } from '../actions/walletActions'
import SaveMnemonicButton from './SaveMnemonicButton'
import styles from '../styles.js'

const mapStateToProps = ({wallet}) => {
  return {
    mnemonic: wallet.mnemonic
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputChange: (evt) => {
        const mnemonic = evt.target.value;
        dispatch(loadMnemonic(mnemonic));
    }
  }
}

export const MnemonicForm = ({ mnemonic, handleInputChange, ...rest }) => {
  return (
    <div>
      <textarea
          id="mnemonic"
          rows="7"
          columns="200"
          onChange={handleInputChange}
          placeholder={mnemonic}
          style={styles.textAreaStyle}
          >
      </textarea>
      <br></br>
      <SaveMnemonicButton></SaveMnemonicButton>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MnemonicForm)
