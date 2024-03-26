const ChatModel = require('../models/chat');
const ConversacionModel = require('../models/conversacion');

const crearChat =  async (req, res) => {
    try{
        const chatw = new Chatw(req.body);
        await chatw.save();
        res.status(201).json(chatw);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

const crearConversacion = async (req, res) => {
    try{
        const conversacionw = new Conversacionw(req.body);
        await conversacionw.save();
        res.status(201).json(conversacionw);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

const obtenerChat = async (req, res) => {
    try {
        const chatw = await Chatw.aggregate(
            [ 
                      
                {
                    $lookup: {
                        from: 'users',
                        localField: 'id_usuario',
                        foreignField: '_id',
                        as: 'datos_usuario'
                    }
                }
            ]
        );
        res.json(chatw);
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
}

const obtenerConversacionId = async (req, res) => {// agregar otro id en el req.params
    try {
        let id = req.params.id; // ID del usuario que pregunta (comprador)
        let id2 = req.params.id2; // ID del usuario que responde (vendedor)
        const conversacionw = await Conversacionw.aggregate(
            [
                
                {
                    $project: {
                        _id: 0
                    }
                },
                {
                    $match: { 
                        $and: [
                            {
                                id_usuario_envio: new mongoose.Types.ObjectId(id)
                            }
                            ,
                            {
                                id_usuario_respuesta: new mongoose.Types.ObjectId(id2)
                            }
                        ]
                    }
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'id_usuario_envio',
                        foreignField: '_id',
                        as: 'datos_usuario_pregunta'
                    }
                },
                {
                    $unwind: "$datos_usuario_pregunta"
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'id_usuario_respuesta',
                        foreignField: '_id',
                        as: 'datos_usuario_respuesta'
                    }
                },
                {
                    $unwind:  "$datos_usuario_respuesta"
                },
                {
                    $lookup: {
                        from: 'products',
                        localField: 'id_producto',
                        foreignField: '_id',
                        as: 'datos_productos'
                    }
                }
            ]
        );
        res.json(conversacionw);
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
})

module.exports = {crearChat, crearConversacion, obtenerChat, obtenerConversacionId}
