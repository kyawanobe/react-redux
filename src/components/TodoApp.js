import React from 'react'
//import { inputTask, addTask } from '../actions/tasks'


//export default function TodoApp({ store }) {
export default function TodoApp({task, tasks, inputTask, addTask}){ //P116の通り、containerから4つを受け取る。
//    const {task, tasks} = store.getState()
    return(
        <div>
            {/*/追加仕様1　登録後テキストボックスリセット処理 */}
            {/*<input type = "text" onChange = {(e) => store.dispatch(inputTask(e.target.value))} />*/}
            {/*<input type = 'text' value = {task} onChange = {(e) => store.dispatch(inputTask(e.target.value))} /> */}
            {/*<input type = "button" value = 'add' onClick = {() => store.dispatch(addTask(task))} /> */}
            <input type = 'text' value = {task} onChange = {(e) => inputTask(e.target.value)} />
            <input type = 'button' value = 'add' onClick = {() => addTask(task)} />
            <ul>
                {tasks.map(function(item, i){
                    return(
                        <li key = {i}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}