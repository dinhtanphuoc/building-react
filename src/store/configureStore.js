import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const configureStore = preloaderState => createStore(
    rootReducer,
    preloaderState,
    applyMiddleware(createLogger, thunk)
);

export default configureStore;