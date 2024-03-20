const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new mongoose.Schema({
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    contenido: {
        type: String,
        minLength: 1,
        maxLength: 5000,
        required: true
    },
    fecha_envio: {
        type: Date,
        default: Date.now
    }
});

const conversacionSchema = new mongoose.Schema({
    id_usuario_envio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    id_usuario_respuesta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    id_producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    mensajes: [chatSchema] // Matriz de chat
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Conversacion', ConversacionSchema);
module.exports = mongoose.model('Chat', ChatSchema);

