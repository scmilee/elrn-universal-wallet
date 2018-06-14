import {
  FETCH_SHAPESHIFT_COINS_ERROR,
  FETCH_SHAPESHIFT_COINS_REQUEST,
  FETCH_SHAPESHIFT_COINS_SUCCESS,
  SET_SHAPESHIFT_FROM_SYMBOL,
  SET_SHAPESHIFT_TO_SYMBOL,
  SET_SHAPESHIFT_AMOUNT,
  SHAPESHIFT_SHIFT_SUCCESS
} from '../actions/shapeShiftActions'

const initialState = {
  inFlight: false,
  isComplete: false,
  error: null,
  coins: [],
  fromSymbol: '(pick litecoin)',
  toSymbol: '(pick bitcoin)',
  amount: .1,
  status: {
    apiPubKey: '',
    deposit: '',
    depositAmount: '',
    expiration: '',
    maxLimit: '',
    minerFee: '',
    orderId: '',
    pair: '',
    quotedRate: '',
    returnAddress: '',
    withdrawal: '',
    withdrawalAmount: ''
  }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SHAPESHIFT_COINS_ERROR:
            return { ...state, inFlight: false, error: action.payload }
        case FETCH_SHAPESHIFT_COINS_REQUEST:
            return { ...state, inFlight: true }
        case FETCH_SHAPESHIFT_COINS_SUCCESS: {
          return {
            ...state,
            inFlight: false,
            isComplete: true,
            coins: action.payload
          }
        }
        case SET_SHAPESHIFT_FROM_SYMBOL: {
          return {
            ...state,
            fromSymbol: action.payload.symbol
          }
        }
        case SET_SHAPESHIFT_TO_SYMBOL: {
          return {
            ...state,
            toSymbol: action.payload.symbol
          }
        }
        case SET_SHAPESHIFT_AMOUNT: {
          return {
            ...state,
            amount: action.payload.amount
          }
        }
        case SHAPESHIFT_SHIFT_SUCCESS: {
          return {
            ...state,
            status: action.payload
          }
        }
        default:
            return state
    }
}
