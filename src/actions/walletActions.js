import Elrn from 'lib-client-elrn-wallet'

export const GENERATE_WALLET_SEED_ERROR = 'GENERATE_WALLET_SEED_ERROR'
export const GENERATE_WALLET_SEED_REQUEST = 'GENERATE_WALLET_SEED_REQUEST'
export const GENERATE_WALLET_SEED_SUCCESS = 'GENERATE_WALLET_SEED_SUCCESS'

export const generateWalletSeed = () => {
  return (dispatch) => {
    dispatch({ type: GENERATE_WALLET_SEED_REQUEST })
    try {      
      const config = {};
      const elrnClient = new Elrn(config)
      elrnClient.createSeed()
      .then((walletSeed) => {
        dispatch({
            type: GENERATE_WALLET_SEED_SUCCESS,
            payload: {
                wallet: walletSeed
            }
        })
      })

    } catch(error) {
        dispatch({
          type: GENERATE_WALLET_SEED_ERROR,
          payload: error
         })
    }
  }
}
