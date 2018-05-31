import Elrn from 'lib-client-elrn-wallet'

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
            .then((seed) => {
                // dispatch({
                //     type: GENERATE_WALLET_SEED_SUCCESS,
                //     payload: {
                //         seed: seed
                //     }
                // })
                dispatch(seedToMnemonic(seed))
            })
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

export const generateWalletAddress = (asset) => {
    return (dispatch) => {
        dispatch({ type: GENERATE_WALLET_ADDRESS_REQUEST })
        try {
            const config = {};
            const elrnClient = new Elrn(config)
            elrnClient.createSeed()
            .then((seed) => elrnClient.seedToAddress(seed, "m/44'/0'/0'/0/0", asset))
            .then((address) => {
                dispatch({
                    type: GENERATE_WALLET_ADDRESS_SUCCESS,
                    payload: {
                        name: asset,
                        number: address
                    }
                })
            })
        } catch(error) {
            dispatch({
              type: GENERATE_WALLET_ADDRESS_ERROR,
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
            })
        } catch(error) {
            dispatch({
                type: SEED_TO_MNEMONIC_ERROR,
                payload: error
            })
        }
    }
}
