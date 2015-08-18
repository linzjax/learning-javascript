//takes three arguments: the directory name, the filename string,and a callbackfunction
var fs = require('fs');

function callback(err, data){
	if (err) {
			console.log(err);
		} else {
			for (i = 0; i < data.length; i++){
				file = data[i].split('.');
				if (file[1] === process.argv[3]){
					console.log(file.join('.'));
				}
			}
		}
	}



function checkFile(name, filename, callback){
	fs.readdir(name, callback){
		if (err) {
			console.log(err);
		} else {
			for (i = 0; i < data.length; i++){
				file = data[i].split('.');
				if (file[1] === process.argv[3]){
					console.log(file.join('.'));
				}
			}
		}
	}
}

module.exports = checkFile();