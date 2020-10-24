// DEPENDENCIES
// ================================================
const fs = require("fs");


// JSON parsing
const jsonParse = JSON.parse(data);


// READ/WRITE FILES
// ================================================

fs.readFile("/db.json", "utf8", function(err, data) {
    if (err) throw (err);
});
        
fs.writeFile("/db.json", JSON.stringify(jsonParse), "utf8", function(err, data) { 
    if (err) throw (err);
});
