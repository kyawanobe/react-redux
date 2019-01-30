import React from 'react'

export default function TodoApp({task, tasks, inputTask, addTask, redirectToError}){ //P116の通り、containerから4つを受け取る。
    const tasksList = [...tasks].map((task,idx) => 
        <li key = {idx}>{task}</li>
        )

    return(
        <div>
            {/*テキストボックスで"value = {task}により、addTaskによりtaskが空になるので、空の表示ができる。*/}
            <input type = 'text' value = {task} onChange = {(e) => inputTask(e.target.value)} />
            <input type = 'button' value = 'add' onClick = {() => addTask(task)} />
            <ul>
                {tasks.map(function(item, i){
                    return(
                        <li key = {i}>{item}</li>
                    )
                })}
                {tasksList}
                
            </ul>
            <button onClick = {() => redirectToError()}>エラーぺージへ</button> 
            <input type = 'button' value = "エラーページへ" onClick = {() => redirectToError()} />
        </div>
    )
}
