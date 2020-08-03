// Dependencie===========
var express = require('express');
var path = require('path');

// Sets up the Express App=======
var app = express();
//set up dynamic port for HEROKU
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing========================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//OBJECT ARRAY TO STORE DATA=========
<<<<<<< HEAD
var reservations = [
  {
    routeName: "yoda",
    name: "Yoda",
  },
];
=======
const reservations = [];
>>>>>>> master

//SETUP ROUTES

//homepage === GET /
<<<<<<< HEAD
app.get("/"),
  (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
  };

//reservations === GET/reservation html then POST


//waitlist === GET/waitlist html

=======
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'home.html'));
});
//reservations === GET/reservation html then POST
app.get('/reserve', function (req, res) {
  res.sendFile(path.join(__dirname, 'resevation.html'));
});

app.post('/reserve', function (req, res) {
  const newReserve = req.body;
  reservations.push(newReserve);
  res.json(reservations);
});
//waitlist === GET/waitlist html
app.get('/tables', function (req, res) {
  res.sendFile(path.join(__dirname, 'waitlist.html'));
});

app.get('/api/tables', function (req, res) {
  res.json(reservations);
});
>>>>>>> master
//Require route file========================

//SETUP LISTENER ON SERVER
// Starts the server to begin listening====================
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});
