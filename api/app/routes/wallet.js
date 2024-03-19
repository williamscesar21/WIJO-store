const express = require('express');
const router = express.Router();
const verificarReferencia = require('../middlewares/verificarReferencia');
const { obtenerSaldo, recargarSaldo, transferirSaldo } = require('../controllers/wallet');

// Ruta para obtener el saldo de la billetera de un usuario
router.get('/:userId/saldo', obtenerSaldo);

// Ruta para recargar el saldo de la billetera de un usuario
router.put('/:userId/recargar', verificarReferencia ,recargarSaldo);

// Ruta para transferir el saldo de la billetera de un usuario
router.post('/transferir', transferirSaldo);

module.exports = router;
