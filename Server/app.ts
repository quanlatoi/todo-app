const rateLimit = require('express-rate-limit')
const mongoose = require('mongoose')
import express, { Application, Response, Request } from 'express'
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const { resolve } = require('path')
require('dotenv/config')

const { routes } = require('./Routes')

const app: Application = express();
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
const apiLimiter = rateLimit({
    windowMs: 1000,
    max: ~~process.env.MAX_REQ_PER_SEC || 100
})
app.use(express.static(resolve('./public')))

app.use('/api', apiLimiter)
app.use('/api/authentic', routes.authentic)
app.use('/api/user', routes.user)
app.use('/api/tasks', routes.tasks)
app.use('/api/tabs', routes.tabs)

app.get('/', (req: Request, res: Response):void => {
  res.json({ message: 'connected' })
})

app.get('/:id', (req: Request, res: Response):void => {
  res.json(req.params.id)
})

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}

const mongoUrl: string = 'mongodb://127.0.0.1:27017/todo-app'
const port: string = process.env.BACKEND_PORT || '8000'
mongoose.connect(mongoUrl, options).then(async () => {
  try {
    app.listen(port, () => {
      process.stdout.write('SERVER is running on port '.concat(port, '\n'))
    })
  } catch (err) {
    process.stdout.write('cannot start app. shutting down...')
  }
})
