const fs = require('node:fs');

// Write
fs.writeFile("index.txt", 'Hello! How are you? ', function(err){
    if(err) console.error(err);
    else console.log("done")
})

// Append
fs.appendFile("index.txt", 'I am fine!', function(err){
    if(err) console.error(err);
    else console.log("done")
})

// Rename
fs.rename("index.txt", 'hello.txt', function(err){
    if(err) console.error(err);
    else console.log("done")
})

// Copy File
fs.copyFile("hello.txt" , "./copy/copy.txt", function(err){
    if(err) console.error(err);
    else console.log('Done')
})