import {
  LIST_NETWORKS_ERROR,
  LIST_NETWORKS_REQUEST,
  LIST_NETWORKS_SUCCESS
} from '../actions/networkActions'

const initialState = {
  inFlight: false,
  isComplete: false,
  networks: [],
  error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LIST_NETWORKS_ERROR:
            return { ...state, inFlight: false, error: action.payload }
        case LIST_NETWORKS_REQUEST:
            return { ...state, inFlight: true }
        case LIST_NETWORKS_SUCCESS:
          return {
            ...state,
            inFlight: false,
            isComplete: true,
            networks: action.payload
          }
        default:
            return state
    }
}
