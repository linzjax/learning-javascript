
var module = require('./module.js');



var directory = process.argv[2]; //all of the files in dir
var extension = process.argv[3]; //the file extension to compare


module(directory, extension, function callback(err, data){
	if (err)
		console.log(err);

	data.forEach(function(item){
		console.log(item);
	});
});