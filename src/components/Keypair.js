import React from 'react'
import { connect } from 'react-redux'
import { generateKeypair } from '../actions/keypairActions'
//import { processLearnerPublicKey } from '../reducers/learnerReducer.js'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleGenerateKeypairButton: () => {
      dispatch(generateKeypair())
    }
  }
}

const Keypair = ({ handleGenerateKeypairButton }) => {
  return (
    <button onClick={() => handleGenerateKeypairButton()}>GenerateKeypair</button>
  )
}

const KeypairContainer = connect((state) => ({}), mapDispatchToProps)(Keypair)

export default KeypairContainer
