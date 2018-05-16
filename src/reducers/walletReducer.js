import {
  GENERATE_WALLET_SEED_ERROR,
  GENERATE_WALLET_SEED_REQUEST,
  GENERATE_WALLET_SEED_SUCCESS,
  SEED_TO_MNEMONIC_ERROR,
  SEED_TO_MNEMONIC_REQUEST,
  SEED_TO_MNEMONIC_SUCCESS
} from '../actions/walletActions'

const initialState = {
  isCreating: false,
  isCreated: false,
  seed: {},
  mnemonic: {},
  error: null
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
    default:
      return state
  }
}
