const express = require('express');
const router = express.Router();

const {obtenerproductos, crearProducto, obtenerProductosId, actualizarProductosId, crearCategoria, obtenerCategorias, obtenerCategoriaId, actualizarCategoriaId } = require('../controllers/products');

router.post('/', crearProducto);
router.get('/', obtenerproductos);
router.get('/id', obtenerProductosId);
router.patch('/id', actualizarProductosId);

router.post('/', crearCategoria);
router.get('/', obtenerCategorias);
router.get('/id', obtenerCategoriaId);
router.patch('/id', actualizarCategoriaId);


module.exports = router;
