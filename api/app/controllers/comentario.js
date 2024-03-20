const UsersModel = require('../models/comentario');

const crearComentarioEnvio = async (req, res) => {
    try{
        const message = new ComentarioEnvio(req.body);
        await message.save();
        res.status(201).json(message);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

const obtenerComentarioEnvio =  async (req, res) => {
    try {
        const messages = await ComentarioEnvio.aggregate(
            [
                {
                    $lookup: {
                        from: 'users',
                        localField: 'id_usuario_mensaje',
                        foreignField: '_id',
                        as: 'datos_usuario_mensaje'
                    }
                },
                {
                    $unwind: "$datos_usuario_mensaje"
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'id_usuario_vendedor',
                        foreignField: '_id',
                        as: 'datos_usuario_vendedor'
                    }
                },
                {
                    $unwind: "$datos_usuario_vendedor"
                },
                {
                    $lookup: {
                        from: 'products',
                        localField: 'id_producto',
                        foreignField: '_id',
                        as: 'datos_producto'
                    }
                }
            ]
        )
        res.json(messages);

    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

const obtenerComentarioEnvioId = async (req, res) => {
    try {
        const id = req.params.id;
        let messages = await ComentarioEnvio.aggregate(
            [
                {
                    $match: {
                        _id: new mongoose.Types.ObjectId(id)
                    }
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'id_usuario_mensaje',
                        foreignField: '_id',
                        as: 'datos_usuario_mensaje'
                    }
                },
                {
                    $unwind: "$datos_usuario_mensaje"
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'id_usuario_vendedor',
                        foreignField: '_id',
                        as: 'datos_usuario_vendedor'
                    }
                },
                {
                    $unwind: "$datos_usuario_vendedor"
                },
                {
                    $lookup: {
                        from: 'products',
                        localField: 'id_producto',
                        foreignField: '_id',
                        as: 'datos_producto'
                    }
                }
            ]
        )
        res.status(200).json({messages});

    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}


const crearComentarioRespuesta = async (req, res) => {
    try{
        const answer = new ComentarioRespuesta(req.body);
        await answer.save();
        res.status(201).json(answer);
    }catch(err){
        res.status(400).json({message: err.message});
    }
    
}

const obtenerComentarioRespuesta = async (req, res) => {
    try {
        const answers = await ComentarioRespuesta.aggregate(
            [
                {
                    $lookup: {
                        from: 'conversacionenvios',
                        localField: 'id_conversacionEnvio',
                        foreignField: '_id',
                        as: 'datos_conversacionEnvio'
                    }
                },
                {
                    $unwind: "$datos_conversacionEnvio" 
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'datos_conversacionEnvio.id_usuario_mensaje',
                        foreignField: '_id',
                        as: 'datos_comprador_mensaje'
                    }
                },
                {
                    $unwind: "$datos_comprador_mensaje"
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'datos_conversacionEnvio.id_usuario_vendedor',
                        foreignField: '_id',
                        as: 'datos_vendedor_respuesta'
                    }
                },
                {
                    $unwind: "$datos_vendedor_respuesta"
                },
                {
                    $lookup: {
                        from: 'products',
                        localField: 'datos_conversacionEnvio.id_producto',
                        foreignField: '_id',
                        as: 'datos_producto'
                    }
                }
            ]
        )
        res.json(answers);
        }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

const obtenerComentarioRespuestaId = async (req, res) => {
    try {
        const id = req.params.id;
        const answers = await ComentarioRespuesta.aggregate(
            [
                {
                    $match: {
                        _id: new mongoose.Types.ObjectId(id)
                    }
                },
                {
                    $lookup: {
                        from: 'conversacionenvios',
                        localField: 'id_conversacionEnvio',
                        foreignField: '_id',
                        as: 'datos_conversacionEnvio'
                    }
                },
                {
                    $unwind: "$datos_conversacionEnvio" 
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'datos_conversacionEnvio.id_usuario_mensaje',
                        foreignField: '_id',
                        as: 'datos_comprador_mensaje'
                    }
                },
                {
                    $unwind: "$datos_comprador_mensaje"
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'datos_conversacionEnvio.id_usuario_vendedor',
                        foreignField: '_id',
                        as: 'datos_vendedor_respuesta'
                    }
                },
                {
                    $unwind: "$datos_vendedor_respuesta"
                },
                {
                    $lookup: {
                        from: 'products',
                        localField: 'datos_conversacionEnvio.id_producto',
                        foreignField: '_id',
                        as: 'datos_producto'
                    }
                }
            ]
        )
        res.json(answers);
        }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports = { obtenerComentarioRespuestaId, obtenerComentarioRespuesta,  crearComentarioRespuesta, obtenerComentarioEnvioId, obtenerComentarioEnvio, crearComentarioEnvio}
