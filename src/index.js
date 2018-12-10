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

const browserHistory = createBrowserHistory()



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
  connectRouter(browserHistory)(reducer),
  composeEnhancers(applyMiddleware(routerMiddleware(browserHistory), thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter basename={process.env.PUBLIC_URL} history={browserHistory}> 
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
