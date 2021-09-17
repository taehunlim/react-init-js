
import { countReducer } from './countReducer';

const combineReducers = (reducers) => {
    return (state = {}, action) => {
        const newState = {};
        for (let key in reducers) {
            newState[key] = reducers[key](state[key], action);
            console.log(newState)
        }
        return newState
    }
};

export const initialState = {
    count: {
        number: 0
    }
}

export const rootReducer = combineReducers({
    count: countReducer
});