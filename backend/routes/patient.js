module.exports = function(app) {
    var patient = require('../controllers/patient');
    app.route('/')
      .get(patient.listAllPatient)
    app.route('/patient')
      .get(patient.listAllPatient)
      .post(patient.createPatient);
    app.route('/patient/:patientId')
      .get(patient.readPatient)
      .put(patient.updatePatient)
      .delete(patient.deletePatient);
};