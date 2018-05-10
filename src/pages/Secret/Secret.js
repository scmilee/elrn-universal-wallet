import React from 'react'
import { getBlockstackFile, putBlockstackFile } from '../../actions/fileActions'
import { connect } from 'react-redux'

import Editor from '../../components/Editor/Editor'
import LearnerPublicKeyForm from '../../components/LearnerPublicKeyForm'
import CryptoCurrencyKeyForm from '../../components/CryptoCurrencyKeyForm'
import Profile from '../../components/Profile.js'

const mapStateToProps = ({file, user}) => {
  return {
    file,
    user
  }
}

const mapDispatchToProps = (dispatch, nextProps) => {
  return {
    getFile: (path, decrypt) => {
      dispatch(getBlockstackFile(path, decrypt))
    },
    putFile: (path, content, encrypt) => {
      dispatch(putBlockstackFile(path, content, encrypt))
    }
  }
}

const Secret = ({user, file, getFile, putFile, ...rest}) => {
  return (
    <div>
      <h2>{JSON.stringify(user.profile.profile.name)}</h2>
      <Profile />
      <p> Step 1: Click "Generate Key Pair". This will generate a Private / Public Keypair </p>
      <LearnerPublicKeyForm />
      <CryptoCurrencyKeyForm />
      <hr />
      <Editor />
    </div>
  )
}

const SecretContainer = connect(mapStateToProps, mapDispatchToProps)(Secret)

export default SecretContainer
