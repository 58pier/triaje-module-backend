const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientTriaje = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
    admissionTime: { type: Date, required: true },
    temperature: { type: Number, required: true },
    heartRate: { type: Number, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    imc: { type: Number, required: true },
    speciality: { type: String, required: true },
    description: { type: String},
    state: { type: String, required: true },
});

module.exports = mongoose.model('PatientTriaje', PatientTriaje);
