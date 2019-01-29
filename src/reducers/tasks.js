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
            //追加仕様。入力値がからの場合は、Todoリストに追加しない。
            if(action.payload.task === ""){
                alert("入力値が空です。")
                return state
            }
            return {
                ...state,
                tasks : state.tasks.concat([action.payload.task]),
                task : '' //追加仕様1　登録後テキストボックスリセット処理
            }
        default:
            return state
    }
}