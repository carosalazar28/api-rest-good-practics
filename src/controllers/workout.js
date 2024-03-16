const workoutService = require('../services/workout')

const getAll = (req, res) => {
  req.log.warn('WORKOUT', 'get all')
  const workouts = workoutService.getAll()
  res.send({ message: 'get all', data: workouts, status: 200 })
}

const getById = (req, res) => {
  req.log.info('WORKOUT')
  const workout = workoutService.getById(req.params.workoutId)
  res.send({ message: 'get all', data: workout, status: 200 })
}

const create = async (req, res) => {
  try {
    const workout = workoutService.create(req.body)
    req.log.info('CONTROLLER', 'creating', { workout })
    res.send({ message: 'created', data: workout, status: 200 })
  } catch (error) {
    res.status(400).send(error)
  }
}

const update = (req, res) => {
  req.log.info('WORKOUT', 'updateWorkoutByIdPatch')
  const workout = workoutService.update(req.params.workoutId)
  res.send(`Patch the workout ${req.params.workoutId}`)
}

const deleteById = (req, res) => {
  req.log.error('WORKOUT', 'deleteWorkoutById', { message: `deleted ${req.params.workoutId}` })
  const workout = workoutService.deleteById(req.params.workoutId)
  res.send(`Delete the workout ${req.params.workoutId}`)
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
}