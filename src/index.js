import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ConnectedRouter , connectRouter, routerMiddleware } from 'connected-react-router';
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducerIndex";
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history';

// const browserHistory = createBrowserHistory()
const history = createBrowserHistory({basename: process.env.PUBLIC_URL})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
  connectRouter(history)(reducer),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter basename={process.env.PUBLIC_URL} history={history}> 
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();



// you'll need to update the createBrowserRouter call and pass it a correct basename value so it works on github pages
