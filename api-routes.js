const dbNotes = require("./db/db.json")

module.exports = function(app) {

// read the `db.json` file and return all saved notes as JSON
app.get("/api/notes", function(req, res) {
    res.json(dbNotes);
});

// receive new note, save on the request body, add to `db.json` file, return new note 
app.post("/api/notes", function(req, res) {
    const uniqueID = Math.floor(Math.random() * 10)
    req.body["id"] = uniqueID; 
    dbNotes.push(req.body);
    res.json(true);
});

// to delete notes, loop through existing notes and select by unique id
app.delete("/api/notes", function(req, res) {
    for(let i = 0; i < dbNotes.length; i++) {
        if(req.params.id === dbNotes[i].id) {
            // used .splice instead of .remove to adjust array size upon object removal
            dbNotes.splice([i],1);
            console.log(dbNotes);
        };

    }
})

};