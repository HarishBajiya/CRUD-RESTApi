import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    order_id: {
        type: String,
        required: true,
    },
    customer:{
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    product_title: {
        type: String,
        required: true,
    },
    product_description:{
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: new Date().toLocaleDateString(),
    },
    status: {
        type: String,
        required: true,
        default: "Pending",
    }
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('order', orderSchema)

export default Order
