const express = require('express');
const router = express.Router();

const flightsCTRL = require('../controllers/flights')

// Action: index
// Endpoint: GET /flights
router.get('/', flightsCTRL.index)

router.get('/add', flightsCTRL.new)

router.post('/', flightsCTRL.create)

module.exports = router;

//comment