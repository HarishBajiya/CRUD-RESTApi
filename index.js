import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

connectDB();

const app = express()

app.use(express.json())


app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)


const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))


  app.get('/', (req, res) => {
    res.send('API is running....')
  })



const PORT = 5001 || 5001

app.listen(
  PORT,
  console.log(
    `Server running in ${'development'} mode on port ${PORT}`.yellow.bold
  )
)
