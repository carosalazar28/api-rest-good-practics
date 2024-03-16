const { v4: uuid } = require('uuid')
const Workout = require('../database/Workout')

const getAll = () => {
  const workouts = Workout.getAll()
  return workouts
}
const getById = () => {
  return;
}
const create = (newWorkout) => {
  const currentDate = new Date().toLocaleDateString('en-US', { timeZone: 'UTC' })
  const workoutToAdd = {
    ...newWorkout,
    id: uuid(),
    createdAt: currentDate,
    updateAt: currentDate,
  }
  const workoutCreated = Workout.create(workoutToAdd)
  if(!workoutCreated) {
    throw new Error('Workout alredy exist')
  }
  return workoutCreated;
}
const update = () => {
  return;
}
const deleteById = () => {
  return;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
}