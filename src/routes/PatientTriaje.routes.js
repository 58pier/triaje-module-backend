const {Router} = require('express');
const client = require('../dbConnection');

const PatientTriajeController = require('../controller/PatientTriaje.Controller.js');

const PatientsTriajeRoutes = Router();

PatientsTriajeRoutes.get('/triaje', PatientTriajeController.getPatientsTriaje);
// PatientsTriajeRoutes.get('/triaje', PatientTriajeController.getPatientTriaje);
PatientsTriajeRoutes.post('/triaje', PatientTriajeController.createPatientTriaje);

module.exports = PatientsTriajeRoutes;