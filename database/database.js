var mongoose = require('mongoose');
// llamo db mongo
exports.connect = function(err, res){
	//mongoose.connect('mongodb://localhost/app_provedores');// LOCAL
	mongoose.connect('mongodb://root:root@ds051943.mongolab.com:51943/app_provedores');// REMOTYE

	if (err) throw err;
	console.log('CONECTADO A LA BASE DE DATOS DE MONGODB');
} 