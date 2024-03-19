const express = require('express');
const router = express.Router();

const {} = require('../controllers/conversation');

router.post('/',crearComentarioEnvio);
router.post('/',crearComentarioRespuesta);

router.get('/', obtenerComentarioEnvio);
router.get('/', obtenerComentarioRespuesta);

router.get('/id', obtenerComentarioEnvioId);
router.get('/id', obtenerComentarioRespuestaId);

module.exports = router;
