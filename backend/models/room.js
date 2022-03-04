const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Room = new Schema({
    RoomType:{
        type:String
    },
    TotalRoom:{
        type:Number
    },
    AvailableRoom:{
        type:Number
    }
},
{
    collection:'Room'
})

module.exports = mongoose.model('Room', Room)
