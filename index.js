import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './src/reducers/index';

import {Provider} from 'react-redux';

const AppProvider = () => (
  <Provider store={createStore(combineReducers, applyMiddleware(thunk))}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppProvider);
