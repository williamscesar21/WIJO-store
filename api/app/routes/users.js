const express = require('express');
const router = express.Router();

const {obtenerusuarios, crearUsuario} = require('../controllers/users');

router.post('/', crearUsuario);
router.get('/', obtenerusuarios);

module.exports = router;
