const React = require('react')
const ReactDOMServer = require('react-dom/server.js')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

// Initialize Express
const app = express()
const PORT = 3000

// MIDDLEWARE
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client/dist'))

// ROUTES



// LISTEN
app.listen(PORT, console.log(`Server listening on port ${PORT}`))
