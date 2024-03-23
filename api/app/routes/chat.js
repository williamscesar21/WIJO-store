const express = require('express');
const router = express.Router();

const {crearChat, crearConversacion, obtenerChat, obtenerConversacionId} = require('../controllers/chat')

router.post('/', crearChat);
router.get('/', obtenerChat)

router.post('/', crearConversacion);
router.post('/id/id2/', obtenerConversacionId); //id: Id del usuario comprador 
                                                //id2: id del usuario vendedor

module.exports = router;
