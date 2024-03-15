const UsersModel = require('../models/users');

const obtenerusuarios = (req, res)=>{
    res.send('Ruta que obtiene usuarios')
}

const obtenerUsuarioId = async (req, res)=>{
    try{
        const id = req.params.id;
        const users = await Users.findById(id);
        if(!users){
            res.status(404).json({message: 'Usuario no encontrado'});
        }else{
            res.json(users);
        }
    }catch(err){
        res.status(500).json({message: "Error al obtener el usuario"});
        
    }
})

const crearUsuario = async (req, res)=>{
   try {
        const {nombre, apellido, cedula, direccion, correo, telefono, roles, metodo_entrega, clave, suspendido, eliminar} = req.body;    
        const users =await UsersModel.create({
            nombre, 
            apellido,
            cedula,
            correo,
            telefono,
            roles,
            metodo_entrega, 
            clave: await UsersModel.encryptPassword(clave),
            suspendid,
            eliminar
       });
        res.status(200).json({messgae: 'Usuario creado exitosamente', users});

   }catch (e) {
        res.status(500).json({error:e});
        
    }
}

const actualizarUsuarioId =  (req, res) => {
    try{
       const { id } = req.params;
       const {nombre, apellido, cedula, direccion, correo, teléfono, roles, metodo_entrega, clave, suspendido, eliminar} = req.body;
       const users = await Users.findByIdAndUpdate(id, {nombre, apellido, cedula, direccion, correo, teléfono, roles, metodo_entrega, clave, suspendido, eliminar});
       if(!users){
           return res.status(404).json({message: 'Usuario no encontrado'});
       }
       res.status(200).json({message:'Usuario actualizado exitosamente'});

    }catch(err){
       res.status(400).json({message: err.message});
    }
})

module.exports = {obtenerusuarios, obtenerUsuarioId, crearUsuario, actualizarUsuarioId}
