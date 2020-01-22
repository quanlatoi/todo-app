const { userModel, tabModel } = require('../../Models')

async function getListTab(req, res) {
    try {
        const { _id } = res.local
        const listTab = await userModel.findOne({ _id }).populate('tabs').select('-password')
        return res.json({
            result: listTab,
            message: 'success'
        })
    } catch(err) {
        console.log('ERRORS \n', err)
        return res.status(500).json({
            message: 'errors'
        })
    }
}

async function createTab(req, res) {
    const { _id } = res.local
    try {
        const user = await userModel.findOne({ _id })
        const { nameTab } = req.body
        const newTab = new tabModel({
            name: nameTab,
            author: _id,
            tasks: []
        })
        const data = await newTab.save()
        user.tabs.push(data._id)
        await user.save()
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

async function updateTab(req, res) {
    try {
        const { name, tabId } = req.body
        const update = {
            name
        }
        const newTab = await tabModel.findByIdAndUpdate({ _id: tabId }, update)
        console.log(newTab)
        return res.json({
            result: newTab,
            message: 'success'
        })
    } catch(err) {
        console.log('ERRORS \n', err)
        return res.status(500).json({
            message: 'errors'
        }) 
    }
}

async function deleteTab(req, res) {
    try {
        const { tabId } = req.body
        const tabDeleted = await tabModel.findOneAndDelete({ _id: tabId })
        return res.json({
            result: tabDeleted,
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
    getListTab,
    createTab,
    updateTab,
    deleteTab
}