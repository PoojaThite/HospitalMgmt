const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Ticket = new Schema({
    date:{
        type:Date
    },
    name:{
        type:String
    },
    problem:{
        type:String
    }
},
{
    collection:'Ticket'
})

module.exports = mongoose.model('Ticket', Ticket)
