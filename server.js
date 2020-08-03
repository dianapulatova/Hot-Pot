// Dependencie===========
var express = require("express");
var path = require("path");

// Sets up the Express App=======
var app = express();
//set up dynamic port for HEROKU
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing========================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//OBJECT ARRAY TO STORE DATA=========
var reservations = [
  {
    routeName: "yoda",
    name: "Yoda",
  },
];

//SETUP ROUTES

//homepage === GET /
app.get("/"),
  (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
  };

//reservations === GET/reservation html then POST


//waitlist === GET/waitlist html

//Require route file========================

//SETUP LISTENER ON SERVER
// Starts the server to begin listening====================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
