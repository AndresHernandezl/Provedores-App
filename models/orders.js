// modelo para las imagenes de los productos
// requiero librerias
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PedidosSchema = new Schema({
	id_producto: {type: Schema.ObjectId, ref: 'modelProductos'},
	fecha: Date,
	id_usuario: {type: Schema.ObjectId, ref: 'modelUser'},
});

module.exports = mongoose.model('modelPedidos', PedidosSchema);