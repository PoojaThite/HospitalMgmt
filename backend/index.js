const createError = require('http-errors');
var express = require('express'),
   app = express(),
   port = process.env.PORT || 3000,
   mongoose = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser'),
   Patient = require('./models/patient');
   Medicine = require('./models/medicine');
   User = require('./models/user');
   Room = require('./models/room');
   Appointment = require('./models/appointment')
   Ticket = require('./models/ticket');
// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/HospitalData',  { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

// Setting up configurations
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Setting up the routes
var patientRoute = require('./routes/patient');
var medicineRoute = require('./routes/medicine'); //importing route
const userRoutes = require("./routes/user");
const roomRoutes = require("./routes/room");
const appointmentRotes = require("./routes/appointment");
const ticketRoutes = require("./routes/ticket");
 //importing route
patientRoute(app); //register the route
medicineRoute(app);
userRoutes(app);
roomRoutes(app);
appointmentRotes(app);
ticketRoutes(app);
app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
   next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});