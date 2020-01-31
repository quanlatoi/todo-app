import { LOCALSTORAGE_SETITEM, LOCALSTORAGE_CLEAR } from '../constants';

let token;
try {
    token = JSON.parse(localStorage.getItem('token') || null)
}
catch(e) {
    token = localStorage.getItem('token')
    localStorage.setItem('token', token)
}

const initialState = {
    token: localStorage.getItem('token') || null,
}

export default function(state = initialState, action) {
    if (action.type === LOCALSTORAGE_SETITEM) {
        localStorage.setItem(action.key, action.value)
        return {...state, [action.key]: action.value }
    }
    else if (action.type === LOCALSTORAGE_CLEAR) {
        localStorage.clear()
        return { jwt: null }
    }
    else {
        return state
    }
}