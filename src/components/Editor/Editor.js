import React from 'react'
import JSONTree from 'react-json-tree'
import { connect } from 'react-redux'
import { editorFileContentChange, editorFilePathChange } from '../../actions/editorActions'
import { getBlockstackFile, putBlockstackFile } from '../../actions/fileActions'

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
    }
  }
}

const Editor = ({editor, handleFileContentChange, handleFilePathChange, handleSaveButton, handleGetFileButton, user}) => {
  const JSONtheme = {
      scheme: 'monokai',
      author: 'wimer hazenberg (http://www.monokai.nl)',
      base00: '#272822',
      base01: '#383830',
      base02: '#49483e',
      base03: '#75715e',
      base04: '#a59f85',
      base05: '#f8f8f2',
      base06: '#f5f4f1',
      base07: '#f9f8f5',
      base08: '#f92672',
      base09: '#fd971f',
      base0A: '#f4bf75',
      base0B: '#a6e22e',
      base0C: '#a1efe4',
      base0D: '#66d9ef',
      base0E: '#ae81ff',
      base0F: '#cc6633'
  };
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
      <div>
      <br></br>
        <JSONTree
          data={user}
          theme={JSONtheme}
          invertTheme
          shouldExpandNode={() => false}
        />
        </div>
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
