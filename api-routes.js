// DEPENDENCIES
// ================================================
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');


// ROUTES
// ================================================
module.exports = function(app) {

// get from notes
app.get("/api/notes", function(req, res) {

    // read the json file
    fs.readFile("./db/db.json", function(err, data) {
        
        if (err) throw (err);
        const parsedJSON = JSON.parse(data)

        // send response with parsed data
        res.send(parsedJSON)
    })
});

// post from api
app.post("/api/notes", function(req, res) {

    // create var for request, notate to id and set it to uuid
    const reqData = req.body; 
    reqData.id = uuidv4()

    // read the json file
    fs.readFile('./db/db.json', function(err, data){

        // re-call var for parsed json
        const parsedJSON = JSON.parse(data)

        // push data w/ id to array
        parsedJSON.push(reqData) 

        // write to the actual json file instead of just the memory
        fs.writeFile("./db/db.json", JSON.stringify(parsedJSON), "utf8", function(err, data) { 
            if (err) throw (err);
        });      
    });

    // send response
    res.send("Let's goooooooo") 
});

// delete current notes from api/json file
app.delete("/api/notes/:id", function(req, res) {

    // console.log(req.params.id);
    // re-read the json file
    fs.readFile('./db/db.json', function(err, data){

        // reinstantiate parsed json
        const parsedJSON = JSON.parse(data)

        // loop through existing data
        for(let i = 0; i < parsedJSON.length; i++) {

            // if the uuid of the current index is the same as the uuid of the button being clicked
            if(parsedJSON[i].id === req.params.id) {

                // remove the current index and adjust the array by one
                parsedJSON.splice([i], 1);
            } 
    }

    // re-write file after splicing
    fs.writeFile("./db/db.json", JSON.stringify(parsedJSON), "utf8", function(err, data) {
        if (err) throw err;   
    });
    });

    // send response
    res.send('BOOMSKI')
});

};