import React from 'react'
import { connect } from 'react-redux'
import { loadMnemonic } from '../actions/walletActions'
import SaveMnemonicButton from './SaveMnemonicButton'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputChange: (evt) => {
        const mnemonic = evt.target.value;
        dispatch(loadMnemonic(mnemonic));      
    }
  }
}

const MnemonicForm = ({ handleInputChange, ...rest }) => {
  return (
    <div>
      <textarea
          id="mnemonic"
          rows="7"
          columns="200"
          onChange={handleInputChange}
          >
      </textarea>
      <br></br>
      <SaveMnemonicButton></SaveMnemonicButton>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MnemonicForm)
