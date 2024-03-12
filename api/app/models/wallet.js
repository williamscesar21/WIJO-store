const mongoose = require('mongoose')

const WalletSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    balance: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('wallet', WalletSchema)