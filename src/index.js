import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
