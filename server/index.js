const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const compression = require('compression')

// Initialize Express
const PORT = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// SSR
app.prepare()
  .then(() => {
    const server = express()
    server.use(cors())
    server.use(morgan('dev'))
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(compression())
    server.use(express.static(__dirname + '/../client/dist'))
    server.get('*', (req, res) => {
      return handle(req, res)
    })
    server.listen(PORT, (err) => {
      if (err) throw err
      console.log(`Server listening on port ${PORT}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
