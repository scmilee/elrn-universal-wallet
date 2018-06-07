import {
  GENERATE_WALLET_SEED_ERROR,
  GENERATE_WALLET_SEED_REQUEST,
  GENERATE_WALLET_SEED_SUCCESS,
  SEED_TO_MNEMONIC_ERROR,
  SEED_TO_MNEMONIC_REQUEST,
  SEED_TO_MNEMONIC_SUCCESS,
  MNEMONIC_TO_SEED_ERROR,
  MNEMONIC_TO_SEED_REQUEST,
  MNEMONIC_TO_SEED_SUCCESS,
  GENERATE_WALLET_ADDRESS_ERROR,
  GENERATE_WALLET_ADDRESS_REQUEST,
  GENERATE_WALLET_ADDRESS_SUCCESS,
  ASSET_VIEW_CONTENT_CHANGE_ERROR,
  ASSET_VIEW_CONTENT_CHANGE_REQUEST,
  ASSET_VIEW_CONTENT_CHANGE_SUCCESS
} from '../actions/walletActions'

const initialState = {
  isCreating: false,
  isCreated: false,
  seed: {},
  mnemonic: '',
  error: null,
  address: {},
  asset: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GENERATE_WALLET_SEED_ERROR:
            return { ...state, isCreating: false, error: action.payload }
        case GENERATE_WALLET_SEED_REQUEST:
            return { ...state, isCreating: true }
        case GENERATE_WALLET_SEED_SUCCESS:
            return { ...state, isCreating: false, ...action.payload }
        case SEED_TO_MNEMONIC_ERROR:
            return { ...state, isCreating: false, error: action.payload }
        case SEED_TO_MNEMONIC_REQUEST:
            return { ...state, isCreating: true }
        case SEED_TO_MNEMONIC_SUCCESS:
            return { ...state, isCreating: false, ...action.payload }
        case MNEMONIC_TO_SEED_ERROR:
            return { ...state, isCreating: false, error: action.payload }
        case MNEMONIC_TO_SEED_REQUEST:
            return { ...state, isCreating: true }
        case MNEMONIC_TO_SEED_SUCCESS:
            return { ...state, isCreating: false, ...action.payload }
        case GENERATE_WALLET_ADDRESS_ERROR:
            return { ...state, isCreating: false, error: action.payload }
        case GENERATE_WALLET_ADDRESS_REQUEST:
            return { ...state, isCreating: true }
        case GENERATE_WALLET_ADDRESS_SUCCESS:
            return {
                ...state,
                isCreating: false,
                address: {
                    ...state.address,
                    [action.payload.name]:action.payload.number
                }
            }
        case ASSET_VIEW_CONTENT_CHANGE_ERROR:
            return { ...state, isCreating: false, error: action.payload }
        case ASSET_VIEW_CONTENT_CHANGE_REQUEST:
            return { ...state, isCreating: true }
        case ASSET_VIEW_CONTENT_CHANGE_SUCCESS:
          return { ...state, asset: action.payload.value}
        default:
            return state
    }
}
