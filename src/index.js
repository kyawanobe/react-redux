import React from 'react';
import { Provider } from 'react-redux' // P117追加
import  createStore  from './store'
import { render } from 'react-dom'
import TodoApp from './containers/TodoApp' //./components/TodoAppから変更
import './index.css';
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

//const store = createStore(tasksReducer)
const history = createBrowserHistory()
const store = createStore(history)

//P117で追加
render(
    <Provider store = {store}>
        <ConnectedRouter history = {history}>
            <TodoApp />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
