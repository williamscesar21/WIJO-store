const ProductsModel = require('../models/products');
const CategoriesModel = require('../models/categories');

const obtenerproductos = (req, res)=>{
    res.send('Ruta que obtiene productos')
}

const crearProducto = async (req, res)=>{
   try {
        const {nombre, descripcion, marca, cantidad_disponible, precio, envio, iva, costo, id_vendedor, estado_producto, calificacion, images, eliminar, id_categoria} = req.body;    
        const user =await UsersModel.create({
            nombre,
            descripcion,
            marca,
            cantidad_disponible,
            precio,
            envio,
            iva,
            costo,
            id_vendedor,
            estado_producto,
            calificacion,
            images,
            eliminar,
            id_categoria
       });
        res.status(200).json({messgae: 'Producto creado exitosamente', products});

   }catch (e) {
        res.status(500).json({error:e});
        
    }
}


const crearCategoria = async (req, res)=>{
   try {
        const {nombre, descripcion} = req.body;    
        const user =await UsersModel.create({
            nombre,
            descripcion
       });
        res.status(200).json({messgae: 'Categoría creada exitosamente', categories});

   }catch (e) {
        res.status(500).json({error:e});
        
    }
}

module.exports = {obtenerproductos, crearProducto, crearCategoria}
