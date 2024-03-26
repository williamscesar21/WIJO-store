const express = require('express');
const router = express.Router();

const { obtenerusuarios, crearUsuario, actualizarUsuarioPorId, eliminarUsuarioPorId, suspenderUsuarioPorId } = require('../controllers/users');

router.post('/', crearUsuario);
router.get('/', obtenerusuarios);
router.patch('/:id', actualizarUsuarioPorId);
router.delete('/:id', eliminarUsuarioPorId);
router.patch('/:id/suspender', suspenderUsuarioPorId);

module.exports = router;
