const { taskModel, userModel, TabModel } = require('../../Models')

async function createTab(req, res) {
    const { _id } = res.local
    try {
        const newTab = new TabModel({
            author: _id
        })
        const data = await newTab.save()
        const user = await userModel.findOneAndUpdate({ _id }, { tabs: data._id });
        console.log(user)
        return res.json({
            result: {
                data
            },
            message: 'success'
        })
    } catch(err) {
        console.log('ERRORS \n', err)
        return res.status(500).json({
            message: 'errors'
        }) 
    }
}

async function getListTasks(req, res) {
    try {
        const { _id } = req.body
        const data = await TabModel.findOne({ _id }).populate('tasks')
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
        const { status, title, description, position, tabId } = req.body
        const newTask = new taskModel({
            status,
            title,
            description,
            position,
            tab: tabId
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
    createTab,
    getListTasks,
    createTask
}