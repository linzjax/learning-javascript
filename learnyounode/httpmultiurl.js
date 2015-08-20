//INSTRUCTIONS: This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.

//You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments


var http = require('http');
var concat = require('concat-stream');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var results = [];
var count = 0;

function printResults(){
	for (i = 0; i < 3; i++){
		console.log(results[i]);
	}
}

function getResults(index) {
	http.get(urls[index], function(response){
		response.on("error", console.error);
		response.pipe(concat("data", function(data){
			results[index] = data.toString();
			count++;

			if (count === 3)
				printResults();
		}));//end pipe
	});//end get
}//end function

for (i = 0; i < 3; i++){
	getResults(i);
}