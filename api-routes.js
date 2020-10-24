// DEPENDENCIES
// ================================================
const jsonFilePath = require("./db/db.json")


// ROUTES
// ================================================

module.exports = function(app) {

app.get("/api/notes", function(req, res) {
    return res.json(jsonFilePath);
    // console.log(jsonFilePath);
});

app.post("/api/notes", function(req, res) {
    jsonFilePath.push(req.body);
    // console.log(jsonFilePath);
    res.json(true);
})


};