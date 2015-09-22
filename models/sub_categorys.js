// modelo para las imagenes de los productos
// requiero librerias
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubcategoriaSchema = new Schema({
	nombre: String,
	descripcion: String,
	id_categoria: {type: Schema.ObjectId, ref: 'modelCategorias'},
});

module.exports = mongoose.model('modelSubcategorias', SubcategoriaSchema);