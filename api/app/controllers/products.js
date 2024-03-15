const ProductsModel = require('../models/products');
const CategoriesModel = require('../models/categories');

//******** PRODUCTOS ****

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
        res.status(200).json({messgae: 'Producto creado exitosamente'});

   }catch (e) {
        res.status(500).json({error:e});
        
    }
}
const obtenerProductosId = async (req, res) => {
    try{
        const id = req.params.id;
        const prduct = await Product.findById(id);
        if(!prduct){
            res.status(404).json({message: 'Producto no encontrado'});
        }else{
            res.json(prduct);
        }
    }catch(err){
        res.status(500).json({message: "Error al obtener el producto"});
        
    }
})

const actualizarProductoId = async (req, res) => {
     try{
        const { id } = req.params;
        const {nombre, precio} = req.body;
        const product = await Product.findByIdAndUpdate(id, {nombre, marca, cantidad_disponible, precio, envio, iva, costo, iv_vendedor, estado_producto, calificacion, eliminar,id_categoria});
        if(!product){
            return res.status(404).json({message: 'Producto no encontrado'});
        }
        res.status(200).json({message:'Producto actualizado exitosamente'});

     }catch(err){
        res.status(400).json({message: err.message});
     }
 })

//******** CATEGORIAS ****

const crearCategoria = async (req, res)=>{
   try {
        const {nombre, descripcion} = req.body;    
        const user =await UsersModel.create({
            nombre,
            descripcion
       });
        res.status(200).json({messgae: 'Categoría creada exitosamente'});

   }catch (e) {
        res.status(500).json({error:e});
        
    }
}

const obtenerCategorias = (req, res)=>{
    res.send('Ruta que obtiene categorias')
}

const obtenerCategoriaId = async (req, res) => {
    try{
        const id = req.params.id;
        const categoria = await Categoria.findById(id, {nombre, descripcion});
        if(!categoria){
            res.status(404).json({message: 'Usuario no encontrado'});
        }else{
            res.json(categoria);
        }
    }catch(err){
        res.status(500).json({message: "Error al obtener el usuario"});
        
    }
})

const actualizarCategoriaId = async (req, res) => {
    try{
       const { id } = req.params;
       const {nombre, descripcion} = req.body;
       const categoria = await Categoria.findByIdAndUpdate(id, {nombre, descripcion});
       if(!categoria){
           return res.status(404).json({message: 'Categoría no encontrado'});
       }
       res.status(200).json({message:'Categoría actualizado exitosamente'});

    }catch(err){
       res.status(400).json({message: err.message});
    }
})

module.exports = {obtenerproductos, crearProducto, actualizarProductoId, obtenerProductosId, obtenerCategorias, crearCategoria, actualizarCategoriaId, obtenerCategoriaId}
