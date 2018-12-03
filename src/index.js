import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import Reducer from './reducers/reducerIndex';
// import browserRouter

const store= createStore(Reducer)


ReactDOM.render(
    // <Provider store={createStore(combineReducers)}>
        <App />,
    // </Provider>, 
    document.getElementById('root'));


serviceWorker.unregister();
