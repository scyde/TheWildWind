import React, { Component } from 'react'
import Landing from 'landing'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'reducers'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import Loadable from 'react-loadable'
import Loading from 'loading'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const Main = Loadable({
    loader: () => import('main'),
    loading: Loading,
    delay: 500
})

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/" component={Main} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App
