const Flight = require('../model/flight')


async function index(req, res, next) {
    const allFlights = await Flight.find({})

    res.render('flights/index', {
        title: 'Search flights',
        flights: allFlights
    })
  };



module.exports = {
    index,
}