const jwt = require('jsonwebtoken');

// Middleware to authenticate JWT tokens
const authMiddleware = (req, res, next) => {
    try {
        // 1. Get token from Authorization header
        const authHeader = req.header('Authorization');
        
        // 2. Check if token is present
        if (!authHeader) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        // 3. Verify token
        const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
        if (!token) {
            return res.status(401).json({ message: 'Invalid token format'});
        }

        // 4. Decode token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        // 5. Proceed to next middleware or route handler
        next();
    } catch (err) {
        console.error('Token verification failed', err);
        res.status(401).json({ message: 'Token is not valid/Unauthorized' });
    }
};

// Export the middleware
module.exports = authMiddleware;