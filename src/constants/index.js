export const Status = [
    {
        value: 'col-1',
        label: 'Những việc cần làm'
    },
    {
        value: 'col-2',
        label: 'Những việc đang làm'
    },
    {
        value: 'col-3',
        label: 'Những việc đã hoàn thành'
    }
]

//lấy danh sách task từ database
export const GET_LIST = 'GET_LIST';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILED = 'GET_FAILED';

//thêm mới
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const ADD_NEW_TASK_SUCCESS = 'ADD_NEW_TASK_SUCCESS';
export const ADD_NEW_TASK_FAILED = 'ADD_NEW_TASK_FAILED';

//Sửa task
export const EDIT_TASK = 'EDIT_TASK';
export const ACTION_EDIT_TASK = 'ACTION_EDIT_TASK';
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';
export const EDIT_TASK_FAILED = 'EDIT_TASK_FAILED';

//Xóa task
export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILED = 'DELETE_TASK_FAILED';

//sắp xếp task
export const SORT_TASK = "SORT_TASK";
export const SAVE_TASK_AFTER_SORT = 'SAVE_TASK_AFTER_SORT';
export const SORT_TASK_SUCCESS = 'SORT_TASK_SUCCESS';
export const SORT_TASK_FAILED = 'SORT_TASK_FAILED';

//searching
export const FIND_TASK = 'FIND_TASK';
export const GET_LIST_AFTER_FIND = 'GET_LIST_AFTER_FIND';

//loading
export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

//Modal
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const CHANGE_MODAL_TITLE = 'CHANGE_MODAL_TITLE';
export const CHANGE_MODAL_CONTENT = 'CHANGE_MODAL_CONTENT';

//status trả về
export const STATUS_CODE = {
    SUCCESS : 200,
    CREATED : 201,
    UPDATED : 202
}