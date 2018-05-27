import React from 'react'
import { connect } from 'react-redux'
import { editorFileContentChange, editorFilePathChange } from '../actions/editorActions'
import { getBlockstackFile, putBlockstackFile } from '../actions/fileActions'

const mapStateToProps = ({editor, user}) => {
  return {
    editor: editor,
    user: user,
    path: editor.path
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleFileContentChange: (e) => {
      const { value } = e.target
      console.log(value)
      dispatch(editorFileContentChange(value))
    },
    handleFilePathChange: (e) => {
      const { value } = e.target
      dispatch(editorFilePathChange(value))
    },
    handleSaveButton: (path, content) => {
      dispatch(putBlockstackFile(path, content))
    },
    handleGetFileButton: (path) => {
      dispatch(getBlockstackFile(path))
    },
    getFile: (path, decrypt) => {
      dispatch(getBlockstackFile(path, decrypt))
    },
    putFile: (path, content, encrypt) => {
      dispatch(putBlockstackFile(path, content, encrypt))
    }
  }
}

const Editor = ({editor, handleFileContentChange, handleFilePathChange, handleSaveButton, handleGetFileButton, user, ...rest}) => {
  return (
    <section>
      <label className='label'>BlockStack File Retreiver</label>
      <br />
      <div className='field'>
        <label className='label'>File Path</label>
        <div className='control'>
          <input type='text' className='input' onChange={handleFilePathChange} value={editor.path} />
        </div>
      </div>
      <div className='field'>
        <label htmlFor='' className='label'>File Content</label>
        <div className='control'>
          <textarea className='textarea' onChange={handleFileContentChange} value={editor.content} />
        </div>
      </div>
      <div className='field is-grouped'>
        <div className='control'>
          {/* TODO Figure out way to get state in the dispatch instead of passing data in here */}
          <button className='button' onClick={() => handleSaveButton(editor.path, editor.content)}>Save</button>
        </div>
        <div className='control'>
          <button className='button' onClick={() => handleGetFileButton(editor.path)}>Get File</button>
        </div>
      </div>
      <p> You can save your own custom File/content by using the save button</p>
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
