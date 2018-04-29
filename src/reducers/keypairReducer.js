import {
  GENERATE_KEYPAIR_ERROR,
  GENERATE_KEYPAIR_REQUEST,
  GENERATE_KEYPAIR_SUCCESS,
} from '../actions/keypairActions'

const initialState = {
  isCreating: false,
  isCreated: false,
  keypair: null,
  error: null
}

export const keypairReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_KEYPAIR_ERROR:
      return { ...state, isCreating: false, error: action.payload }
    case GENERATE_KEYPAIR_REQUEST:
      return { ...state, isCreating: true }
    case GENERATE_KEYPAIR_SUCCESS:
      return { ...state, isCreating: false, ...action.payload }
    default:
      return state
  }
}
