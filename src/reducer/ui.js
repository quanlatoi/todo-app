import * as types from '../constants/index';

const initialState = {showLoading: false};

const ui = (state = initialState, action)=>{
    switch(action.type){
        case types.SHOW_LOADING:
            return {
                ...state,
                showLoading: true
            }
        case types.HIDE_LOADING:
            return {
                ...state,
                showLoading: false
            }
        default:
            return state;
    }
}

export default ui;