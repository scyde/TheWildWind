import './main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch, } from 'react-router-dom'
import {Provider} from 'react-redux'
import rootReducer from 'reducers'
import Main from 'main'
import Landing from 'landing'
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
