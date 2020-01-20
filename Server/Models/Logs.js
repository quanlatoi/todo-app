const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema(
    {
        time: {
            type: String,
            index: true,
            required: true
        },
        path: {
            type: String,
            required: true
        },
        info: {
            type: Object,
            required: true
        },
        oldStatus: {
            type: Object
        },
        newStatus: {
            type: Object
        },
        by: {
            type: String
        }
    },
    {
        collection: "Logs",
        timestamps: true
    }

);
module.exports = mongoose.model("Log", LogSchema);
