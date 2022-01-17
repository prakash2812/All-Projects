const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

const { getUsers, getUser, createUser, updateUser, deleteUser } = userController

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
