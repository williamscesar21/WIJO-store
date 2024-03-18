const express = require('express');
const router = express.Router();

const {} = require('../controllers/conversation');

router.post('/',crearConversacionEnvio);
router.post('/',crearConversacionRespuesta);

router.get('/', obtenerConversacionEnvio);
router.get('/', obtenerConversacionRespuesta);

router.get('/id', obtenerConversacionEnvioId);
router.get('/id', obtenerConversacionRespuestaId);

module.exports = router;
