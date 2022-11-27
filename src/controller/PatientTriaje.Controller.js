const PatientTriaje = require('../models/PatientTriaje');

const getPatientsTriaje = async (req, res) => {
    const patients = await PatientTriaje.find().populate('patient');
        return res.json({
            message: 'Patients found successfully',
            data: patients
        });
}

const createPatientTriaje = async (req, res) => {
    const data = {
        patient: req.body.patient,
        admissionTime: req.body.admissionTime,
        temperature: req.body.temperature,
        heartRate: req.body.heartRate,
        weight: req.body.weight,
        height: req.body.height,
        imc: req.body.imc,
        speciality: req.body.speciality,
        description: req.body.description,
        state: req.body.state,
    }
    try{
        const patientSearch = await PatientTriaje.findOne({patient: data.patient});
        if(!patientSearch){
            const patient = new PatientTriaje(data);
            await patient.save();
            return res.json({
                message: 'Patient added to Triaje successfully',
                data: patient
            });
        } else{
            return res.status(409).json({message: 'Patient already exists in Triaje'});
        }
    } catch (error) {
        res.status(500).json({message: error});
        res.send(error);
    }
}

module.exports = {
    getPatientsTriaje,
    createPatientTriaje
}