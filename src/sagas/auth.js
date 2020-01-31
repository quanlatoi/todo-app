import { call, takeEvery, put, all, fork } from 'redux-saga/effects';

import { requestLogin } from './service';
import { LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS } from '../constants';
import { loginRequestSuccess, loginRequestFailed } from '../actions/auth';
import { setLocal } from '../actions/localStorage';
import history from '../history';

function* login({ payload }) {
    const res = yield call(requestLogin, payload);
    const { result, message } = res.data;
    if (message === 'success') {
        yield all([
            put(setLocal('token',result.jwt)),
            put(loginRequestSuccess(result)),
        ])
    } else {
        yield put(loginRequestFailed(message))
    }
}

function* watchLogin() {
    yield takeEvery(LOGIN_REQUEST, login);
}

function loginSuccess() {
    let { from } = history.location.state || { from: { pathname: "/login" } };
    // history.push('/');
    history.replace(from);
    // if (history.location.pathname === '/login') {
        // history.push('/');
    // }
}

function* watchLoginSuccess() {
    yield takeEvery(LOGIN_REQUEST_SUCCESS, loginSuccess)
}


export default function* rootSaga() {
    yield all([
        yield fork(watchLogin),
        yield fork(watchLoginSuccess),
    ])
}
