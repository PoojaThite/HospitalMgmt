module.exports = function(app) {
    var user = require('../controllers/user');
    app.route('/signup')
      .post(user.createUser)
      .get(user.listAllUsers);

      app.route('/login')
      .post(user.SearchUser);
};