// DEPENDENCIES
// ====================================================
const path = require("path");


// ROUTES
// ====================================================

module.exports = function(app) {
// returns index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// returns notes.html
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// defaults to home if no matching route is found
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

};