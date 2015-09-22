// modelo de los productos

// requiero librerias
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// creo el esquema de los productos
var ProductsSchema = new Schema({
	nombre: String,
	descripcion: String,
	valor: Number,
	id_categoria: {type: Schema.ObjectId, ref: 'modelCategorias'},
	id_subcategoria: {type: Schema.ObjectId, ref: 'modelSubcategorias'},
	id_usuario: {type: Schema.ObjectId, ref: 'modelUser'}
});

module.exports = mongoose.model('modelProductos', ProductsSchema);