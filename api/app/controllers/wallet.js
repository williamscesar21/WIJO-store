const Wallet = require('../models/wallet')

const obtenerSaldo = async (req, res)=>{
    try{
        const {owner} = req.params
        const wallet = await Wallet.findOne({owner})
        if(!wallet){
            res.status(404).send({message: 'No existe la billetera'})
            return
        }
        res.status(200).send({balance: wallet.balance})
    }catch(err){
        res.status(500).send({message: err.message})
    }
}

const recargarSaldo = async (req, res)=>{
    try{
        const {owner} = req.params
        const {amount} = req.body

        let wallet = await Wallet.findOne({owner})
        if(!wallet){
            wallet = new Wallet({
                owner
            })
        }

        wallet.balance += amount
        await wallet.save()
        res.status(200).send({message: 'Recarga exitosa', balance})
    }catch(err){
        res.status(500).send({message: err.message})
    }
}

module.exports = {
    obtenerSaldo,
    recargarSaldo
  }