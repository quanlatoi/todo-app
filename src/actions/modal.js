import * as ModalTypes from '../constants/index';

export const showModal = ()=>({
    type: ModalTypes.SHOW_MODAL
});

export const hideModal = ()=>({
    type: ModalTypes.HIDE_MODAL
});

export const changeTitle = (title)=>({
    type: ModalTypes.CHANGE_MODAL_TITLE,
    payload: {
        title
    }
});

export const changeContent = (component)=>({
    type: ModalTypes.CHANGE_MODAL_CONTENT,
    payload: {
        component
    }
});