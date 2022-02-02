import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    c_name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    address:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

export default User
