import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import createSagaMiddleware from 'react-saga';
// import { createLogger } from 'redux-logger';
import rootReducer from './root-reducer';


const middlewares = [];
 
if (process.env.NODE_ENV === `development`) { 
  middlewares.push(logger);
}

export const store = createStore( rootReducer, applyMiddleware(...middlewares));
// export const store = createStore( rootReducer, applyMiddleware(logger));

export const persistor = persistStore(store);
