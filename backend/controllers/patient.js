var mongoose = require('mongoose'),
  Patient = mongoose.model('Patient');
exports.listAllPatient = function(req, res) {
  Patient.find({}, function(err, Patient) {
    if (err)
      res.send(err);
    res.json(Patient);
  });
};
exports.createPatient = function(req, res) {
  var emp = new Patient(req.body);
  emp.save(function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.readPatient = function(req, res) {
  Patient.findById(req.params.patientId, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.updatePatient = function(req, res) {
  Patient.findOneAndUpdate({_id: req.params.patientId}, req.body, {new: true}, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.deletePatient = function(req, res) {
  Patient.remove({
    _id: req.params.patientId
  }, function(err, result) {
    if (err)
      res.send(err);
    res.json({ message: 'patient successfully deleted' });
  });
};