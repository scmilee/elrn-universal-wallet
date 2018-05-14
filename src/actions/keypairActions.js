var NodeRSA = require('node-rsa');

export const GENERATE_KEYPAIR_ERROR = 'GENERATE_KEYPAIR_ERROR'
export const GENERATE_KEYPAIR_REQUEST = 'GENERATE_KEYPAIR_REQUEST'
export const GENERATE_KEYPAIR_SUCCESS = 'GENERATE_KEYPAIR_SUCCESS'

export const generateKeypair = () => {
  return (dispatch) => {
    dispatch({ type: GENERATE_KEYPAIR_REQUEST })
    try {
      var key = new NodeRSA({b: 512});
      // var text = 'Hello RSA!';
      // var encrypted = key.encrypt(text, 'base64');
      // var decrypted = key.decrypt(encrypted, 'utf8');
      // https://github.com/rzcoder/node-rsa
      let publicKey = key.exportKey('pkcs8-public');
      let privateKey = key.exportKey('pkcs1');

      dispatch({
          type: GENERATE_KEYPAIR_SUCCESS,
          payload: {
              publicKey: publicKey,
              privateKey: privateKey,
          }
      })
    } catch(error) {
        dispatch({
            type: GENERATE_KEYPAIR_ERROR,
            payload: error
        })
    }
  }
}
