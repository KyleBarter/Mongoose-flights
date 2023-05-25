const Flight = require('../model/flight')


async function index(req, res, next) {
    const allFlights = await Flight.find({})

    res.render('flights/index', {
        title: 'All flights',
        flights: allFlights
    })
};

function newFlight(req, res, next){
    res.render('flights/new', { title: 'Add Flight', errorMessage: '' })
}

async function create(req, res, next){
    try {
        const body = formatBody(req.body)
        const createdFlight = await Flight.create(body);
        res.redirect(`/flights/${createdFlight._id}`)
    } catch (err) {
        res.render('flights/new', { title: 'Add flight', errorMessage: err.Message })
    }
}


module.exports = {
    index,
    new: newFlight,
    create
}