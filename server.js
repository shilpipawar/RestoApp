// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 7000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservation (DATA)
// =============================================================
var counterID = 1;
function Customer(name,email,phone,uniqueid){
  this.Name = name,
  this.Email = email,
  this.Phone = phone,
  this.UniqueId = parseInt(counterID),
  this.printObj = function(){
console.log("Name: " + this.Name
+ " Email: " + this.Email
+ " Phone: " + this.Phone,
+ " Unique Id:" + this.UniqueId)
  }
};
// var customer1 = new Customer("John","j@gmail.com","5555555656", 1);
// customer1.printObj();
var reservations = [5];

var waitList = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all characters
app.get("/reservation", function(req, res) {
 // return res.json(characters);
 res.sendFile(path.join(__dirname, "reservation.html"));
});

// Displays a single character, or returns false
app.get("/api/reservations/:reservation", function(req, res) {
  var chosen = req.params.reservation;

  console.log(chosen);

  for (var i = 0; i < reservations.length; i++) {
    if (chosen === reservations[i].routeName) {
      return res.json(reservations[i]);
    }
  }
  
  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/reservations", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  if (reservations.length > 4) {
    waitList.push(newReservation);
    console.log(waitList);
  } else {
    reservations.push(newReservation);
    console.log(reservations);
  }
  
  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
