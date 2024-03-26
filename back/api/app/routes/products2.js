// En caso de que falle el otro enrute de productos, se puede reemplazar con este


const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

// Rutas para los productos
router.get('/', productController.obtenerProductos);
router.get('/:id', productController.verProductoPorId);
router.post('/', productController.crearProducto);
router.put('/:id', productController.actualizarProductoPorId);
router.delete('/:id', productController.eliminarProductoPorId);

// Ruta para buscar productos por palabra clave en el nombre
router.get('/buscar/:palabraClave', productController.buscarProductosPorPalabraClave);

module.exports = router;
