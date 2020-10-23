// DEPENDENCIES
// ====================================================
const express = require("express");
const fs = require("fs");

// PORT
// ====================================================
const PORT = process.env.PORT || 3001;
const app = express();


// DATA PARSING
// ====================================================
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));


// ROUTING
// ====================================================
require("./api-routes")(app);
require("./html-routes")(app);


// LISTENER
// ====================================================
app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT)
});