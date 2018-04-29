export const LEARNER_PUBLIC_KEY_UPDATE = 'LEARNER_PUBLIC_KEY_UPDATE';
export const LEARNER_PUBLIC_KEY_PROCESS = 'LEARNER_PUBLIC_KEY_PROCESS';
export const LEARNER_PUBLIC_KEY_LOAD = 'LEARNER_PUBLIC_KEY_LOAD';

export const updateLearnerPublicKey = (val) => ({ type: LEARNER_PUBLIC_KEY_UPDATE, payload: val });
export const loadLearnerPublicKey = (val) => ({ type: LEARNER_PUBLIC_KEY_LOAD, payload: val });

export const processLearnerPublicKey = (learnerPublicKey) => {
    return (dispatch) => {
        dispatch(loadLearnerPublicKey(learnerPublicKey));
        return ({ type: LEARNER_PUBLIC_KEY_PROCESS, payload: learnerPublicKey })
    };
};
