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
const reservations = [];
const waitlist = [];

//SETUP ROUTES
//homepage === GET /
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'home.html'));
});
//reservations === GET/reservation html then POST
app.get('/reserve', function (req, res) {
  res.sendFile(path.join(__dirname, 'make-res.html'));
});

app.post('/api/reserve', function (req, res) {
  console.log(req.body);
  const newReserve = req.body;
  if (reservations.length < 3) {
    reservations.push(newReserve);
    res.json(reservations);
  } else {
    waitlist.push(newReserve);
    res.json(waitlist);
  }
});
//waitlist === GET/waitlist html
app.get('/tables', function (req, res) {
  res.sendFile(path.join(__dirname, 'view-tables.html'));
});

app.get('/api/tables', function (req, res) {
  res.json(reservations);
});

app.get('/api/waitlist', function (req, res) {
  res.json(waitlist);
});
//Require route file========================

//SETUP LISTENER ON SERVER
// Starts the server to begin listening====================
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});
