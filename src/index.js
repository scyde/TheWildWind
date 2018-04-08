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
import { Provider } from 'react-redux'
import Main from 'main'
import Landing from 'landing'
import TWWReducer from 'reducers'

const store = createStore(TWWReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
