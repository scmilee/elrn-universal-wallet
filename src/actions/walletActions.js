import Elrn from 'lib-client-elrn-wallet'

export const SEED_TO_MNEMONIC_ERROR = 'SEED_TO_MNEMONIC_ERROR'
export const SEED_TO_MNEMONIC_REQUEST = 'SEED_TO_MNEMONIC_REQUEST'
export const SEED_TO_MNEMONIC_SUCCESS = 'SEED_TO_MNEMONIC_SUCCESS'

export const seedToMnemonic = (seed) => {
  return (dispatch) => {
    dispatch({ type: SEED_TO_MNEMONIC_REQUEST })
    try {
      const config = {};
      const elrnClient = new Elrn(config)
      elrnClient.seedToMnemonic(seed)
      .then((mnemonic) => {
        dispatch({
            type: SEED_TO_MNEMONIC_SUCCESS,
            payload: {
                mnemonic: mnemonic
            }
        })
      })

    } catch(error) {
        dispatch({
          type: SEED_TO_MNEMONIC_ERROR,
          payload: error
         })
    }
  }
}

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
                seed: walletSeed
            }
        })
        dispatch(seedToMnemonic(walletSeed))
      })

    } catch(error) {
        dispatch({
            type: GENERATE_WALLET_SEED_ERROR,
            payload: error
         })
    }
  }
}
