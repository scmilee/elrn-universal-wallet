import React from 'react'
import { connect } from 'react-redux'
import { mnemonicToSeed } from '../actions/walletActions'

const mapStateToProps = ({wallet}) => {
  return {
    mnemonic: wallet.mnemonic.toString()
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (evt) => {
      alert(JSON.stringify(evt))
      const val = 'you are a tiger';
      dispatch(mnemonicToSeed(val))
    },
    handleInputChange: (evt) => {
      alert(JSON.stringify(evt))
        const val = evt.target.value;
        mnemonicToSeed(val);
    }
  }
}

const MnemonicForm= ({ mnemonic, handleSubmit, handleInputChange }) => {
  return (
    <div>
      <h2>mnemonic:&nbsp;{JSON.stringify(mnemonic  || {})}</h2>
      <form onSubmit={handleSubmit()} id="mnemonic_form" >
          <input
              type="text"
              onChange={handleInputChange}
              value={mnemonic}
          />
          <input id="mnemonic_form_input"
              type="submit"
              form="mnemonic_form"
          / >
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MnemonicForm)
