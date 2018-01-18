import { applyMiddleware, createStore, compose } from 'redux';
import loggerMiddleware from 'redux-logger'; // to log the redux state
import thunkMiddleware from 'redux-thunk'; // to let dispatch function
import resultReducer from '../reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    resultReducer,
    composeEnhancers(
        applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        createActionBuffer(REHYDRATE)
        )
    )
);

export default store;