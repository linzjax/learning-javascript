
var module = require('./module.js');

/*fs.readdir(process.argv[2], function callback(err, data){
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
});*/

module.checkFile(process.argv[2], process.argv[3], callback);