const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')
const routes = require('./routes')

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), { flags: 'a' })

// Middlewares

app.use(express.json())
app.use(morgan('tiny', {stream : accessLogStream}))
app.use(routes)




module.exports = app