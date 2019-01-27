import React from 'react';
import { Provider } from 'react-redux' // P117追加
import { createStore } from 'redux'
import { render } from 'react-dom'
import { ConnectedRouter} from 'react-router-redux'
import tasksReducer from './reducers/tasks' 
//import TodoApp from './components/TodoApp' //P117による変更
import TodoApp from './containers/TodoApp'
import './index.css';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()
const store = createStore(history)

/*P117で削除
function renderApp(store){
    render(
        <TodoApp store = {store} />,
        document.getElementById('root')
    )
}

store.subscribe(()=> renderApp(store)) renderApp(store) */

//P117で追加
render(
    <Provider store = {store}>
        <ConnectedRouter history = {history}>
        <TodoApp />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

//Store(Stateの保持)を定義
/*
const initialState = {
    tasks : []
}

//Reduer(Storeを変化させる操作)の定義
//returnの内容を{}で囲うことに注意
//returnの最初の...state,は何か？state全部を渡す。tasksだけを更新するようなイメージ？
function tasksReducer(state = initialState, action){
    //第一引数：状態、第二引数；操作
    switch(action.type){
        case 'ADD_TASK':
            return{
            ...state,
            tasks : state.tasks.concat([action.task])
            }
        default :
            return state
    }
}

const store = createStore(tasksReducer)

function handleChange(){
    console.log('store.getState() = ' & store.getState())
}

const unsubscribe = store.subscribe(    handleChange)

const addTask = (task) => (
    {
        type : 'ADD_TASK',
        payload : {
            task
        }
    }
)

console.log(store.getState())

store.dispatch(addTask('Storeを学ぶ'))
*/
//ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
