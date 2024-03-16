const { saveToDataBase } = require('./utils')
const DB = require('./db.json')

const getAll = () => {
  return DB.workouts
}

const create = (newWorkout) => {
  const isAlredySaved = DB.workouts.findIndex((workout) => {
    workout.name === newWorkout.name > -1
  })
  if (isAlredySaved) {
    return
  }
  DB.workouts.push(newWorkout)
  saveToDataBase(DB)
  return newWorkout
}

module.exports = {
  getAll,
  create,
}
