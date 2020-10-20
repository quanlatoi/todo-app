import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true
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
    tab: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tab'
    }
}, { collection: 'Task', timestamps: true})

const Task = mongoose.model('Task', TaskSchema);

export { Task }