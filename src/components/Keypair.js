import React from 'react'
import { connect } from 'react-redux'
import { generateKeypair } from '../actions/keypairActions'

const mapStateToProps = () => ({}))

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

export default connect(mapStateToProps,mapDispatchToProps)(Keypair);
