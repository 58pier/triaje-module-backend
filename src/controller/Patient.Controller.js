const Patient = require('../models/Patient');

    const getPatients = async (req, res) => {
        const patients = await Patient.find();
        return res.json({
            message: 'Patients found successfully',
            data: patients
        });
    }

    const createPatient = async (req, res) => {
        const data = {
            dni: req.body.dni,
            names: req.body.names,
            lastNames: req.body.lastNames,
            age: req.body.age,
        }
        try{
            const patientSearch = await Patient.findOne({dni: data.dni});
            if(!patientSearch){
                const patient = new Patient(data);
                await patient.save();
                return res.json({
                    message: 'Patient created successfully',
                    data: patient
                });
            } else{
                return res.status(409).json({message: 'Patient already exists'});
            }
        } catch (error) {
            res.status(500).json({message: 'Error'});
            res.send(error.message);

        }
    };

    const getPatient = async (req, res) => {
        const dni = req.query.dni;
        if(dni){
                const patient = await Patient.findOne({dni: dni});
            if(!patient){
                return res.status(404).json({message: 'Patient not found'});
            } else{
                return res.json({
                    message: 'Patient found successfully',
                    data: patient
                });
            }
        } else{
            return res.status(400).json({message: 'Bad request'});
        }
    }


module.exports = {
    getPatients,
    createPatient,
    getPatient
};