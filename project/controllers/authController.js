import { comparePassword, hashPassword } from "../helper/authHelper.js";
import userModel from "../models/useModel.js"
import JWT from 'jsonwebtoken'

export const registerController = async(req, res) =>{
    try {
        const {name, email, password, phone,answer, address} = req.body;
        if(!name){
            return res.send({message: 'Name is required'})
        }
        if(!email){
            return res.send({message: 'Email is required'})
        }
        if(!password){
            return res.send({message: 'Password is required'})
        }
        if(!phone){
            return res.send({message: 'Phone is required'})
        }
        if(!address){
            return res.send({message: 'Address is required'})
        }
        if(!answer){
            return res.send({message: 'Answer(sports) name is required is required'})
        }

       
        const existingUser = await userModel.findOne({email})
         // we are checking existing user
         if(existingUser){
            return res.status(200).send({
                success: false,
                message: "already registered plz login",
            })
         }

         // registering user
         const hashedPassword = await hashPassword(password)
         // now we have to save it
         const user = await new userModel({name,email,phone, address,answer, password:hashedPassword}).save()
         res.status(201).send({
            success: true,
            message: 'user registered successfully',
            user

         })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'error in registration',
            error
        })
    }
}

//login controller
export const loginController = async(req, res)=>{
    try {
        const {email,password} = req.body
        //validation
        if(!email || !password){
            return res.status(404).send({
                success: false,
                message: 'error in registration',
                error
            })
        }
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success: false,
                message: 'no user',          
            })
        }
        const match = await comparePassword(password, user.password)
        if(!match){
            return res.status(200).send({
                success: false,
                 message: 'invalid password',
            })
        }
        // token
        const token = await JWT.sign({_id : user._id},process.env.JWT_SECRET,{ expiresIn: '7d'})
        res.status(200).send({
            success: true,
            message: 'login success',
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone,
                answer: user.answer,
                address: user.address,
                role: user.role
            },
            token,
        })

    }catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'error in login',
            error
        })
    }
}