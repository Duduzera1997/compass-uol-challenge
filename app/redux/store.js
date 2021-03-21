import '~/config/reactotron';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const reactotron = __DEV__ && console.tron.createEnhancer();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = __DEV__
  ? compose(applyMiddleware(sagaMiddleware), reactotron)
  : compose(applyMiddleware(sagaMiddleware));

const store = createStore(persistedReducer, composeEnhancers);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
