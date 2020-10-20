import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: 'String',
    },
    tabs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tab'
    }]
}, { collection: 'User', timestamps: true})

const Users = mongoose.model('User', UserSchema);

export { Users }
