import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc    Create new order
// @route   POST /api/orders
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    order_id,
    customer,
    country,
    address,
    product_title,
    product_description,
    date,
    status,
  } = req.body

  if (order_id && order_id.length === 0) {
    res.status(400)
    throw new Error('No order items')
    return
  } else {
    const order = new Order({
      order_id,
      customer,
      country,
      address,
      product_title,
      product_description,
      date,
      status,
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
})

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
  const {
    status
  } = req.body

  if (order) {
      order.status = status;

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})


// @desc    Get all orders
// @route   GET /api/orders
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('customer', 'id')
  res.json(orders)
})

export {
  addOrderItems,
  updateOrderToDelivered,
  getOrders,
}
