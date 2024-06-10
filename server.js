const http = require('node:http')
require('dotenv').config()
const app = require('./src/app')
const connectDB = require('./src/db')


const PORT = process.env.port || 3000

const server = http.createServer(app)
connectDB()


server.listen(PORT)

