const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Patient = new Schema({
    dni: { type: Number, required: true, unique: true },
    names: { type: String, required: true },
    lastNames: { type: String, required: true },
    age: { type: Number, required: true },
});

module.exports = mongoose.model('Patient', Patient);