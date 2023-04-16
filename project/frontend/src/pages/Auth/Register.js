import React, { useState } from 'react'
import './Reg.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [answer, setAnswer] = useState('')
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState('')
    const navigate = useNavigate()

    const handleSubmit= async(e)=>{
      e.preventDefault()
      try {
          const res = await axios.post('/v1/auth/register', {name, email, password, phone, address,answer})
          if(res.data.success){
              toast.success(res.data.message)
              navigate('/login')
          }else{
              toast.error(res.data.message)
          }
      } catch (error) {
          console.log(error)
          
      }

      console.log(name,email,password)
      
  }
  return (
    <div className="form-container">
        
        <form onSubmit={handleSubmit}>
        <h4 className='title'>Register Here</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="form-control"
              id="exampleInputName1"
              placeholder="Enter Your Name"
            />
          </div>
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
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="form-control"
              id="exampleInputPhone1"
              placeholder="Enter Your Phone"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              className="form-control"
              id="exampleInputAddress1"
              placeholder="Enter Your Address..."
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e)=>setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputAddress2"
              placeholder="Your fav. sports..."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
  )
}

export default Register
