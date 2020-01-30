import { LOGIN_REQUEST_SUCCESS } from '../constants';

const initialState = {
    token: null,
}

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST_SUCCESS:{
            return {
                ...state,
                token: action.payload
            }
        }
        default:
            return {...state};
    }
}

export default authReducer;