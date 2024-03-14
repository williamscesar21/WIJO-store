const mongoose = require('mongoose');


// Definir modelo de datos para registrar productos
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    nombre:{
        type: String,
        minlenght: 1,
        maxlength: 100,
        require: true
    },
    descripcion:{
        type: String,
        minlenght: 1,
        maxlength: 5000,
        require: true
    },
    marca:{
        type: String,
        minlenght: 1,
        maxlength: 500,
        require: true
    },
    cantidad_disponible:{
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
              return /^[0-9]+$/.test(value);
            },
            message: 'Cantidad inválido',
        }
    },
    precio:{
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
              return /^\d+(\.\d{2})?$/.test(value); // formtao de precio con dos decimales 49.00
            },
            message: 'Precio inválido',
        }
    },
    envio:{
        type: String,
        require: true
    },
    iva:{
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
              return /^[0-9]+$/.test(value);
            },
            message: 'IVA inválido',
        }
    },
    costo:{
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
              return /^[0-9]+$/.test(value);
            },
            message: 'Costo inválido',
        }
    },
    id_vendedor:{
        type: String,
        require: true
    },
    estado_producto:{
        type: String,
        require: true
    },
    calificacion:{
        type: Number,
        require: true
    },
    images:{
        data: Buffer,
        contentType: String
    },
    eliminar:{
        type: Boolean,
        require: true
    },
    id_categoria:{
        type: String,
        require: true
    }
},{
    timestamps: true,
    versionKey: false 
})


module.exports = mongoose.model('Products', ProductSchema); //Exportación del módulo productos
