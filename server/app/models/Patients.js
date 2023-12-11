const { Schema, model } = require("mongoose");

// Схема для пользователя в mongodb
const PatientsSchema = new Schema({
    diagnostic: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

module.exports = model("Patients", PatientsSchema);
