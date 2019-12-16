import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducer/index';
import rootSaga from '../sagas/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const configureStore = ()=>{
    const middlewares = [sagaMiddleware];
    const store = createStore(
        rootReducer,
        composeEnhancers(
            (applyMiddleware(...middlewares))
        ));
        sagaMiddleware.run(rootSaga);
    return store
}

export default configureStore;