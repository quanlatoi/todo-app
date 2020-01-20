const rateLimit = require('express-rate-limit')
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { resolve } = require('path')
require('dotenv/config')

const logger = require('./Utils/logger').app
const routers = require('./Routes')

const app = express();
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
const apiLimiter = rateLimit({
    windowMs: 1000,
    max: ~~process.env.MAX_REQ_PER_SEC || 100
})
app.use(express.static(resolve('./public')))

app.get('/', (req, res) => {
    res.send({ message: 'connected' })
})

app.get('/:id', (req, res) => {
    res.send(req.params.id)
})

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}

const mongoUrl = 'mongodb://127.0.0.1:271017/Camunda'
const port = process.env.BACKEND_PORT || 8000
mongoose.connect(mongoUrl, options).then(async () => {
    logger.info('mongoDB started successfully', false)
    try {
      app.listen(port, () => {
        process.stdout.write('SERVER is running on port '.concat(port, '\n'))
        logger.info(`server is running on port ${port}`, false)
      })
    } catch (err) {
      process.stdout.write('cannot start app. shutting down...')
      logger.error({ message: 'cannot start app. shutting down...', err })
    }
})
