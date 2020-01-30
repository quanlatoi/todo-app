import { LOCALSTORAGE_SETITEM, LOCALSTORAGE_CLEAR } from '../constants';

export const setLocal = function(key, value) {
    return {
        type: LOCALSTORAGE_SETITEM,
        key, value
    }
}

export const clearLocal = function() {
    return {
        type: LOCALSTORAGE_CLEAR
    }
}



export default { setLocal, clearLocal }