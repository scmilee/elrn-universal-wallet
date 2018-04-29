export const EDITOR_FILE_CONTENT_CHANGE = 'EDITOR_FILE_CONTENT_CHANGE'
export const EDITOR_FILE_PATH_CHANGE = 'EDITOR_FILE_PATH_CHANGE'

export const editorFileContentChange = (value) => {
  return { type: EDITOR_FILE_CONTENT_CHANGE, payload: { content: value } }
}

export const editorFilePathChange = (value) => {
  return { type: EDITOR_FILE_PATH_CHANGE, payload: { path: value } }
}
