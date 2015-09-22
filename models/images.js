// modelo para las imagenes de los productos
// requiero librerias
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImagenesSchema = new Schema({
	id_producto: {type: Schema.ObjectId, ref: 'modelProductos'},
	url: String
});

module.exports = mongoose.model('modelImagenes', ImagenesSchema);