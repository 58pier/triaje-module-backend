const Patient = require('../models/Patient');
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
        if(req.body.patient){
            const patient = await Patient.findOne({dni: req.body.patient.dni});
            if(!patient){
                return res.status(404).json({message: 'Patient not registered'});
            } else{
                const patientSearch = await PatientTriaje.findOne({patient: patient._id});
                if(!patientSearch){
                    data.patient = patient._id;
                    const newPatient = new PatientTriaje(data);
                    await newPatient.save();
                    return res.status(201).json({
                        message: 'Patient added to Triaje successfully',
                        data: newPatient
                    });
                } else{
                    return res.status(409).json({message: 'Patient already exists in Triaje'});
                }
            }
        } else {
            console.log(req.body)
            return res.status(400).json({message: 'Bad request'});
        }
}

const getPatientTriaje = async (req, res) => {
    const dni = parseInt(req.params.dni);
    if(dni){
        const patient = await Patient.findOne({dni: dni })
        if(!patient){
            return res.status(404).json({message: 'Patient not registered'});
        } else{
            console.log(patient);
            const patientTriaje = await PatientTriaje.find({ patient: patient._id }).populate('patient');
            if(!patientTriaje){
                return res.status(404).json({message: 'Patient not found in Triaje'});
            } else{
                return res.json({
                    message: 'Patient found successfully in Triaje',
                    data: patientTriaje
                });
            }
        }
    } else {
        return res.status(400).json({message: 'Bad request'});
    }
}

module.exports = {
    getPatientsTriaje,
    createPatientTriaje,
    getPatientTriaje
}