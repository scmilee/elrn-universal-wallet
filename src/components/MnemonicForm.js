import React from 'react'
import { connect } from 'react-redux'
import { mnemonicToSeed } from '../actions/walletActions'

const mapStateToProps = ({wallet}) => {
  return {
    mnemonic: wallet.mnemonic
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputChange: (evt) => {
        const val = evt.target.value;
        dispatch(mnemonicToSeed(val));
    }
  }
}

const MnemonicForm= ({ mnemonic, handleSubmit, handleInputChange, handleMnemonicSubmitButton, ...rest }) => {
  return (
    <div>
      <textarea
          id="mnemonic"
          rows="1"
          cols="100"
          onChange={handleInputChange}
          placeholder={mnemonic}
          >
      </textarea>
      <br>
      </br>
      {mnemonic}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MnemonicForm)
