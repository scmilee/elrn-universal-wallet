import React from 'react'

import { connect } from 'react-redux'

import Editor from '../../components/Editor/Editor'

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
      <Editor />
    </div>
  )
}

export default connect(mapStateToProps)(Secret)
