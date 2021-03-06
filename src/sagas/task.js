import { fork, call, put, all, takeEvery, select } from 'redux-saga/effects';

import {
    GET_LIST_TASK,
    GET_LIST_TASK_FAILED,
    ADD_NEW_TASK,
    ADD_NEW_TASK_FAILED,
    ACTION_EDIT_TASK,
    EDIT_TASK_FAILED,
    DELETE_TASK,
    SORT_TASK,
    STATUS_CODE
} from '../constants';
import {
    fetchListTasks,
    requestCreateTask,
    requestUpdateTask,
    requestDeleteTask,
    requestSortTask
} from './service';
import { 
    getListTaskSuccess,
    addNewTaskSuccess,
    editTaskSuccess,
    deleteTaskSuccess,
    sortTasksSuccess
} from '../actions/tasks';

function* getListTask({ payload }) {
    const res = yield call(fetchListTasks, payload);
    const { data } = res;
    if (data.message === 'success') {
        yield put(getListTaskSuccess(data.result));
    } else {
        yield put(GET_LIST_TASK_FAILED);
    }
}

function* watchGetListTask() {
    yield takeEvery(GET_LIST_TASK, getListTask);
}

function* createTask({ payload }) {
    payload.position = 1;
    payload.status = 'col-1';
    const res = yield call(requestCreateTask, payload);
    const { result, message } = res.data;
    if (message === 'success') {
        yield put(addNewTaskSuccess(result))
    } else {
        yield put(ADD_NEW_TASK_FAILED)
    }
}

function* watchCreateTask() {
    console.log('create')
    yield takeEvery(ADD_NEW_TASK, createTask);
}

function* updateTask({ payload }) {
    const res = yield call(requestUpdateTask, payload);
    const { result, message } = res.data;
    console.log(result)
    if (message === 'success') {
        yield put(editTaskSuccess(result));
    } else {
        yield put(EDIT_TASK_FAILED);
    }
}

function* watchUpdateTask() {
    yield takeEvery(ACTION_EDIT_TASK, updateTask);
}

function* deleteTask({ payload }){
    const res = yield call(requestDeleteTask, {taskId: payload});
    const { result, message } = res.data;
    if (message === 'success') {
        yield put(deleteTaskSuccess(result))
    } else {
        // show noti
    }
}

function* watchDeleteTask() {
    yield takeEvery(DELETE_TASK, deleteTask)
}

function* sortTask({ payload }) {
    const res = yield call(requestSortTask, payload.update);
    console.log(res)
    if (res.data.result.nModified === payload.update.length) {
        yield put(sortTasksSuccess(payload));
    } 

}

function* watchSortTask() {
    yield takeEvery(SORT_TASK, sortTask);
}

export default function* rootSaga(){
    yield all([
        yield fork(watchGetListTask),
        yield fork(watchCreateTask),
        yield fork(watchUpdateTask),
        yield fork(watchDeleteTask),
        yield fork(watchSortTask),
    ])
}
