var mongoose = require('mongoose'),
Ticket = mongoose.model('Ticket');



exports.listAllTicket = function(req, res) {
    Ticket.find({}, function(err, Ticket) {
      if (err)
        res.send(err);
      res.json(Ticket);
    });
  };


  exports.createTicket = function(req, res) {
    var ticket = new Ticket(req.body);
    ticket.save(function(err, result) {
      if (err)
        res.send(err);
      res.json(result);
    });
  };


  
  exports.readTicket = function(req, res) {
    Ticket.findById(req.params.ticketId, function(err, result) {
      if (err)
        res.send(err);
      res.json(result);
    });
  };

  exports.updateTicket = function(req, res) {
    Ticket.findOneAndUpdate({_id: req.params.ticketId}, req.body, {new: true}, function(err, result) {
      if (err)
        res.send(err);
      res.json(result);
    });
  };


  exports.deleteTicket = function(req, res) {
    Ticket.remove({
      _id: req.params.ticketId
    }, function(err, result) {
      if (err)
        res.send(err);
      res.json({ message: 'Ticket successfully deleted' });
    });

}