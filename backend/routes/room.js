module.exports = function(app) {
    var room = require('../controllers/room');
    // app.route('/')
    // .get(room.listAllRoom)
    app.route('/room')
      .get(room.listAllRoom)
      .post(room.createRoom);
    app.route('/room/:roomId')
      .get(room.readRoom)
      .put(room.updateRoom)
      .delete(room.deleteRoom);
};