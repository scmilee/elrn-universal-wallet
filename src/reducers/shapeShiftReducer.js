import {
  FETCH_SHAPESHIFT_COINS_ERROR,
  FETCH_SHAPESHIFT_COINS_REQUEST,
  FETCH_SHAPESHIFT_COINS_SUCCESS,
  SET_SHAPESHIFT_FROM_SYMBOL,
  SET_SHAPESHIFT_TO_SYMBOL,
  SHAPESHIFT_SHIFT_SUCCESS,
  SHIFT_AMOUNT_LOAD
} from '../actions/shapeShiftActions'

const initialState = {
  inFlight: false,
  isComplete: false,
  error: null,
  coins: [],
  fromSymbol: '(pick litecoin)',
  toSymbol: '(pick bitcoin)',
  shiftAmount: .1,
  status: {}
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
        case SHIFT_AMOUNT_LOAD: {
          return {
            ...state,
            shiftAmount: action.payload
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
