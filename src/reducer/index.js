import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import getListTasksReducer from './taskReducer';
import uiReducer from './ui';
import modalReducer from './modal';
import tabReducer from './tabReducer';
import authReducer from './auth';
import localStorageReducer from './localStorage';
import failReducer from './ReducerFail';

const rootReducer = combineReducers({
    form: formReducer,
    listTasks : getListTasksReducer,
    ui: uiReducer,
    modal: modalReducer,
    tabReducer,
    authReducer,
    localStorageReducer,
    failReducer
});

export default rootReducer;