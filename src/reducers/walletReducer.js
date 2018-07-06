import {
  MNEMONIC_LOAD,
  FETCH_MNEMONIC_ERROR,
  FETCH_MNEMONIC_REQUEST,
  FETCH_MNEMONIC_SUCCESS,
  PUT_MNEMONIC_ERROR,
  PUT_MNEMONIC_REQUEST,
  PUT_MNEMONIC_SUCCESS,
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
  SET_SHAPESHIFT_RETURN_ADDRESS,
  GENERATE_SHAPESHIFT_RETURN_ADDRESS_SUCCESS,
  RETURN_ADDRESS_LOAD,
  GENERATE_ACCOUNT_ADDRESS_ERROR,
  GENERATE_ACCOUNT_ADDRESS_REQUEST,
  GENERATE_ACCOUNT_ADDRESS_SUCCESS
} from '../actions/walletActions'

const initialState = {
  isCreating: false,
  isCreated: false,
  seed: {},
  mnemonic: '',
  error: null,
  address: '',
  accountAddressess: [0, 10],
  accountCount: 0
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
            address: action.payload.address,
            seed: action.payload.seed,
            coin: action.payload.coinID,
            derivePath: action.payload.derivePath
          }
        case GENERATE_ACCOUNT_ADDRESS_ERROR:
          return { ...state, error: action.payload }
        case GENERATE_ACCOUNT_ADDRESS_REQUEST:
          return {...state, isCreating: true}
        case GENERATE_ACCOUNT_ADDRESS_SUCCESS:
          state.accountAddressess[state.accountCount] = action.payload.address;
          return {
            ...state,
            currentAccountAddress: action.payload.address,
            accountCount: state.accountCount += 1,
            isCreating: false
          }
        case FETCH_MNEMONIC_SUCCESS:
          return { ...state, isFetching: false, ...action.payload}
        case SET_SHAPESHIFT_RETURN_ADDRESS: {
          return {
            ...state,
            returnAddress: action.payload.returnAddress
          }
        }
        case GENERATE_SHAPESHIFT_RETURN_ADDRESS_SUCCESS: {
          return {
            ...state,
            returnAddress: action.payload.address
          }
        }
        case FETCH_MNEMONIC_ERROR:
          return { ...state, isFetching: false, error: action.payload }
        case FETCH_MNEMONIC_REQUEST:
          return { ...state, isFetching: true }
        case PUT_MNEMONIC_ERROR:
          return { ...state, isFetching: false, error: action.payload }
        case PUT_MNEMONIC_REQUEST:
          return { ...state, isFetching: true }
        case PUT_MNEMONIC_SUCCESS:
          return { ...state, isFetching: false, mnemonic: action.payload.mnemonic }
        case MNEMONIC_LOAD:
            return { ...state, mnemonic: action.payload };
        case RETURN_ADDRESS_LOAD:
            return { ...state, returnAddress: action.payload };
        default:
            return state
    }
}
