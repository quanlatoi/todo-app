import { fork, call, put, all, takeEvery } from 'redux-saga/effects';

import {
    GET_LIST_TASK,
    GET_LIST_TASK_SUCCESS,
    GET_LIST_TASK_FAILED
} from '../constants';
import { fetchListTasks } from './service';
import { 
    getListTaskSuccess,
} from '../actions/tasks';

function* getListTask(payload) {
    // const { id } = payload;
    const id = '5e27bc4d1855c004f02eb296'
    const res = yield call(fetchListTasks, id);
    const { data } = res
    if (data.message === 'success') {
        // yield put(GET_LIST_TASK_SUCCESS, getListTaskSuccess(data.result));
        yield put(getListTaskSuccess(data.result));
    } else {
        yield put(GET_LIST_TASK_FAILED);
    }
}

function* watchGetListTask(){
    yield takeEvery(GET_LIST_TASK, getListTask);
}

export default function* rootSaga(){
    yield all([
        yield fork(watchGetListTask),
    ])
}
