const express = require('express');
const router = express.Router();

const flightsCTRL = require('../controllers/flights')

// Action: index
// Endpoint: GET /flights
router.get('/', flightsCTRL.index)

module.exports = router;

//comment