const mongoose = require('mongoose');
const TransactionSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    transactionHash: {
        type: String,
        required: true,
        timestamp: true
    },
    status: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model("Transaction", TransactionSchema);