const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Definir modelo para registrar los mensajes que envía el comprador al vendedor
const conversacionEnvioSchema = new Schema({
    id_usuario_mensaje: {//Este es el Id del usuario comprador que envía el mensaje
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    mensaje: {// Mensaje que envía el usuario comprador
        type: String,
        minLenght: 1,
        maxlength: 5000,
        require: true
    },
    id_producto: {// Id del producto que se va a comprar
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        require: true
    },
    id_usuario_vendedor: { //Este id usuario debe ser igual al id_usuario_respuesta del Schema conversacionRespuestaSchema
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
},{
    timestamps: true,
    versionKey: false 
})

//Definir el modelo donde se le responde al comprador por parte del vendedor
const conversacionRespuestaSchema = new Schema({
    respuesta: {// Mensaje en forma de respuesta que envía el vendedor al comprador
        type: String,
        require: true
    },
    id_conversacionEnvio: { // Id de la colección "conversacionEnvioSchema"
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ConversacionEnvio',
        require: true
    }
},{
    timestamps: true,
    versionKey: false 
})

module.exports = mongoose.model('ConversacionEnvio', ConversacionEnvioSchema); //Exportación del módulo Conversación Envío 
module.exports = mongoose.model('ConversacionRespuesta', ConversacionRespuestaSchema); //Exportación del módulo Conversación Respuesta 

