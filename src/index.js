import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
      router: routerReducer
  }),
  applyMiddleware(middleware, createLogger(), thunkMiddleware)
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
