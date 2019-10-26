import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from '../redux/reducers';
import rootSaga from '../redux/sagas';
import persistReducers from './persistReducers';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor
});

const middlewares = [sagaMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer, console.tron.createEnhancer()];
const composedEnhancers = compose(...enhancers);

const store = createStore(persistReducers(rootReducer), composedEnhancers);
const persistor = persistStore(store);
export { store, persistor };

sagaMiddleware.run(rootSaga);
