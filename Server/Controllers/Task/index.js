const { taskModel, tabModel } = require('../../Models')

async function getListTasks(req, res) {
    try {
        const { id } = req.query
        const data = await tabModel.findOne({ _id: id }).populate('task').select('task')
        res.json({
            result: data,
            message: 'success'
        })
    } catch(err) {
        console.log('ERRORS \n', err)
        return res.status(500).json({
            message: 'errors'
        })
    }
}

async function createTask(req, res) {
    try {
        const { status, title, description, position, tabId } = req.body
        const tab = await tabModel.findOne({ _id: tabId })
        if (!tab) {
            return res.status(400).json({
                messge: 'tab is not exist'
            })
        }
        const newTask = new taskModel({
            status,
            title,
            description,
            position,
            tab: tabId
        })
        const task = await newTask.save()
        tab.task.push(task.id)
        await tab.save()
        return res.json({
            result: task ,
            message: 'success'
        })
    } catch(err) {
        console.log('ERRORS \n', err)
        return res.status(500).json({
            message: 'errors'
        })
    }
}

async function updateTask(req, res) {
    try {
        const { status, title, description, position, taskId } = req.body
        const update = {
            status,
            title,
            description,
            position
        }
        const newTask = await taskModel.findByIdAndUpdate(
            {_id: taskId},
            update
        )
        return res.json({
            result: newTask,
            message: 'success'
        })
    } catch(err) {
        console.log('ERRORS \n', err)
        return res.status(500).json({
            message: 'errors'
        })
    }
}

async function deleteTask(req, res) {
    try {
        const { taskId } = req.body
        const taskDeleted = await taskModel.findByIdAndDelete(
            {_id: taskId}
        )
        return res.json({
            result: taskDeleted,
            message: 'success'
        })
    } catch(err) {
        console.log('ERRORS \n', err)
        return res.status(500).json({
            message: 'errors'
        })
    }
}

module.exports = {
    getListTasks,
    createTask,
    updateTask,
    deleteTask
}