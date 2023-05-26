const mongoose = require('mongoose')


async function connectDB() {
    await mongoose.connect(process.env.DATABASE_URL)
    const db = mongoose.connection
    console.log(`database connected on ${db.name} on ${db.port}`)
}
connectDB()

