// modelo para las imagenes de los productos
// requiero librerias
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriasSchema = new Schema({
	nombre: String,
	descripcion: String
});

module.exports = mongoose.model('modelCategorias', CategoriasSchema);