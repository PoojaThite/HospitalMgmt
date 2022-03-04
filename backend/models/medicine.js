const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Medicine = new Schema({
    medicineName:{
        type:String
    },
    quantity:{
        type:String
    },
    price:{
        type:String
    }
},
{
    collection:'Medicine'
})

module.exports = mongoose.model('Medicine', Medicine)
