var mongoose = require('mongoose'),
    Appointment = mongoose.model('Appointment');


exports.listAllAppointment = function (req, res) {
    Appointment.find({}, function (err, Appointment) {
        if (err)
            res.send(err);
        res.json(Appointment);
    });
};


exports.createAppointment = function(req, res) {
    var appointment = new Appointment(req.body);
    appointment.save(function(err, result) {
      if (err)
        res.send(err);
      res.json(result);
    });
  };


  exports.readAppointment = function(req, res) {
    Appointment.findById(req.params.AppointmentId, function(err, result) {
      if (err)
        res.send(err);
      res.json(result);
    });
  };

  exports.updateAppointment= function(req, res) {
    Appointment.findOneAndUpdate({_id: req.params.AppointmentId}, req.body, {new: true}, function(err, result) {
      if (err)
        res.send(err);
      res.json(result);
    });
  };


  exports.deleteAppointment = function(req, res) {
    Appointment.remove({
      _id: req.params.AppointmentId
    }, function(err, result) {
      if (err)
        res.send(err);
      res.json({ message: 'Appointment successfully deleted' });
    });

}