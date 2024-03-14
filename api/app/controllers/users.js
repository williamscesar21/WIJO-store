const UsersModel = require('../models/users');
const obtenerusuarios = (req, res)=>{
    res.send('Ruta que obtiene usuarios')
}

const crearUsuario = async (req, res)=>{
   //try {
        const {nombre, apellido, cedula, direccion, correo, telefono, roles, metodo_entrega, clave, suspendido, eliminar} = req.body;    
        const user =await UsersModel.create({
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
        res.status(200).json({messgae: 'Usuario creado exitosamente', user});

   }catch (e) {
        res.status(500).json({error:e});
        
    }
}

module.exports = {obtenerusuarios, crearUsuario}
