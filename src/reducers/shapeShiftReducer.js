import {
  FETCH_SHAPESHIFT_COINS_ERROR,
  FETCH_SHAPESHIFT_COINS_REQUEST,
  FETCH_SHAPESHIFT_COINS_SUCCESS,
  SET_SHAPESHIFT_FROM_SYMBOL,
  SET_SHAPESHIFT_TO_SYMBOL,
  SHIFT_AMOUNT_LOAD,
  SHAPESHIFT_SHIFT_SUCCESS,
  SHAPESHIFT_SHIFT_ERROR,
  SET_MANUAL_ADDRESS_INPUT
} from '../actions/shapeShiftActions'

const initialState = {
  inFlight: false,
  isComplete: false,
  shiftInFlight: false,
  shiftSuccess: false,
  error: null,
  coins: [],
  fromSymbol: '?',
  toSymbol: '?',
  shiftAmount: .1,
  manualAddressInput: false,
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
            shiftInFlight: false,
            shiftSuccess: true,
            status: action.payload
          }
        }
        case SET_MANUAL_ADDRESS_INPUT: {
          return {
            ...state,
            manualAddressInput: action.payload.input
        case SHAPESHIFT_SHIFT_REQUEST:{
          return {
            ...state,
            shiftInFlight: true,
            requestDateTime: Math.floor(Date.now() / 1000)
          }
        }
        case SHAPESHIFT_SHIFT_ERROR: {
          return {
            ...state,
            shiftInFlight: false,
            shiftSuccess: false,
            status: action.payload,
          }
        }
        default:
            return state
    }
}
