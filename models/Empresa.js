const mongoose = require('mongoose');
const { Schema } = mongoose;

const empresaSchema = new Schema({
	nombre: String,
	activo: { type: Boolean, default: true },
	mail: String,
	usuarios: { type: Number, default: 3 },
	fecha_corte: String
});

mongoose.model('empresas', empresaSchema);