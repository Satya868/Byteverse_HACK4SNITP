import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [auth, setAuth] = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
          const res = await axios.post('/v1/auth/login',{email, password})
          if(res && res.data.success){
            toast.success(res && res.data.message)
            setAuth({
                ...auth,
                user: res.data.user,
                token: res.data.token
            })
            localStorage.setItem('projectAuth', JSON.stringify(res.data))
            navigate(location.state || '/home')
          }else{
            toast.error(res.data.message)
          }
        } catch (error) {
          console.log(error)
          toast.error('Something went wrong plz try again later')
        }
    }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <h4 className='title'>Log In Here</h4>
          
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          LOG In
        </button>
        <div className='mb-3 mt-1'>
        <button type="button" style={{ backgroundColor: "white", } }onClick={()=> navigate('/forgot-password')}>
          <span style={{color: "blue"}}>Forgot Password ?</span>
        </button>
        </div>
      </form>
    </div>
  )
}

export default Login
