import {
  LEARNER_PUBLIC_KEY_UPDATE,
  LEARNER_PUBLIC_KEY_PROCESS,
  LEARNER_PUBLIC_KEY_LOAD,
  LEARNER_PRIVATE_KEY_UPDATE,
  LEARNER_PRIVATE_KEY_PROCESS
} from '../actions/learnerActions'

import {
  GENERATE_KEYPAIR_SUCCESS
} from '../actions/keypairActions'

const initState = {
     keypair: '',
};

export default (state = initState, action) => {
    switch (action.type) {
        case GENERATE_KEYPAIR_SUCCESS:
            return { ...state, keypair: action.payload };
        case LEARNER_PUBLIC_KEY_UPDATE:
            return { ...state, keypair: action.payload };
        case LEARNER_PUBLIC_KEY_PROCESS:
            return { ...state, keypair: action.payload  };
        case LEARNER_PUBLIC_KEY_LOAD:
            return { ...state, keypair: action.payload };
        default:
            return state;
    }
};
