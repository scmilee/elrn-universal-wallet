import React from 'react'
import { getBlockstackFile, putBlockstackFile } from '../../actions/fileActions'
import { connect } from 'react-redux'

import Editor from '../../components/Editor/Editor'
import LearnerPublicKeyForm from '../../components/LearnerPublicKeyForm'
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
      <p>This route is only accessible while logged in!</p>
      <hr />
      <hr />
      <Editor />
      <LearnerPublicKeyForm />
      <Profile />
    </div>
  )
}

const SecretContainer = connect(mapStateToProps, mapDispatchToProps)(Secret)

export default SecretContainer
