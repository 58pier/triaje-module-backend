const {Router} = require('express');

const PatientController = require('../controller/Patient.Controller.js');

const PatientsRoutes = Router();

PatientsRoutes.get('/patients', PatientController.getPatients);
PatientsRoutes.get('/patient', PatientController.getPatient);
PatientsRoutes.post('/patients', PatientController.createPatient);

module.exports = PatientsRoutes;