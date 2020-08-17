import * as ActionTypes from './ActionTypes';

export const Articles = (state = { isLoading: true,
    errMess: null,
    articles:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_NEWS:
            return {...state, isLoading: false, errMess: null, articles: action.payload};

        case ActionTypes.NEWS_LOADING:
            return {...state, isLoading: true, errMess: null, articles: []}

        case ActionTypes.NEWS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};