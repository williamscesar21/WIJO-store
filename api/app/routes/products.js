const express = require('express');
const router = express.Router();

const {obtenerproductos, crearProducto} = require('../controllers/products');

router.post('/', crearProducto);
router.get('/', obtenerproductos);

module.exports = router;
