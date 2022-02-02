import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    product_title:{
        type: String,
        required: true,
    },
    product_description:{
        type: String, 
        required: true,
    }
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
