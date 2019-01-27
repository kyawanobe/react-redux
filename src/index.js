import React from 'react';
import { Provider } from 'react-redux' // P117追加
import { createStore } from 'redux'
import { render } from 'react-dom'
import tasksReducer from './reducers/tasks' 
import TodoApp from './containers/TodoApp' //./components/TodoAppから変更
import './index.css';

const store = createStore(tasksReducer)
//P117で追加
render(
    <Provider store = {store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
