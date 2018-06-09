import React from 'react'
import { connect } from 'react-redux'
import Mnemonic from './Mnemonic'
import MnemonicForm from './MnemonicForm'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const SecretPhrase = ({...rest}) => {
  return (
    <div>
    SecretPhrase.js
    <br></br>
    <br></br>
    <Mnemonic></Mnemonic>
    <br></br>
    <br></br>
    override:
    <br></br>
    <MnemonicForm></MnemonicForm>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SecretPhrase)
