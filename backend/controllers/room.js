var mongoose = require('mongoose'),
Room = mongoose.model('Room');


exports.listAllRoom = function(req, res) {
    Room.find({}, function(err, Room) {
      if (err)
        res.send(err);
      res.json(Room);
    });
  };

exports.createRoom = function(req, res) {
    var room = new Room(req.body);
    room.save(function(err, result) {
      if (err)
        res.send(err);
      res.json(result);
    });
  };

  exports.readRoom = function(req, res) {
    Room.findById(req.params.roomId, function(err, result) {
      if (err)
        res.send(err);
      res.json(result);
    });
  };

  exports.updateRoom = function(req, res) {
    Room.findOneAndUpdate({_id: req.params.roomId}, req.body, {new: true}, function(err, result) {
      if (err)
        res.send(err);
      res.json(result);
    });
  };


  exports.deleteRoom = function(req, res) {
    Room.remove({
      _id: req.params.roomId
    }, function(err, result) {
      if (err)
        res.send(err);
      res.json({ message: 'Room successfully deleted' });
    });

};