/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { configureIguazuREST, resourcesReducer } from 'iguazu-rest';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import regeneratorRuntime from 'regenerator-runtime';
import shadesOfNicholas from './reducers/shadesOfNicholas';
import dogs from './reducers/dogs';
import resources from './resources';

configureIguazuREST({
  resources,
  defaultOpts: {
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4000',
      'Content-Type': 'application/json',
    },
  },
});

const createStore = () => reduxCreateStore(combineReducers({
  resources: resourcesReducer,
  shadesOfNicholas,
  dogs,
}), composeWithDevTools(
  applyMiddleware(thunk)
));

export default createStore;
