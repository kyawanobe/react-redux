const initialState  = {
    task : '',
    tasks : ['1','2   ']
}

export default function tasksReducer(state = initialState, action){
    switch(action.type){
        case 'INPUT_TASK':
            return {
                ...state,
                task : action.payload.task
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasks : state.tasks.concat([action.payload.task]),
                task : '' //追加仕様1　登録後テキストボックスリセット処理
            }
        default:
            return state
    }
}