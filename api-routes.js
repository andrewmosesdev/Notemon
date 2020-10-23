const fs = require("fs");
module.exports = function(app) {

// read the `db.json` file and return all saved notes as JSON
app.get("/api/notes", function(req, res) {
    fs.readFile("./db/db.json", "utf8", function(err, data) {
        if (err) throw (err);
        const notesVar = JSON.parse(data);
        return res.json(notesVar);
    })
    
});

// receive new note, save on the request body, add to `db.json` file, return new note 
app.post("/api/notes", function(req, res) {
    const addNote = req.body;
    // gives every new note a unique id
    const uniqueID = Math.floor(Math.random() * Math.exp(10000))
    req.body["id"] = uniqueID; 

    fs.readFile("./db/db.json", "utf8", function(err, data) {
        if (err) throw (err);
        const currentNotes = JSON.parse(data);
        currentNotes.push(addNote);
        fs.writeFile("./db/db.json", JSON.stringify(currentNotes), "utf8", function(err, data) {
            if (err) throw (err);
            console.log(currentNotes + " added!")
        });
    });
    res.json(addNote);
});

// to delete notes, loop through existing notes and select by unique id
app.delete("/api/notes", function(req, res) {
    for(let i = 0; i < currentNotes.length; i++) {
        if(req.params.id === currentNotes[i].id) {
            // used .splice instead of .remove to adjust array size upon object removal
            currentNotes.splice([i],1);
            console.log(dbNotes);
        };
        
    }
})

};