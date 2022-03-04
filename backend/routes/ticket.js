module.exports = function(app) {
    var Ticket = require('../controllers/ticket');
    // app.route('/')
    // .get(room.listAllRoom)
    app.route('/ticket')
      .get(Ticket.listAllTicket)
      .post(Ticket.createTicket);
    app.route('/ticket/:ticketId')
      .get(Ticket.readTicket)
      .put(Ticket.updateTicket)
      .delete(Ticket.deleteTicket);
};