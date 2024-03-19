const Wallet = require('../models/wallet')

const obtenerSaldo = async (req, res) => {
    try {
        const { userId } = req.params;
        const wallet = await Wallet.findOne({ owner: userId });
        if (!wallet) {
            res.status(404).send({ message: 'No existe la billetera' });
            return;
        }
        res.status(200).send({ balance: wallet.balance });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const recargarSaldo = async (req, res) => {
    try {
        const { userId } = req.params;
        const { amount } = req.body;

        // Obtener la referencia válida del middleware
        const referenciaValida = req.referenciaValida;

        // Verificar si la billetera del usuario existe
        let wallet = await Wallet.findOne({ owner: userId });
        if (!wallet) {
            wallet = new Wallet({
                owner: userId
            });
        }

        // Realizar la recarga de saldo
        wallet.balance += amount;
        await wallet.save();

        // Marcar la referencia como usada
        referenciaValida.usado = true;
        await referenciaValida.save();

        res.status(200).send({ message: 'Recarga exitosa', balance: wallet.balance });
    } catch (err) {
        res.status(500).send({ message: err.message, balance: wallet.balance });
    }
}


const transferirSaldo = async (req, res) => {
    try {
        const { origen, destino, monto } = req.body;

        // Verificar si las billeteras de origen y destino existen
        const walletOrigen = await Wallet.findOne({ owner: origen });
        const walletDestino = await Wallet.findOne({ owner: destino });

        if (!walletOrigen) {
            return res.status(404).send({ message: 'La billetera de origen no existe' });
        }
        
        if (!walletDestino) {
            return res.status(404).send({ message: 'La billetera de destino no existe' });
        }


        // Verificar si hay suficiente saldo en la billetera de origen
        if (walletOrigen.balance < monto) {
            return res.status(400).send({ message: 'Saldo insuficiente en la billetera de origen' });
        }

        // Transferir saldo
        walletOrigen.balance -= monto;
        walletDestino.balance += monto;

        await walletOrigen.save();
        await walletDestino.save();

        res.status(200).send({ message: 'Transferencia exitosa' });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

module.exports = {
    obtenerSaldo,
    recargarSaldo,
    transferirSaldo
}
