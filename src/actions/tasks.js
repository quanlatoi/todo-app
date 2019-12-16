import * as taskConstants from '../constants/index'

export const getListTask = ()=>({
    type: taskConstants.GET_LIST,
})

export const getListTaskSuccess = data =>({
    type: taskConstants.GET_SUCCESS,
    payload: data
})

export const getListTaskFalse = data =>({
    type: taskConstants.GET_FAILED,
    payload: data
})

//search
export const findTask = keyWords => ({
    type: taskConstants.FIND_TASK,
    payload: { keyWords }
})

export const callAPIForFindTask = ( params = {} )=>{
    console.log('action')
    return {
        type: taskConstants.GET_LIST_AFTER_FIND,
        payload: { params }
    }
}

//thêm mới task
export const addNewTaskAction = (title, description)=>({
    type: taskConstants.ADD_NEW_TASK,
    payload: { 
        title,
        description
     }
})

export const addNewTaskSuccess = data =>({
    type: taskConstants.ADD_NEW_TASK_SUCCESS,
    payload: data
})

export const addNewTaskFailed = error =>({
    type: taskConstants.ADD_NEW_TASK_FAILED,
    payload: error
})

//sửa task
export const getEditTask = (task)=>({
    type: taskConstants.EDIT_TASK,
    payload: task
})

export const actionEditTask = (id, task)=>({
    type: taskConstants.ACTION_EDIT_TASK,
    payload: {
        id,
        task
    }
})

export const editTaskSuccess = data => ({
    type: taskConstants.EDIT_TASK_SUCCESS,
    payload: data
})

export const editTaslFailed = error =>({
    type: taskConstants.EDIT_TASK_FAILED,
    payload: error
})

//Xóa task
export const deleteTask = id => ({
    type: taskConstants.DELETE_TASK,
    payload: id
})

export const deleteTaskSuccess = data => ({
    type: taskConstants.DELETE_TASK_SUCCESS,
    payload: data
})

export const deleteTaskFailed = error =>({
    type: taskConstants.DELETE_TASK_FAILED,
    payload: error
})

//sắp xếp task (kéo thả)
export const sortTasks = tasks => {
    return{
        type: taskConstants.SORT_TASK,
        payload: tasks
    }
}

export const saveTaskAfterSort = tasks => {
    return {
        type: taskConstants.SORT_TASK,
        payload: tasks
    }
}

export const sortTasksSuccess = data => ({
    type: taskConstants.SORT_TASK_SUCCESS,
    payload: data
})

export const sortTasksFailed = error =>({
    type: taskConstants.SORT_TASK_FAILED,
    payload: error
})