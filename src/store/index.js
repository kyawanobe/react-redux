import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import tasksReducer from '../reducers/tasks'

export default function createStore(history){
    return reduxCreateStore(
        //TodoAppのtasksReducerとrouterReducerを合成する
        combineReducers({
            tasks : tasksReducer,
            router : routerReducer, //ルーティングのためのReducer
        }),
        applyMiddleware(
            routerMiddleware(history)
        )
    )
}