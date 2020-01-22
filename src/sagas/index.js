import { all } from 'redux-saga/effects';

// import * as taskTypes from '../constants/index';
// import {STATUS_CODE} from '../constants/index'
// import { callAPI } from '../db';
// import { showLoading, hideLoading} from '../actions/ui';
// import {
//     getListTaskSuccess,
//     getListTaskFalse,
//     callAPIForFindTask,
//     addNewTaskSuccess,
//     addNewTaskFailed,
//     editTaskSuccess,
//     editTaslFailed,
//     deleteTaskSuccess,
//     deleteTaskFailed,
//     sortTasksSuccess
// } from '../actions/tasks';

// function getList(body){
//     return callAPI('itemtodos', 'GET', body);
// }

// function postTask(body){
//     const data = {
//         status: 'col-1',
//         title: body.title,
//         description: body.description
//     }
//     return callAPI('itemtodos', 'POST', data)
// }

// function callAPI_editTask(body){
//     const data = {
//         status: 'col-1',
//         ...body.task
//     }
//     return callAPI(`itemtodos/${body.id}`, 'put', data)
// }

// function callAPI_deleteTask(id){
//     return callAPI(`itemtodos/${id}`, 'DELETE');
// }

// function callAPI_sortTask(id, tasks){
//     return callAPI(`itemtodos/${id}`, 'PUT', tasks)
// }

// function* getTask(){
//     while(true){
//         yield take(taskTypes.GET_LIST);
//         const resp = yield call(getList);
//         const {status, data} = resp;
//         if(status === STATUS_CODE.SUCCESS){
//             yield put(getListTaskSuccess(data));
//         }else{
//             yield put(getListTaskFalse(data));
//         }
//     }
// }

// function* callAPIAgain(){
//     while(true){
//         const action = yield take(taskTypes.GET_LIST_AFTER_FIND);
//         const { params } = action.payload;
//         if(Object.keys(params).length){
//             const res = yield call(getList, params);
//             yield put(showLoading());
//             const { status, data } = res
//             res.data.length > 0 && status === STATUS_CODE.SUCCESS ? yield put(getListTaskSuccess(data)) : yield put(getListTaskFalse(data));
//             yield delay(500);
//             yield put(hideLoading());
//         }
//     }
// }

// function* findTask({ payload }){
//     yield delay(500);
//     const { keyWords } = payload;
//     yield put(callAPIForFindTask({q:keyWords}))
// }

// function* addTask({ payload }){
//     const { title, description } = payload;
//     yield put(showLoading());
//     const res = yield call(postTask, {title, description});
//     const { status, data} = res;
//     if(status === STATUS_CODE.CREATED){
//         yield put(addNewTaskSuccess(data));
//     }else{
//         yield put(addNewTaskFailed(data));
//     }
//     yield delay(500);
//     yield put(hideLoading());
// }

// function* actionEditTask({payload}){
//     yield put(showLoading());
//     const res = yield call(callAPI_editTask, payload);
//     const { status, data} = res;
//     if(status === STATUS_CODE.SUCCESS){
//         yield put(editTaskSuccess(data))
//     }
//     else{
//         yield put(editTaslFailed(data))
//     }
//     yield put(hideLoading());
// }

// function* actionDeleteTask({ payload }){
//     const res = yield call(callAPI_deleteTask, payload)
//     if(res.status === STATUS_CODE.SUCCESS){
//         yield put(deleteTaskSuccess(payload))
//     }else{
//         yield put(deleteTaskFailed(res.data))
//     }
// }

// function* actionSaveTaskHadSort({ payload }){
//     let res = []
//     for(let i = 0; i < payload.length; i++){
//         res.push(yield call(callAPI_sortTask, payload[i].id, payload[i]));
//     }

//     if(res[0].status === STATUS_CODE.SUCCESS && res[1].status === STATUS_CODE.SUCCESS){
//         yield put(sortTasksSuccess(res[1].data))
//     }
// }

// function* rootSaga(){
//     yield fork(getTask);
//     yield fork(callAPIAgain)
//     yield takeLatest(taskTypes.FIND_TASK, findTask)
//     yield takeEvery(taskTypes.ADD_NEW_TASK, addTask)
//     yield takeEvery(taskTypes.ACTION_EDIT_TASK, actionEditTask)
//     yield takeEvery(taskTypes.DELETE_TASK, actionDeleteTask)
//     yield takeEvery(taskTypes.SORT_TASK, actionSaveTaskHadSort)
// }

// export default rootSaga;

import taskSaga from './task';

export default function* rootSaga(){
    yield all([
        taskSaga(),
    ])
}