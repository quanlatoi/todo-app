import * as taskConstants from '../constants/index'

export const getListTask = tabId => ({
    type: taskConstants.GET_LIST_TASK,
    payload: tabId
})

export const getListTaskSuccess = payload => {
    return {
        type: taskConstants.GET_LIST_TASK_SUCCESS,
        payload
    }
}

// export const getListTaskFalse = data =>({
//     type: taskConstants.GET_LIST_TASK_FAILED,
//     payload: data
// })

//search
// export const findTask = keyWords => ({
//     type: taskConstants.FIND_TASK,
//     payload: { keyWords }
// })

// export const callAPIForFindTask = ( params = {} )=>{
//     console.log('action')
//     return {
//         type: taskConstants.GET_LIST_AFTER_FIND,
//         payload: { params }
//     }
// }

//thêm mới task
export const addNewTask = (task, position) => {
    return {
        type: taskConstants.ADD_NEW_TASK,
        payload: {
            position,
            ...task
        }
    }
}

export const addNewTaskSuccess = data => ({
    type: taskConstants.ADD_NEW_TASK_SUCCESS,
    payload: data
})

// export const addNewTaskFailed = error =>({
//     type: taskConstants.ADD_NEW_TASK_FAILED,
//     payload: error
// })

// //sửa task
export const getEditTask = (task) => {
    return {
        type: taskConstants.EDIT_TASK,
        payload: task
    }
}

export const actionEditTask = (task) => ({
    type: taskConstants.ACTION_EDIT_TASK,
    payload: task
})

export const editTaskSuccess = data => ({
    type: taskConstants.EDIT_TASK_SUCCESS,
    payload: data
})

export const editTaslFailed = error => ({
    type: taskConstants.EDIT_TASK_FAILED,
    payload: error
})

// //Xóa task
export const deleteTask = id => ({
    type: taskConstants.DELETE_TASK,
    payload: id
})

export const deleteTaskSuccess = data => ({
    type: taskConstants.DELETE_TASK_SUCCESS,
    payload: data
})

// export const deleteTaskFailed = error =>({
//     type: taskConstants.DELETE_TASK_FAILED,
//     payload: error
// })

// //sắp xếp task (kéo thả)
export const sortTasks = (result, tasks2) => {
    return {
        type: taskConstants.SORT_TASK,
        payload: {
            update: result,
            tasks2
        }
    }
}

// export const saveTaskAfterSort = tasks => {
//     return {
//         type: taskConstants.SORT_TASK,
//         payload: tasks
//     }
// }

export const sortTasksSuccess = data => ({
    type: taskConstants.SORT_TASK_SUCCESS,
    payload: data
})

// export const sortTasksFailed = error =>({
//     type: taskConstants.SORT_TASK_FAILED,
//     payload: error
// })