import { combineReducers, applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { logger } from 'redux-logger';

const connection = (state = { connected: false, isLogin: false, user: null }, action) => {
    switch (action.type) {
        case 'CONNECTION_PENDING':
            return { connected: false, user: null };
        case 'CONNECTION_FULFILLED':
            return { connected: true, user: action.payload };
        case 'LOGGED':
            console.log('LOGGED', action);
            return { ...state, connected: true, isLogin: true, user: action.data };
        default:
            return state;
    }
}
const users = (state = { loading: false, users: [] }, action) => {
    switch (action.type) {
        case 'FETCH_USERS_PENDING':
            return { loading: true, users: [] };
        case 'FETCH_USERS_FULFILLED':
            return { loading: false, users: action.payload };
        case 'CREATE_USER_FULFILLED':
            return { ...state, users: [action.payload].concat(state.users) };
        default:
            return state;
    }
}

const reducers = combineReducers({
    connection,
    users
});

const middleware = applyMiddleware(
    logger,
);

//store get reducers and  middleware as parameter
export default createStore(reducers, middleware);