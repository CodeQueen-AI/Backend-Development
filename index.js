const fs = require('node:fs');

fs.writeFile("index.txt", 'Hello! How are you? ', function(err){
    if(err) console.error(err);
    else console.log("done")
})