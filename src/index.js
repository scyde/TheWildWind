import './main.css'
import 'semantic-ui-react'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import {Provider} from 'react-redux'
import rootReducer from 'reducers'
import Main from 'main'
import Landing from 'landing'

const store = createStore(rootReducer)

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
