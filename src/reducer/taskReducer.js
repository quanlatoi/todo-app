import * as types from '../constants/index'

const initialState = {
    data: [],
    task: null
};

const getListTasks = (state = initialState, action)=>{
    switch(action.type){
        //lấy tasks từ db về
        case types.GET_SUCCESS:
            return {
                data: action.payload
            };
        case types.GET_FAILED:
            return {
                data: state.data,
                error: action.payload
            };
        //thêm mới task
        case types.ADD_NEW_TASK_SUCCESS:
            state = state.data.concat(action.payload);
            return {
                data: state
            };
        case types.ADD_NEW_TASK_FAILED:
            return {
                data: state.data,
                error: action.payload
            }
        // update task
        case types.EDIT_TASK:
            return {
                task: action.payload,
                data: state.data
            };
        case types.EDIT_TASK_SUCCESS:
            const listTask = [...state.data];
            const index = listTask.findIndex(elem => elem.id === action.payload.id)
            if(index >= 0){
                listTask[index] = {...listTask[index], ...action.payload}
            }
            return {
                data: listTask
            };
        case types.EDIT_TASK_FAILED:
            return {
                data: state.data,
                error: action.payload
            };
        //delete task
        case types.DELETE_TASK_SUCCESS:
            const _listTask = [...state.data];
            const a = _listTask.findIndex(elem => elem.id === action.payload)
            _listTask.splice(a, 1);
            return{
                data: _listTask
            };
        case types.DELETE_TASK_FAILED:
            return {
                data: state.data,
                error: action.payload.error
            }
        //sort
        // case types.SORT_TASK_SUCCESS:
        //     console.log(action.payload)
        //     return {
        //         data: state.data,
        //         task: action.data
        //     }
        case types.SORT_TASK:
            return {
                data: action.payload
            }
        default:
            return state;
    }
}

export default getListTasks;