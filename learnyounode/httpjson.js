/* INSTRUCTIONS: Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

    {
      "hour": 14,
      "minute": 23,
      "second": 15
    }

Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'. For example:

    { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to your program.
*/

var http = require('http');
var date = new Date();
var url = require('url');
var time_array = [];
var message;

function formatTime(time){
		split_time = time.slice(time.indexOf('T') + 1, time.indexOf('.')).split(':');
		split_time.forEach(function(item){
			time_array.push(parseInt(item));
		});
}


var server = http.createServer(function(request, response){
	console.log(request.url);
	var parsed_url = url.parse(request.url, true);

	response.writeHead(200, { 'Content-Type': 'application/json' });

	if (request.method !== 'GET')
		response.end('Try sending a GET request.');

	if (parsed_url.pathname === '/api/parsetime'){
		formatTime(parsed_url.query.iso);
		hms = JSON.stringify({hour: (time_array[0]-4), minute: time_array[1], second: time_array[2]});
		response.end(hms);
	}

	else if (parsed_url.pathname === '/api/unixtime'){
		unix = new Date(parsed_url.query.iso);
		unix = unix.getTime();
		unix = JSON.stringify({unixtime: parseInt(unix)});
		response.end(unix);
	}


	
});

server.listen(process.argv[2]);

//console.log(date.getTime());

