const express = require('express')

const workout = require('./workout')

const router = express.Router()

router
  .route('/')
  .get((req, res) => {
    res.send(`<h1>Hello from ${req.baseUrl}</h1>`)
  })

router.use('/workouts', workout)
  
module.exports = router