/* INSTRUCTIONS: Write a TCP time server!

Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format:

    "YYYY-MM-DD hh:mm"

followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:

    "2013-07-06 17:42"

*/

//net module has all basic networking functions
//net.createServer(function callback(socket){/THIS CALL BACK WILL TRIGGER MULTIPLE TIMES/}); 
//this will also return an instance of your server. You must use server.listen() to start listening on a spcific port.

//socket.write(data) addings things to the socket, and socket.end() closes the connection

var net = require('net');
var date = new Date();
var new_date = [];

var server = net.createServer(function callback(socket){
	var right_now = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes()];
	right_now.forEach(function(item){
		item = item.toString();
		if (item.length === 1){
			item = '0' + item;
		}
		new_date.push(item);
	});
	var todays_date = new_date.splice(0, 3);
	todays_date = todays_date.join('-') + ' ' + new_date.join(':') + '\n';
	socket.end(todays_date);

});
server.listen(process.argv[2]);