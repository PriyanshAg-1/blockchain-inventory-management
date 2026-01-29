const express = require('express');
const router = express.Router();

// Import controller functions
const { register }  = require('../controller/auth.controller');
const { login } = require('../controller/auth.controller');

// Define routes
router.post('/register', register);
router.post('/login', login);

// Export the router
module.exports = router;