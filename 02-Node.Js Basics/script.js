// 1-File System
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

// 2-Http 
// Create a Local Server
const http = require('http');
const server = http.createServer(function(req, res){
    res.end("Hello World");
})
server.listen(3000);

// 3-Https
const https = require('https')
const fs = require('fs')

// SSL options
const options = {
    key : fs.readFileSync('key.pem'),
    cert : fs.readFileSync('cert.pem')
}