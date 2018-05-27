import React from 'react'

import { connect } from 'react-redux'

import Editor from '../../components/Editor/Editor'
import Profile from '../../components/Profile'
import LearnerPublicKeyForm from '../../components/LearnerPublicKeyForm'

const mapStateToProps = ({file, user}) => {
  return {
    file,
    user
  }
}

const Secret = ({user, file, ...rest}) => {
  return (
    <div>
      secret.js
      <Profile />
      <Editor />
    </div>
  )
}

export default connect(mapStateToProps)(Secret)
