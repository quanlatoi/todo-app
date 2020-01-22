const mongoose = require('mongoose')

const TabSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    task: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
}, { collection: 'Tab', timestamps: true})

const Tab = mongoose.model('Tab', TabSchema);

module.exports = Tab