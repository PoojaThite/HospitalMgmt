var mongoose = require('mongoose'),
Medicine = mongoose.model('Medicine');


exports.listAllMedicine = function(req, res) {
    Medicine.find({}, function(err, Medicine) {
      if (err)
        res.send(err);
      res.json(Medicine);
    });
  };

exports.createMedicine = function(req, res) {
    var medicine = new Medicine(req.body);
    medicine.save(function(err, result) {
      if (err)
        res.send(err);
      res.json(result);
    });
  };

  exports.readMedicine = function(req, res) {
    Medicine.findById(req.params.medicineId, function(err, result) {
      if (err)
        res.send(err);
      res.json(result);
    });
  };

  exports.updateMedicine = function(req, res) {
    Medicine.findOneAndUpdate({_id: req.params.medicineId}, req.body, {new: true}, function(err, result) {
      if (err)
        res.send(err);
      res.json(result);
    });
  };


  exports.deleteMedicine = function(req, res) {
    Medicine.remove({
      _id: req.params.medicineId
    }, function(err, result) {
      if (err)
        res.send(err);
      res.json({ message: 'Medicine successfully deleted' });
    });

};