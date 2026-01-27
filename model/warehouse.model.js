const mongoose = require('mongoose');
const WarehouseSchema = new mongoose.Schema({
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true
    },
    location: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Warehouse", WarehouseSchema);