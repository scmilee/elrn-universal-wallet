import Elrn from 'lib-client-elrn-wallet'
const coinInfo = require('coininfo')

export const GENERATE_WALLET_ERROR = 'GENERATE_WALLET_ERROR'
export const GENERATE_WALLET_REQUEST = 'GENERATE_WALLET_REQUEST'
export const GENERATE_WALLET_SUCCESS = 'GENERATE_WALLET_SUCCESS'

export const generateWallet = () => {
  return (dispatch) => {
    dispatch({ type: GENERATE_WALLET_REQUEST })
    try {      
      const config = {};
      const elrnClient = new Elrn(config)
      const coin = 'blackcoin';
      var cinfo = coinInfo(coin).versions;
      let wallet = {};
      elrnClient.createKeypair(cinfo)
      .then((wallet) => {
        dispatch({
            type: GENERATE_WALLET_SUCCESS,
            payload: {
                wallet: wallet,
            }
        })
      })

    } catch(error) {
        dispatch({
          type: GENERATE_WALLET_ERROR,
          payload: error
         })
    }
  }
}
