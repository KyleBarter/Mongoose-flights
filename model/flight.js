const mongoose = require('mongoose')

const destinationSchema = new mongoose.Schema({
    arrivalAirport: {
        type: String,
        enum: ['LAX', 'LHR', 'CDG', 'MAD', 'SVQ'],
    },
    arrival: {
        type: Date
    }
})


const flightSchema = new mongoose.Schema ({
    airline: {
        type: String, 
        enum: ['British Airways', 'EasyJet', 'RyanAir']
    },
    airport: {
        type: String,
        enum: ['DXB', 'LGW', 'CPH', 'ARN', 'EDI'],
        default: 'LGW'
    },
    flightNo: {
        type: Number,
        require: true,
        // min & max number 10 & 9999 may need to go elsewhere 
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: Date.now() + 365*24*60*60000
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)
module.exports = mongoose.model('Destination', destinationSchema)

//comment