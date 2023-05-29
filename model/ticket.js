const mongoose = require('mongoose')
const Schema = mongoose.Schema;


//? Ticket schema
const ticketSchema = new Schema({
    seat: {
        type: String,

    },
    price: {
        type: Number,
        min: 0
    },
    flight: {type: Schema.Types.ObjectId}
})

module.exports = mongoose.model('Ticket', ticketSchema)
