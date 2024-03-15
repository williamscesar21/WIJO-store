const express = require('express');
const router = express.Router();

const {obtenerproductos, crearProducto} = require('../controllers/products');

router.post('/', crearProducto);
router.get('/', obtenerproductos);
router.get('/id', obtenerProductosId);
router.patch('/id', actualizarProductosId);


module.exports = router;
