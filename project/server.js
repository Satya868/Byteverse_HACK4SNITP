import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoute from './routes/authRoute.js'
import adminRouter from './routes/adminRoute.js'


dotenv.config()

connectDB()

const app = express()


//middleware
app.use(express.json())
app.use(morgan('dev'))

//rest api
app.get('/')
app.use('/v1/auth', authRoute)
app.use('/v1/admin', adminRouter)

//PORT
const PORT = process.env.PORT || 5000

//run app
app.listen(PORT, ()=>{
    console.log(`Server is running on the port ${PORT}`)
})