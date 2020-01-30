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
export const GET_LIST_TASK = 'GET_LIST_TASK';
export const GET_LIST_TASK_SUCCESS = 'GET_LIST_TASK_SUCCESS';
export const GET_LIST_TASK_FAILED = 'GET_LIST_TASK_FAILED';

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

// TAB
export const GET_LIST_TAB = 'GET_LIST_TAB';
export const GET_LIST_TAB_SUCCESS = 'GET_LIST_TAB_SUCCESS';
export const GET_LIST_TAB_FAILED = 'GET_LIST_TAB_FAILED';

export const CREATE_TAB = 'CREATE_TAB';
export const CREATE_TAB_SUCEESS = 'CREATE_TAB_SUCCESS';
export const CREATE_TAB_FAILED = 'CREATE_TAB_FAILED';

export const UPDATE_TAB = 'UPDATE_TAB';
export const GET_INFO_TAB_TO_UPDATE = 'GET_INFO_TAB_TO_UPDATE';
export const UPDATE_TAB_SUCEESS = 'UPDATE_TAB_SUCCESS';
export const UPDATE_TAB_FAILED = 'UPDATE_TAB_FAILED';

export const DELETE_TAB = 'DELETE_TAB';
export const DELETE_TAB_SUCEESS = 'DELETE_TAB_SUCCESS';
export const DELETE_TAB_FAILED = 'DELETE_TAB_FAILED';

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

export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

//status trả về
export const STATUS_CODE = {
    SUCCESS : 200,
    CREATED : 201,
    UPDATED : 202
}

export const LOCALSTORAGE_SETITEM = 'LOCALSTORAGE_SETITEM';
export const LOCALSTORAGE_CLEAR = 'LOCALSTORAGE_CLEAR';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILED = 'LOGIN_REQUEST_FAILED';
