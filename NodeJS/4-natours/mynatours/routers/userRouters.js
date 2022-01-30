const express = require('express')
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')

const router = express.Router()
const { getUsers, getUser, createUser, updateUser, deleteUser } = userController
const { signup } = authController

/* no need of rest api form because it has one to one request for signup/login and all */
router.post('/signup', signup)

/* this is in REST api form */
router
  .route('/')
  .get(getUsers)
  .post(createUser)
router
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser)
module.exports = router
