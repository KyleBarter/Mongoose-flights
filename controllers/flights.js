const Flight = require('../model/flight')

function formatBody(body) {
    return {
      ...body,
    }
  }

// ? INDEX FUNCTION
async function index(req, res, next) {
    const allFlights = await Flight.find({})

    res.render('flights/index', {
        title: 'All flights',
        flights: allFlights
    })
};

// ? SHOW FUNCTION
async function show(req, res, next){
    try {
        const { id } = req.params
        const flight = await Flight.findById(id)

        for (const key in flight.toObject()) {
            console.log(`${key[0].toUpperCase() + key.substring(1)}: ${flight[key]}`)
        }

        res.render('flights/show', {
            title: 'Flight show page',
            flight: flight.toObject(),
            airline: flight.airline
        })
    } catch (err) {
        console.log('SHOW ERROR MESSAGE ->', err.Message)
        next()
    }
}

function newFlight(req, res, next){
    res.render('flights/new', { title: 'Add Flight', errorMessage: '' })
}

async function create(req, res, next){
    try {
        const body = formatBody(req.body)
        console.log(req.body)
        // console.log(body)
        const createdFlight = await Flight.create(body);
        res.redirect(`/flights/${createdFlight._id}`)
    } catch (err) {
        res.render('flights/new', { title: 'Add flight', errorMessage: err.Message })
    }
}

async function edit(req, res, next) {
    try {
        const { id } = req.params
        const flight = await Flight.findById(id)
        res.render('flights/edit', { title: `Edit ${flight.airline}`, flight, errorMessage: ''})
    } catch (err) {
        console.log(err)
        next()
    }
}


async function update(req, res, next) {
    try {
        const { id } = req.params
        const flightDocument = await Flight.findById(id)
    
        // Reformatting the body to include nowShowing as boolean and cast as array
        const body = formatBody(req.body)
    
        // Merge document with req.body, taking req.body as precedent
        Object.assign(flightDocument, body)
    
        // Once assigned new values to the document, we save the document
        await flightDocument.save()
    
        // Render the show page for the newly updated movie
        res.render('flights/show', { title: flightDocument.airline, flight: flightDocument.toObject() })
    
      } catch (err) {
        console.log('ERROR MESSAGE ->', err.message)
        res.render('flights/edit', { title: 'Update Movie', errorMessage: err.message })
    }
}


module.exports = {
    index,
    show,
    new: newFlight,
    create,
    edit,
    update
}