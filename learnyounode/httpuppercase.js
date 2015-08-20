/* INSTRUCTIONS: Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and returns it to the client.

Your server should listen on the port provided by the first argument to your program.

*/
//through2-map allows you to transform a stream without .createReadStream. 
/* inStream.pip(map(function(chunk){ return **whateveryouwanttoreturn** })).pipe(outStream);

DON'T FORGET TO RETURN THE DATA so that the outStream actually contains something.
*/

var http = require('http');
var map = require('through2-map');
var port = process.argv[2];

var server = http.createServer(function(req, resp){
	req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(resp);
});


server.listen(port);