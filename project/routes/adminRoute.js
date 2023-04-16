import express from 'express'
import formidable from 'express-formidable'
import {deleteEmployee, employeeEntryController, getAllEmployee, getEmployeephoto, updateEmployee} from '../controllers/adminController.js'

const adminRouter = express.Router()

adminRouter.post('/employee-data', formidable(), employeeEntryController)

adminRouter.get('/all-employee', getAllEmployee)

adminRouter.get('/photo-employee/:pid', getEmployeephoto)

// we will implement these function later on
adminRouter.put('/update-employee/:pid', updateEmployee)

adminRouter.delete('/delete-employee/:pid', deleteEmployee)


export default adminRouter