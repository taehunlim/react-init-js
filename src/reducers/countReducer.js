import { INCREASE, DECREASE } from '../actions/types';


const initialState = {
    number: 0
};

export function countReducer(initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                number: state.number + 1
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state;
    }
};