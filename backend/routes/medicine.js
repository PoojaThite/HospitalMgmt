module.exports = function(app) {
    var medicine = require('../controllers/medicine');
    // app.route('/')
    // .get(medicine.listAllMedicine)
    app.route('/medicine')
      .get(medicine.listAllMedicine)
      .post(medicine.createMedicine);
    app.route('/medicine/:medicineId')
      .get(medicine.readMedicine)
      .put(medicine.updateMedicine)
      .delete(medicine.deleteMedicine);
};