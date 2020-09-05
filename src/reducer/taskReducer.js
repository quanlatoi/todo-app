import {
    GET_LIST_TASK_SUCCESS,
    ADD_NEW_TASK_SUCCESS,
    EDIT_TASK,
    EDIT_TASK_SUCCESS,
    DELETE_TASK_SUCCESS,
    SORT_TASK_SUCCESS
} from '../constants/index'

const initialState = {
    data: [],
    task: null
};

const getListTasks = (state = initialState, action)=>{
    switch(action.type){
        case GET_LIST_TASK_SUCCESS:
            return {
                ...state,
                data: action.payload.task,
            };
        case ADD_NEW_TASK_SUCCESS:{
            const newListTask = state.data.concat(action.payload);
            return {
                ...state,
                data: newListTask
            };
        }
        case EDIT_TASK:{
            return {
                ...state,
                task: action.payload,
            };
        }
        case EDIT_TASK_SUCCESS:{
            const listTask = [...state.data];
            const index = listTask.findIndex(elem => elem._id === action.payload._id);
            if(index >= 0){
                listTask[index] = {...listTask[index], ...action.payload}
            }
            return {
                ...state,
                data: listTask
            };
        }
        case DELETE_TASK_SUCCESS:{
            const _listTask = [...state.data];
            const taskDeleted = _listTask.findIndex(elem => elem._id === action.payload)
            _listTask.splice(taskDeleted, 1);
            return{
                ...state,
                data: _listTask
            };
        }
        // //sort
        case SORT_TASK_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                data: action.payload.tasks2.concat( action.payload.update),
            }
        // case types.SORT_TASK:
        //     return {
        //         data: action.payload
        //     }
        default:
            return state;
    }
}

export default getListTasks;