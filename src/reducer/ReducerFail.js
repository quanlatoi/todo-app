import {
    LOGIN_REQUEST_FAILED,
    HIDE_NOTIFICATION,
} from '../constants';

const initialState = {
    messages: '',
    isOpen: false
}

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case HIDE_NOTIFICATION:{
            return {
                ...state,
                isOpen: action.payload,
            }
        }
        case LOGIN_REQUEST_FAILED:{
            console.log(action)
            return {
                messages: action.error,
                isOpen: true
            }
        }
        default:
            return {...state};
    }
}

export default authReducer;
