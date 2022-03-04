const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Patient = new Schema({
   name: {
      type: String
   },
   gender: {
      type: String
   },
   age: {
      type: String
   },
   bloodgroup: {
      type: String
   },
   number: {
      type: String
   },
   diease: {
      type: String
   },
   concernDoctor: {
      type: String
   },
   addmissionDate: {
      type: Date
   },
   dischargeDate: {
      type: Date
   },
   address:{
      type:String
   }
}, {
   collection: 'Patient'
})

module.exports = mongoose.model('Patient', Patient)
