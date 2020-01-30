import { callAPI } from '../utils/callAPI';

// api user

const requestLogin = user => callAPI('authentic/login', 'POST', user);
const requestRegister = user => callAPI('authentic/register', 'POST', user);

// api tab
const fetchListTab = () => callAPI('tabs');
const requestCreateTab = nameTab => callAPI('tabs/create', 'POST', nameTab);
const requestUpdateTab = nameTab => callAPI('tabs/update', 'PUT', nameTab);
const requestDeleteTab = tabId => callAPI('tabs/delete', 'DELETE', tabId);

// api task
const fetchListTasks = tabId => callAPI(`tasks?id=${tabId}`);
const requestCreateTask = tasks => callAPI('tasks/create', 'POST', tasks);
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