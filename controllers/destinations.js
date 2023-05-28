const Flight = require('../model/flight')

async function create(req, res, next) {
    const { id } = req.params

    try {
        const flight = await Flight.findById(id)

        flight.destinations.push(req.body)

        await flight.save()
    } catch (err) {
        console.log('DEST ERROR MESSAGE ->', err.message)
    }
    res.redirect(`/flight/${id}`)
}

module.exports ={
    create
}