import { LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAILED } from '../constants';

function loginRequest(user) {
    return {
        type: LOGIN_REQUEST,
        payload: user
    }
}

function loginRequestSuccess(user) {
    return {
        type: LOGIN_REQUEST_SUCCESS,
        payload: user
    }
}

function loginRequestFailed(error) {
    return {
        type: LOGIN_REQUEST_FAILED,
        error
    }
}

export {
    loginRequest,
    loginRequestSuccess,
    loginRequestFailed,
}
