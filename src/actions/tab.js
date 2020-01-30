import {
    GET_LIST_TAB,
    GET_LIST_TAB_SUCCESS,
    CREATE_TAB,
    CREATE_TAB_SUCEESS,
    UPDATE_TAB,
    GET_INFO_TAB_TO_UPDATE,
    UPDATE_TAB_SUCEESS,
    DELETE_TAB,
    DELETE_TAB_SUCEESS
} from '../constants';

const getListTab = () => {
    return { type: GET_LIST_TAB }
}

const getListTabSuccess = payload => ({
    type: GET_LIST_TAB_SUCCESS,
    payload,
})

const createTab = (nameTab, idAuthor) => ({
    type: CREATE_TAB,
    payload: {
        nameTab,
        idAuthor
    }
})

const createTabSuccess = data => ({
    type: CREATE_TAB_SUCEESS,
    payload: data
})

const updateTab = tab => ({
    type: UPDATE_TAB,
    payload: tab
})

const getInfoToUpdateTab = tab => ({
    type: GET_INFO_TAB_TO_UPDATE,
    payload: tab,
})

const updateTabSuccess = data => ({
    type: UPDATE_TAB_SUCEESS,
    payload: data
})

const deleteTab = id => ({
    type: DELETE_TAB,
    payload: {tabId: id}
})

const deleteTabSuccess = data => ({
    type: DELETE_TAB_SUCEESS,
    payload: data
})

export {
    getListTab,
    getListTabSuccess,
    createTab,
    createTabSuccess,
    updateTab,
    getInfoToUpdateTab,
    updateTabSuccess,
    deleteTab,
    deleteTabSuccess,
}
