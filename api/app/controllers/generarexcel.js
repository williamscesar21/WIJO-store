const UsersModel = require('../models/users'); // añadimos el modelo de donde vamos a exportar los datos en excel
                                              // en este caso dejaré el modelo de usuario

const User = mongoose.model('User', userSchema); //Schema de la colección User

//*********** GENERAR ARCHIVO EXCEL EN FORMATO XLSX ***********

const exceljs = require('exceljs'); // npm i exceljs
                                    // libreria para generar el archivo excel en .xlsx
 const = generarExcelXlsx = async (req, res) => {
    try{
        let workbook = new exceljs.Workbook();
        const sheet = workbook.addWorksheet('Users'); // creamos la hoja excel para insertar los datos
                                                      // 'Users' es el nombre de la colección a utilizar
        sheet.columns = [ // Creamos las columnas donde Header es el nombre de la columna y Key es el valor
                           // El Key debe ser igual al elemento de la base de datos (_id, nombre, apellido ....) 
            {header: 'ID', key: '_id', width: 10, style: {alignment: {horizontal: 'left'}}},
            {header: 'Nombre', key: 'nombre', width: 10, style: {alignment: {horizontal: 'left'}}},
            {header: 'Apellido', key: 'apellido', width: 10, style: {alignment: {horizontal: 'left'}}},
            {header: 'Cedula', key: 'cedula', width: 10, style: {alignment: {horizontal: 'left'}}},
            {header: 'Direccion', key: 'direccion', width: 10, style: {alignment: {horizontal: 'left'}}},
            {header: 'Correo', key: 'correo', width: 10, style: {alignment: {horizontal: 'left'}}},
            {header: 'Telefono', key: 'telefono', width: 10, style: {alignment: {horizontal: 'left'}}},
            {header: 'Rol', key: 'roles', width: 10, style: {alignment: {horizontal: 'left'}}},
            {header: 'Metodo Entrega', key: 'metodo_entrega', width: 10, style: {alignment: {horizontal: 'left'}}},
            {header: 'Clave', key: 'clave', width: 10, style: {alignment: {horizontal: 'left'}}},
            {header: 'Suspendido', key: 'suspendido', width: 10, style: {alignment: {horizontal: 'left'}}},
            {header: 'Eliminar', key: 'eliminar', width: 10, style: {alignment: {horizontal: 'left'}}},
            {header: 'Fecha Creación', key: 'createdAt', width: 10, style: {alignment: {horizontal: 'left'}}},
            {header: 'Fecha Actualización', key: 'updatedAt', width: 10, style: {alignment: {horizontal: 'left'}}},
        ];
        
        let object = JSON.parse(JSON.stringify(await User.find())); // Convertimos el JSON en un archivo entendible para el ojo humano
        await object.forEach(user => { // Hacemos un recorrido por los datos
            const {_id,nombre, apellido, cedula, direccion, correo, telefono, roles, metodo_entrega, clave, suspendido, eliminar, createdAt, updatedAt} = user;
            // Almacenamos los datos en cada variable (estos nombres deben ser igual a los de los elementos de la base de datos)
          sheet.addRow({ // Creamos las filas añadiendo cada dato que se trae de la base de datos
                _id, nombre, apellido, cedula, direccion, correo, telefono, roles, metodo_entrega, clave, suspendido, eliminar, createdAt, updatedAt
        });
    });
        res.setHeader (  // Cabecera del archivo excel.     
            'Content-Type',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            );
        res.setHeader(
            'Content-Disposition',
            'attachment; filename=usuarios_registrados.xlsx'
            );

            workbook.xlsx.write(res) // Escribimos el archivo excel con los datos
      //Nota: en insomnia no se aprecia bien los datos, pero cuando lo descargas desde el navegador, 
      //se genera el excel correctamente

        }catch(err){
            res.status(400).json({message: err.message});
        }
   
//*********** GENERAR ARCHIVO EXCEL EN FORMATO CSV ***********
const CsvParser = require('json2csv').Parser; // npm i json2csv


const generarExcelCsv = async (req, res) => {
    try{
        let users  = []; // Creamos una variable tipo array
        const usersData = await User.find(); // Hacemos la búsqueda en la base de datos mongodb de la colección Usuarios
        usersData.forEach(user => { //Hacemos el recorrido por los elementos de la colección Users
            const {id,nombre, apellido, cedula, direccion, correo, telefono, roles, metodo_entrega, clave, suspendido, eliminar, createdAt, updatedAt} = user;
            users.push({ // Añadimos los datos en estas variables 
                id, nombre, apellido, cedula, direccion, correo, telefono, roles, metodo_entrega, clave, suspendido, eliminar, createdAt, updatedAt
        });
    })

        //Creamos los nombres de las columnas en función a los datos que extraemos de la base de datos
        const cvsFileds = ['ID', 'nombre', 'apellido', 'cedula', 'direccion', 'correo', 'telefono', 'roles', 'metodo_entrega', 'clave', 'suspendido', 'eliminar', 'createdAt', 'updatedAt'];
        const csvParser = new CsvParser({ cvsFileds });
        const csvData = csvParser.parse(users); //Guardamos los datos en la variable csvData
        res.setHeader('Content-Type', 'text/csv'); // Cabeceras del archvio CSV
        res.setHeader('Content-Disposition', 'attachment; filename=users.csv');
        res.status(200).send(csvData); // Enviamos los datos para ser mostrados
        
   
    }catch(err){
        res.status(400).json({message: err.message});

    }    
}

//NOTA: puedes seleccionar todos o algunos elementos de la colección
// por ejemplo, puedes descargar el archivo de usuarios solo son el nombre, apellido y cédula
// solo debes indicar estos parámetros en el recorrido forech, en el .push y en los títulos de las columnas.
module.exports = { generarExcelXlsx, generarExcelCsv }
