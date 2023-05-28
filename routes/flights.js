const express = require('express');
const router = express.Router();

const flightsCTRL = require('../controllers/flights')

// Action: index
// Endpoint: GET /flights
router.get('/', flightsCTRL.index)

router.get('/add', flightsCTRL.new)

router.get('/:id', flightsCTRL.show)

router.post('/', flightsCTRL.create)

router.get('/:id/edit', flightsCTRL.edit)

router.put('/:id', flightsCTRL.update)

module.exports = router;

//comment