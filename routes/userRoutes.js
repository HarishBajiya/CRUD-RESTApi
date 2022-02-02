import express from 'express'
const router = express.Router()
import {
  registerUser,
  getUsers,
} from '../controllers/userControllers.js'

router.route('/').post(registerUser).get(getUsers)

export default router
