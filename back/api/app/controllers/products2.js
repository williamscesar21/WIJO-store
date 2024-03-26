// En caso de fallar el otro controlador de productos, se puede reemplazar con este

const Product = require('../models/products');

const obtenerProductos = async (req, res) => {
    try {
        const productos = await Product.find();

        if (productos.length === 0) {
            return res.status(404).json({ message: 'No se encontraron productos' });
        }

        res.status(200).json({ message: 'Productos encontrados', productos });
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ message: 'Error al obtener productos' });
    }
}

const verProductoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Product.findById(id);

        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json({ message: 'Producto encontrado', producto });
    } catch (error) {
        console.error('Error al obtener producto por ID:', error);
        res.status(500).json({ message: 'Error al obtener producto por ID' });
    }
}

const crearProducto = async (req, res) => {
    try {
        const { nombre, descripcion, marca, cantidad_disponible, envio, costo, id_vendedor, estado_producto, id_categoria } = req.body;

        const producto = await Product.create({
            nombre,
            descripcion,
            marca,
            cantidad_disponible,
            envio,
            costo,
            id_vendedor,
            estado_producto,
            id_categoria
        });

        res.status(201).json({
            message: 'Producto creado exitosamente',
            producto
        });
    } catch (error) {
        console.error('Error al crear producto:', error);
        res.status(400).json({
            message: 'Error al crear producto',
            error: error.message
        });
    }
}

const actualizarProductoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, marca, cantidad_disponible, envio, costo, id_vendedor, estado_producto, id_categoria } = req.body;

        const producto = await Product.findByIdAndUpdate(id, {
            nombre,
            descripcion,
            marca,
            cantidad_disponible,
            envio,
            costo,
            id_vendedor,
            estado_producto,
            id_categoria
        }, { new: true });

        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json({ message: 'Producto actualizado exitosamente', producto });
    } catch (error) {
        console.error('Error al actualizar producto por ID:', error);
        res.status(500).json({ message: 'Error al actualizar producto por ID' });
    }
}

const eliminarProductoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Product.findByIdAndDelete(id);

        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar producto por ID:', error);
        res.status(500).json({ message: 'Error al eliminar producto por ID' });
    }
}

const buscarProductosPorPalabraClave = async (req, res) => {
    try {
        const { palabraClave } = req.params;
        // Utiliza una expresión regular para buscar productos que contengan la palabra clave en su nombre, sin importar mayúsculas o minúsculas
        const productos = await Product.find({ nombre: { $regex: new RegExp(palabraClave, 'i') } });

        if (productos.length === 0) {
            return res.status(404).json({ message: 'No se encontraron productos que coincidan con la palabra clave' });
        }

        res.status(200).json({ message: 'Productos encontrados', productos });
    } catch (error) {
        console.error('Error al buscar productos por palabra clave:', error);
        res.status(500).json({ message: 'Error al buscar productos por palabra clave' });
    }
}

module.exports = {
    buscarProductosPorPalabraClave,
    obtenerProductos,
    verProductoPorId,
    crearProducto,
    actualizarProductoPorId,
    eliminarProductoPorId
};
