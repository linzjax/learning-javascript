//http.get(url, callback(response))
//response is a Node Streams (or events). They can be data, err, and end.
//you call the results with: response.on("data", function(data){//things//});
//you can also response.setEndcoding('utf8') to set the response to a string rather than a Node buffer

//INSTRUCTIONS: Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of each "data" event from the response to a new line on the console (stdout).

var http = require('http');
var url = process.argv[2];


http.get(url, function(response){
	response.setEncoding('utf8');
	response.on('error', console.log(err));
	response.on("data", console.log);
});
