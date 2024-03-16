const express = require('express')
const Joi = require('joi');
const log = require('npmlog')

const workoutController = require('../../controllers/workout')

const router = express.Router()

const schema = Joi.object({
  name: Joi.string().required(),
  mode: Joi.string().required(),
  equipment: Joi.array().required(),
  exercises: Joi.array().required(),
  trainerTips: Joi.array(),
})

const validate = async (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    req.log.error('VALIDATE', 'error')
    return res.status(400).json({ message: error.details[0].message });
  }
  req.log.info('VALIDATE', 'success')
  next();
};


router
  .get('/', workoutController.getAll)
  .get('/:workoutId', workoutController.getById)
  .post('/', validate, workoutController.create)
  .patch('/:workoutId', workoutController.update)
  .delete('/:workoutId', workoutController.deleteById)

module.exports = router;