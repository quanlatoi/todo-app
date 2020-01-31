import { callAPI } from '../utils/callAPI';

// api user

const requestLogin = user => callAPI('authentic/login', '', 'POST', user);
const requestRegister = user => callAPI('authentic/register', '', 'POST', user);

// api tab
const fetchListTab = (token) => callAPI('tabs', token);
const requestCreateTab = (nameTab, token) => callAPI('tabs/create', token, 'POST', nameTab);
const requestUpdateTab = (nameTab, token) => callAPI('tabs/update', token, 'PUT', nameTab);
const requestDeleteTab = (tabId, token) => callAPI('tabs/delete', token, 'DELETE', tabId);

// api task
const fetchListTasks = tabId => callAPI(`tasks?id=${tabId}`);
const requestCreateTask = (tasks, token) => callAPI('tasks/create', token,'POST', tasks);
const requestUpdateTask = tasks => callAPI('tasks/update', 'PUT', tasks);
const requestDeleteTask = taskId => callAPI('tasks/delete', 'DELETE', taskId);

export {
    requestLogin,
    requestRegister,
    fetchListTab,
    requestCreateTab,
    requestUpdateTab,
    requestDeleteTab,
    fetchListTasks,
    requestCreateTask,
    requestUpdateTask,
    requestDeleteTask,
}