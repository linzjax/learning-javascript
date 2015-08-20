/* INSTRUCTIONS: Write an HTTP server that serves the same text file for each request it receives.

Your server should listen on the port provided by the first argument to your program.

You will be provided with the location of the file to serve as the second command-line argument. You must use the fs.createReadStream() method to stream the file contents to the response. */

//http.createServer() also creates a server, but it can talk to http
//http.createServer(url, function callback(request, response){}) <- will call the callback for each connection
//request and response are both streams;
//still must call server.listen(port#);

var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var concat = require('concat-stream');

var server = http.createServer(function callback(request, response){
	src = fs.createReadStream(process.argv[3]);
	src.on("error", console.error);
	src.pipe(concat(function(data){
		message = data.toString();
		response.end(message);
		//message = 
		//response.write(message);
	}));
});//end createServer

server.listen(port);