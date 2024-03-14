const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Definir modelo de datos para registrar usuarios
const UserSchema = new Schema({
    nombre:{
        type: String,
        minlenght: 1,
        maxlength: 100,
        require: true,
        validate: { //Validación de solo letras en el nombre
            validator: function (value) {
              return /[a-zA-Z]/.test(value);
            },
            message: 'Nombre inválido',
          },
    },
    apellido:{
        type: String,
        minlenght: 1,
        maxlength: 100,
        require: true,
        validate: {
            validator: function (value) { //Validación de solo letras en el apellido
              return /[a-zA-Z]/.test(value);
            },
            message: 'Apellido inválido',
        },
    },
    cedula:{
        type: String,
        require: true,
        unique: true,
        validate: { //Validación de cédula de identidad: debe iniciar por V-E-J-G y luego los dígitos
            validator: function (value) {
              return /^[V|E|J|G][0-9]{5,9}$/.test(value);
            },
            message: 'Cedula inválida',
        }
    },
    direccion:{
        type: String,
        minlenght: 1,
        maxlength: 1000,
        require: true
    },
    correo:{
        type: String,
        require: true,
        unique: true,
        validate: {//Validación del correo electrónico
            validator: function (value) {
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Formato de correo inválido',
          },
    },
    telefono:{
        type: String,
        require: true,
        unique: true
    },
    roles: {
        type: [{
            type: String,
            enum: ['comprador', 'admin','vendedor']
        }],
        default: ['comprador'] // Si no coloca nada, se agrega por defecto comprador
    },
    metodo_entrega:{
        type: String,
        require: true
    },
    clave:{
        type:String,
        maxLenght: [500, 'La contraseña no puede superar los 50 caracteres'],
        minLenght: [6, 'La contraseña no puede ser menor de 6 caracteres'],
        required: true,
        validate: { //Validación de la clave para que contenga mínimo 8 caracatéres, una letra mayúscula, una letra minúscula, y un caracter especial.
            validator: function (value) {
              return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(value);
            },
            message: 'Contraseña inválida',
        }
    },
    suspendido:{
        type: Boolean,
        require: true
    },
    eliminar:{
        type: Boolean,
        require: true
    }
},{
    timestamps: true,
    versionKey: false 
})

UserSchema.statics.encryptPassword = async (clave) => {// Función para encriptar la clave
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(clave, salt).then((hashedPassword)=>{
        return hashedPassword;
    })
}

module.exports = mongoose.model('Users', UserSchema); //Exportación del módulo usuario