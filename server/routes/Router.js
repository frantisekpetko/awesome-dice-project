/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();


/* API routes */
//router.use('/car', require('./api/carRoutes'));
//router.use('/driver', require('./api/driverRoutes'));
router.use('/dice', require('./api/diceRoutes'));


module.exports = router;