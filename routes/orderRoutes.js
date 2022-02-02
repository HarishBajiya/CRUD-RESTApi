import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  updateOrderToDelivered,
  getOrders,
} from '../controllers/orderControllers.js'

router.route('/').post(addOrderItems).get(getOrders)
router.route('/:id/updateStatus').put(updateOrderToDelivered)

export default router
