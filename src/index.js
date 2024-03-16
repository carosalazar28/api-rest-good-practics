const express = require('express')
const log = require('npmlog')

const v1Router = require('./v1/routes')

const app = express()
const router = express.Router()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use((req, res, next) => {
  req.log = log
  next()
})
app.use('/api/v1', v1Router)

log.info('INFO', 'Server Listening', { message: PORT })
app.listen(PORT, () => console.log('Server listening'))