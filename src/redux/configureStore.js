import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Articles } from './articles';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            articles: Articles,
        }),
        applyMiddleware(thunk)
    );

    return store;
}