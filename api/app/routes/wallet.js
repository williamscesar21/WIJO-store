const express = require('express')
const router = express.Router()
const Wallet = require('../../app/controllers/wallet')

router.get('/user/:owner/saldo', Wallet.obtenerSaldo)
router.post('/user/:owner/recargar', Wallet.recargarSaldo)

module.exports = router