import React from 'react';
import { render } from 'react-dom'
import { Route } from 'react-router-dom' //P133_add
import { Provider } from 'react-redux' // P117追加
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import TodoApp from './containers/TodoApp' //./components/TodoAppから変更
import Error from './components/Error' //P133_add
import createStore from './store'
import './index.css';

//const store = createStore(tasksReducer)
const history = createBrowserHistory()
const store = createStore(history)

//P117で追加
render(
    <Provider store = {store}>
        <ConnectedRouter history = {history}>
        <div>
            <Route exact path="/" component = {TodoApp} />
            <Route exact path="/error" component = {Error} />
        </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
