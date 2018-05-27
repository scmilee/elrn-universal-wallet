import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import { fetchUserData } from './actions/userActions'

import userReducer from    './reducers/userReducer'
import fileReducer from    './reducers/fileReducer'
import walletReducer from  './reducers/walletReducer'
import learnerReducer from './reducers/learnerReducer'
import editorReducer from  './reducers/editorReducer'

import App from            './components/App'

import './index.css'
import 'bulma/css/bulma.css'

import registerServiceWorker from './registerServiceWorker'

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    wallet: walletReducer,
    learner: learnerReducer,
    editor: editorReducer,
    user: userReducer,
    router: routerReducer,
    file: fileReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middleware, createLogger(), thunkMiddleware)
)

store.dispatch(fetchUserData())

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()
