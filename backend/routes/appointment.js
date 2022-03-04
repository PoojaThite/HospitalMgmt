module.exports = function(app) {
    var appointment = require('../controllers/appointment');
    app.route('/appointments')
    .get(appointment.listAllAppointment)
    .post(appointment.createAppointment);
  app.route('/appointments/:AppointmentId')
    .get(appointment.readAppointment)
    .put(appointment.updateAppointment)
    .delete(appointment.deleteAppointment);

};