const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    position: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { collection: 'Task', timestamps: true})

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task