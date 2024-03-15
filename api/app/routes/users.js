const express = require('express');
const router = express.Router();

const {obtenerusuarios, obtenerUsuarioId, crearUsuario, actualizarUsuarioId} = require('../controllers/users');

router.post('/', crearUsuario);
router.get('/', obtenerusuarios);
router.get('/id',obtenerUsuarioId);
router.patch('/id',actualizarUsuarioId);

module.exports = router;
