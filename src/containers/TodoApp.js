import { connect } from 'react-redux'
import TodoApp from '../components/TodoApp'
import { inputTask, addTask } from '../actions/tasks'
import { push } from 'react-router-redux'

//Storeにあるtask,tasksというstateをPropsに渡す
function mapStateToProps({tasks}){
    return{
        task : tasks.task,
        tasks : tasks.tasks
    }
}

//ActionをDispatchさせる関数をPropsに渡す。
function mapDispatchToProps(dispatch){
    return{    
        addTask(task){
            dispatch(addTask(task))
        },
        inputTask(task){
            dispatch(inputTask(task))
        },
        redirectToError(){
            dispatch(push('/error'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
