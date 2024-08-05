const mongoose = require("mongoose");
const modelName = "tasks"

const schema = new mongoose.Schema ({
    body: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    update_at: {
        type:Date,
        default: Date.now,
    }
});

module.exports = mongoose.model(modelName, schema)