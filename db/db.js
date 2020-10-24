// DEPENDENCIES
// ================================================
const { response } = require("express");
const fs = require("fs");

// ===============================================
// Try crypto approach to generate unique ID's:
// const crypto = require('crypto');

// const secret = 'abcdefg';
// const hash = crypto.createHmac('sha256', secret)
//                    .update('I love cupcakes')
//                    .digest('hex');
// console.log(hash);
// -----------------------------------------------
// Or try UUID (Anthony recommends this one; it's simpler)
// const { v4: uuidv4 } = require('uuid');
// uuidv4();
// ================================================

// JSON parsing
const jsonParse = JSON.parse(data);


// READ/WRITE FILES
// ================================================

fs.readFile("/db.json", "utf8", function(err, data) {
    if (err) throw (err);
    return response.json(jsonParse)
});
        
fs.writeFile("/db.json", JSON.stringify(jsonParse), "utf8", function(err, data) { 
    if (err) throw (err);
    console.log("It worked!")
});
