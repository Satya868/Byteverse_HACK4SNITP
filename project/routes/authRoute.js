import express from 'express'
import { loginController, registerController } from '../controllers/authController.js'



const router = express.Router()

// router for everyone to access the website
router.post('/register', registerController)
router.post('/login', loginController)



export default router