import intialState from '../state/state';

export default function user(state = intialState, action) {
    switch (action.type) {
        case 'REQUEST_RESULTS':
            return Object.assign({}, state, {
                isLoading: action.isLoading
            })
        case 'RECEIVE_RESULTS':
            return Object.assign({}, state, {
                isLoading: action.isLoading,
                data: action.data
            })
        default:
            return state
    }
};
