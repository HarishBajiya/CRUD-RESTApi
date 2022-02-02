import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


// @desc    Register a new user
// @route   POST /api/users
const registerUser = asyncHandler(async (req, res) => {
    const { c_name, email, address,country } = req.body
  
    const user = await User.create({
      c_name,
      email,
      address,
      country
    })
  
    if (user) {
      res.status(201).json({
          c_name: user.c_name,
          email: user.email,
          address: user.address,
          country: user.country
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  })


// @desc    Get all users
// @route   GET /api/users
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

export {
  registerUser,
  getUsers,
}





