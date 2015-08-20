//takes three arguments: the directory name, the filename string,and a callbackfunction
var fs = require('fs');

function checkFile(directory, extension, callback){
	fs.readdir(directory, function(err, data){
		if (err)
			return callback(err);
		
		callback(err, data.filter(function(item){
			file = item.split('.');
			return (file[1] === extension);
		}));

	});
}

module.exports = checkFile;