import {
  FETCH_SHAPESHIFT_COINS_ERROR,
  FETCH_SHAPESHIFT_COINS_REQUEST,
  FETCH_SHAPESHIFT_COINS_SUCCESS,
} from '../actions/shapeShiftActions'

const initialState = {
  inFlight: false,
  isComplete: false,
  error: null,
  coins: []
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
        default:
            return state
    }
}
