//http collect

//INSTRUCTIONS: Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).
//The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.

//So, in order to get all of the data received by the server, you can use concatStream

//requirements
var http = require('http');
var concat = require('concat-stream');

//variables
var url = process.argv[2];
var results = '';



http.get(url, function(response){
	response.on("error", function(err){
		return callback(err);
	});
	response.pipe(concat(function(data){
		data.toString();
		console.log(data.length);
		console.log(data.toString());
	}));
});

