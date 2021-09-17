import React, { createContext, useContext, useReducer } from 'react';
import { rootReducer, initialState } from './reducers';

const StateContext = createContext(null);
const DispatchContext = createContext(null);

export const Store = ({children}) => {

    const [state, dispatch] = useReducer(rootReducer, initialState);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
};

export const useRootState = () => {
    const state = useContext(StateContext);
    if (!state) {
        throw new Error('Cannot find Provider')
    }
    return state;
};

export const useRootDispatch = () => {
    const dispatch = useContext(DispatchContext);

    if (!dispatch) {
        throw new Error('Cannot find Provider')
    }
    return dispatch;
}