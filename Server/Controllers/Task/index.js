const { taskModel, userModel } = require('../../Models')

async function getListTasks(req, res) {
    try {
        const { _id } = res.local
        const data = await userModel.findOne({ _id }).populate('tasks')
        res.json({
            data
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
        const { _id } = res.local
        const { status, title, description, position } = req.body
        const newTask = new taskModel({
            status,
            title,
            description,
            position,
            author: _id
        })
        const task = await newTask.save()
        return res.json({
            result: [{ task }],
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
    createTask
}