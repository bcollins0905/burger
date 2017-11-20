// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;




// var express = require("express");
// var bodyParser = require("body-parser");

// var app = express();
// var port = 3000;

// // Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "burger_db"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);
// });

// module.exports = connection

// // Use Handlebars to render the main index.html page with the burgers in it.
// app.get("/", function(req, res) {
//   connection.query("SELECT * FROM burgers;", function(err, data) {
//     if (err) {
//       return res.status(500).end();
//     }

//     res.render("index", { burgers: data });

//   });
// });


// // Create a new burger
// app.post("/add", function(req, res) {
//   connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burgers], function(err, result) {
//     //or body.burger
//     if (err) {
//       return res.status(500).end();
//     }

//     // Send back the ID of the new burger
//     res.json({ id: result.insertId });
//     console.log({ id: result.insertId });
//   });
// });


// // Retrieve all burgers
// app.get("/all_burgers", function(req, res) {
//   connection.query("SELECT * FROM burgers;", function(err, data) {
//     if (err) {
//       return res.status(500).end();
//     }

//     res.json(data);
//   });
// });

// // Update a burger / Devour
// app.put("/burgers/:id", function(req, res) {
//   connection.query("UPDATE burgers SET burger = ? WHERE id = ?", [
//     req.body.burgers, req.params.id
//     //might be burger
//   ], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server faliure
//       return res.status(500).end();
//     } else if (result.changedRows == 0) {
//       console.log('not found!!')
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


// // Devour a burger
// app.delete("/burgers/:id", function(req, res) {
//   connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server faliure
//       return res.status(500).end();
//     } else if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


// app.listen(port, function() {
//   console.log("listening on port", port);
// });

// module.exports = connection
// //if issues there might be something wrong with how this file path is written
// //try "./connection.js"
