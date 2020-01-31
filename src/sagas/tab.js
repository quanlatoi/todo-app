import { fork, call, put, all, takeEvery } from 'redux-saga/effects';
import {
    fetchListTab,
    requestCreateTab,
    requestUpdateTab,
    requestDeleteTab
} from './service';
import {
    GET_LIST_TAB,
    CREATE_TAB,
    UPDATE_TAB,
    DELETE_TAB,
} from '../constants';
import {
    getListTabSuccess,
    createTabSuccess,
    updateTabSuccess,
    deleteTabSuccess
} from '../actions/tab'

function* getListTab({token}) {
    const res = yield call(fetchListTab, token);
    const { result, message } = res.data;
    if (message === 'success') {
        yield put(getListTabSuccess(result))
    } else {
        // dispatch action fail
    }
}

function* watchGetListTab() {
    yield takeEvery(GET_LIST_TAB, getListTab)
}

function* createTab({ payload }) {
    console.log(payload)
    const res = yield call(requestCreateTab, payload);
    const { result, message } = res.data;
    if (message === 'success') {
        yield put(createTabSuccess(result))
    } else {
        //dispatch action fail
    }
}

function* watchCreateTab() {
    yield takeEvery(CREATE_TAB ,createTab);
}

function* updateTab({ payload }) {
    const res = yield call(requestUpdateTab, payload);
    const { result, message } = res.data;
    if (message === 'success') {
        yield put(updateTabSuccess(result))
    } else {
        // dispatch action fail
    }
}

function* watchUpdateTab() {
    yield takeEvery(UPDATE_TAB, updateTab);
}

function* deleteTab({ payload }) {
    const res = yield call(requestDeleteTab, payload);
    const { result, message } = res.data;
    if (message === 'success') {
        yield put(deleteTabSuccess(result))
    } else {
        // dispatch action fail
    }
}

function* watchDeleteTab() {
    yield takeEvery(DELETE_TAB, deleteTab);
}

export default function* rootSaga(){
    yield all([
        yield fork(watchGetListTab),
        yield fork(watchCreateTab),
        yield fork(watchUpdateTab),
        yield fork(watchDeleteTab),
    ])
}