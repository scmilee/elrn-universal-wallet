import Elrn from 'lib-client-elrn-wallet'

import * as blockstack from 'blockstack'

export const FETCH_MNEMONIC_REQUEST = 'FETCH_MNEMONIC_REQUEST'
export const FETCH_MNEMONIC_SUCCESS = 'FETCH_MNEMONIC_SUCCESS'
export const FETCH_MNEMONIC_ERROR = 'FETCH_MNEMONIC_ERROR'
export const PUT_MNEMONIC_REQUEST = 'PUT_MNEMONIC_REQUEST'
export const PUT_MNEMONIC_SUCCESS = 'PUT_MNEMONIC_SUCCESS'
export const PUT_MNEMONIC_ERROR = 'PUT_MNEMONIC_ERROR'

export const fetchBlockstackMnemonic = () => {
  return (dispatch) => {
  dispatch({ type: FETCH_MNEMONIC_REQUEST })
  if (blockstack.isUserSignedIn()) {
    return blockstack.getFile('elrnWalletMnemonic', true)
      .then(
        mnemonic => {
          if (mnemonic !== null) {
            dispatch({
              type: FETCH_MNEMONIC_SUCCESS,
              payload: {
                mnemonic: mnemonic
              }
            })
            dispatch(loadMnemonic(mnemonic))
          } else {
            dispatch(generateWalletSeed())
          }
        },
        error => dispatch({ type: FETCH_MNEMONIC_ERROR, payload: error })
      )
    }
  }
}

export const RETURN_ADDRESS_LOAD = 'RETURN_ADDRESS_LOAD';
export const loadReturnAddress = (val) => ({ type: RETURN_ADDRESS_LOAD, payload: val });

export const MNEMONIC_LOAD = 'MNEMONIC_LOAD';
export const loadMnemonic = (val) => ({ type: MNEMONIC_LOAD, payload: val });

export const SHIFT_AMOUNT_LOAD = 'SHIFT_AMOUNT_LOAD';
export const loadShiftAmount = (val) => ({ type: SHIFT_AMOUNT_LOAD, payload: val });

export const putBlockstackMnemonic = (mnemonic) => {
  return (dispatch) => {
    dispatch({
      type: PUT_MNEMONIC_REQUEST,
      payload: {mnemnonic: mnemonic}
    })
    return blockstack.putFile('elrnWalletMnemonic', mnemonic, true)
      .then(() => {
        dispatch({
          type: PUT_MNEMONIC_SUCCESS,
          payload: {
            mnemonic: mnemonic
          }
        })

      }
    )
  }
}

export const MNEMONIC_TO_SEED_ERROR = 'MNEMONIC_TO_SEED_ERROR'
export const MNEMONIC_TO_SEED_REQUEST = 'MNEMONIC_TO_SEED_REQUEST'
export const MNEMONIC_TO_SEED_SUCCESS = 'MNEMONIC_TO_SEED_SUCCESS'

export const mnemonicToSeed = (mnemonic) => {
    return (dispatch) => {
        dispatch({
            type: MNEMONIC_TO_SEED_REQUEST,
            payload: {
              wallet: {
                mnemonic: mnemonic
              }
            }
        })
        try {
            const config = {};
            const elrnClient = new Elrn(config)
            elrnClient.mnemonicToSeed(mnemonic)
            .then((seed) => {
                dispatch({
                    type: MNEMONIC_TO_SEED_SUCCESS,
                    payload: {
                       mnemonic: mnemonic,
                       seed: seed
                    }
                })
            })

        } catch(error) {
            dispatch({
                type: MNEMONIC_TO_SEED_ERROR,
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
        dispatch({
            type: GENERATE_WALLET_SEED_REQUEST,
            payload: {}
        })
        try {
            const config = {};
            const elrnClient = new Elrn(config)
            elrnClient.createSeed()
            .then((seed) => dispatch(seedToMnemonic(seed)))
        } catch(error) {
            dispatch({
                type: GENERATE_WALLET_SEED_ERROR,
                payload: error
            })
        }
    }
}

export const GENERATE_WALLET_ADDRESS_ERROR = 'GENERATE_WALLET_ADDRESS_ERROR'
export const GENERATE_WALLET_ADDRESS_REQUEST = 'GENERATE_WALLET_ADDRESS_REQUEST'
export const GENERATE_WALLET_ADDRESS_SUCCESS = 'GENERATE_WALLET_ADDRESS_SUCCESS'

export const generateWalletAddress = (mnemonic, coin) => {
    return (dispatch) => {
        dispatch({
          type: GENERATE_WALLET_ADDRESS_REQUEST,
          payload: {
            mnemonic: mnemonic,
            derivePath: coin.derivePath,
            coin: coin
          }
        })
        try {
            const config = {};
            const elrnClient = new Elrn(config)
            elrnClient.mnemonicToSeed(mnemonic)
            .then((seed) => {
                return elrnClient.seedToAddress(seed, coin.derivePath,  coin.extension)
            })
            .then((address) => {
                dispatch({
                    type: GENERATE_WALLET_ADDRESS_SUCCESS,
                    payload: {
                      coin: coin.id,
                      derivePath: coin.derivePath,
                      address: address
                    }
                })
            })
        }
        catch(error) {
            dispatch({
              type: GENERATE_WALLET_ADDRESS_ERROR,
              payload: error
            })
        }
    }
}

export const GENERATE_SHAPESHIFT_RETURN_ADDRESS_ERROR = 'GENERATE_SHAPESHIFT_RETURN_ADDRESS_ERROR'
export const GENERATE_SHAPESHIFT_RETURN_ADDRESS_REQUEST = 'GENERATE_SHAPESHIFT_RETURN_ADDRESS_REQUEST'
export const GENERATE_SHAPESHIFT_RETURN_ADDRESS_SUCCESS = 'GENERATE_SHAPESHIFT_RETURN_ADDRESS_SUCCESS'

export const generateShapeShiftReturnAddress = (mnemonic, coin) => {
    return (dispatch) => {
        dispatch({
          type: GENERATE_SHAPESHIFT_RETURN_ADDRESS_REQUEST,
          payload: {
            mnemonic: mnemonic,
            coin: coin
          }
        })
        try {
            const config = {};
            const elrnClient = new Elrn(config)
            elrnClient.mnemonicToSeed(mnemonic)
            .then((seed) => {
                return elrnClient.seedToAddress(seed, coin.derivePath, coin.extension)
            })
            .then((address) => {
                dispatch({
                    type: GENERATE_SHAPESHIFT_RETURN_ADDRESS_SUCCESS,
                    payload: {
                      coin: coin.id,
                      derivePath: coin.derivePath,
                      address: address
                    }
                })
            })
        }
        catch(error) {
            dispatch({
              type: GENERATE_SHAPESHIFT_RETURN_ADDRESS_ERROR,
              payload: error
            })
        }
    }
}

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
                dispatch(mnemonicToSeed(mnemonic))
                dispatch(putBlockstackMnemonic(mnemonic))
            })
        } catch(error) {
            dispatch({
                type: SEED_TO_MNEMONIC_ERROR,
                payload: error
            })
        }
    }
}
