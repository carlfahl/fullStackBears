// console log a test message

// Use the express framework for server

var express = require('express');
// var http = require('http');

// http.createServer(function (req, res) {
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.end("Hello World");
// }).listen(3000);

var app = express();

app.listen(3000, function () {
  console.log("The server is running on port 3000.");
});

// console.log('Server is up and running on port 3000');
