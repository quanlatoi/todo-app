import {
    GET_LIST_TAB_SUCCESS,
    CREATE_TAB_SUCEESS,
    GET_INFO_TAB_TO_UPDATE,
    UPDATE_TAB_SUCEESS,
    DELETE_TAB_SUCEESS
} from '../constants';

const initialState = {
    listTab: [],
    tabSelection: null,
}

const tabReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_TAB_SUCCESS: {
            return {
                ...state,
                listTab: action.payload.tabs
            }
        }
        case CREATE_TAB_SUCEESS: {
            const newListTab = state.listTab.concat(action.payload)
            return {
                ...state,
                listTab: newListTab
            }
        }
        case GET_INFO_TAB_TO_UPDATE: {
            return {
                ...state,
                tabSelection: action.payload
            }
        }
        case UPDATE_TAB_SUCEESS: {
            const listTab = [...state.listTab];
            const index = listTab.findIndex(elm => elm._id === action.payload._id);
            if (index >= 0) {
                listTab[index] = {...listTab[index], ...action.payload}
            }
            return {
                ...state,
                listTab
            }
        }
        case DELETE_TAB_SUCEESS: {
            const listTab = [...state.listTab];
            const tabDeleted = listTab.findIndex(elm => elm._id === action.payload._id);
            listTab.splice(tabDeleted, 1);
            return {
                ...state,
                listTab
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default tabReducer;