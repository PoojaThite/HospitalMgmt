const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Appointment = new Schema({
    appointmentDate:{
        type:Date
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    UId:{
        type:String
    }
},
{
    collection:'Appointment'
})

module.exports = mongoose.model('Appointment', Appointment)
