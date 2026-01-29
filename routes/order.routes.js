const express = require('express');
const router = express.Router();

// Import authentication middleware
const authMiddleware = require('../middleware/auth.middleware');
// Import controller functions
const { createOrder, getOrders, updateOrderStatus, assignSupplierToOrder } = require('../controller/order.controller');

// User routes
router.post('/', authMiddleware, createOrder);
router.get('/', authMiddleware, getOrders);

// Supplier / admin routes
router.patch('/:orderId/status', authMiddleware, updateOrderStatus);
router.patch('/:orderId/assign-supplier', authMiddleware, assignSupplierToOrder);

// Export the router
module.exports = router;
