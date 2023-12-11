const { Schema, model } = require("mongoose");

// Схема для пользователя в mongodb
const userSchema = new Schema({
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = model("User", userSchema);
