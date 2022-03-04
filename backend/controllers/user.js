var mongoose = require('mongoose'),
User = mongoose.model('User');
const bcrypt = require("bcrypt");   // encription for password
const jwt = require("jsonwebtoken");


exports.listAllUsers = function(req, res) {
  User.find({}, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};
  
exports.createUser =function(req, res, next) {
  bcrypt.hash(req.body.password, 10).then(hash => {  // password ecrypted
    const user = new User({
      name:req.body.name,
      email: req.body.email,
      type: req.body.type,
      password: hash
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
};

exports.SearchUser = function(req, res, next) {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }

    
      const token = jwt.sign(   // creating new token
        { email: fetchedUser.email, type : fetchedUser.type, userId:fetchedUser._id},
        "secret_this_should_be_longer",
        { expiresIn: "1h" },

      
      );
      // console.log(req.UserData);
      res.status(200).json({
        token: token,
        expiresIn: 3600,   //   token expired information
        type:fetchedUser.type,
        userId:fetchedUser._id

      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Auth failed"
      });
    });
};


