// DEPENDENCIES
// ================================================
const jsonPath = require("./db/db.json")


// ROUTES
// ================================================

module.exports = function(app) {


app.get("/api/notes", function(req, res) {
    res.json(jsonPath);
    // console.log(jsonPath);
});



app.post("/api/notes", function(req, res) {
    jsonPath.push(req.body);
    // console.log(jsonPath);
    res.json(true);
})


};