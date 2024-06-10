const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () =>{
    try{
        await mongoose.connect(DATABASE_URI)
        console.log('MongoDB connection successful')
    } catch(err) {
        console.log('DB not connected: ', err)
        process.exit(1)
    }
}

module.exports = connectDB
