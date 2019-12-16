import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import getListTasksReducer from './taskReducer'
import uiReducer from './ui';
import modalReducer from './modal';

const rootReducer = combineReducers({
    form: formReducer,
    listTasks : getListTasksReducer,
    ui: uiReducer,
    modal: modalReducer,
});

export default rootReducer;