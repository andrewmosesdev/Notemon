const path = require("path");
const fs = require("fs");
const express = require("express");

// PORT
// ====================================================
const PORT = process.env.PORT || 3001;
const app = express();


// ROUTES
// ====================================================
app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res) {
    res.json(path.join(__dirname, "public/notes.html"));
});


// LISTENER
// ====================================================
app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT)
});