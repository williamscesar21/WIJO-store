require('dotenv').config(); // solcitamos dotenv
const router = require('express').Router();
const correoNotificacion = require('./controllers/sendEmail');
const cron = require('node-cron');
//Solicitudes //


//Segundo plano 
cron.schedule('31 18 * * * ', () => {
    
    //FUNCIÓN CORREO
    correoNotificacion(2, "NA", process.env.EMAILENVIAR, "NA" );
    console.log('Correo enviado correctamente');
}, 
{
    scheduled: true,
    timezone: "America/Caracas"
});

router.route("/") // Ruta de donde viene el formulario, puede ser directo del HTML 
                  // o del controlador una vez los datos esten en BD
.get(function(req, res){
    res.render("obtenerusuarios");
});

// Lo que se genera después de registrarse.
// Una nueva vista donde arroja el mensaje de registro exitoso
router.route("/contacto") 
.post(function(req, res){
    var nombre  = req.body.nombre;
    var correo   = req.body.correo;
    //var mensaje = req.body.mensaje;

    var correoAdmin = "jjoaquin.romero@gmail.com";  // Correo del administrador
                                                    // Debo tomarlo de la base de datos
                                                    
    // Función de correo electrónico
    // Not # 0: correoNotificacion(cualNotificacion, nombre, apellido, cedula, correo, telefono, roles, createdAt )
    //Datos para activar el envío del correo al administrador
    correoNotificacion(0, nombre, apellido, cedula, correo, telefono, roles, createdAt); //

  
    // Not # 1: correoNotificacion(cualNotificacion, nombre, apellido, cedula, correo, telefono, roles, createdAt )
    //Datos para activar el envío del correo al usuario registrado
    correoNotificacion(1, nombre, apellido, cedula, correo, telefono, roles, createdAt); //
    // Función de correo electrónico

    //Vista de lo que sucede después de registrarse y se muestra en la ruta de cotnacto
    //Aquí podemos enviar los datos que queremos
    //res.render("Gracias", {nombreUsuario: nombre});

});



module.exports = router;
