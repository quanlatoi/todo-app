import { HIDE_NOTIFICATION } from '../constants';

export const showNoti = (isOpen) => {
    return{
        type: HIDE_NOTIFICATION,
        payload: isOpen
    }
}