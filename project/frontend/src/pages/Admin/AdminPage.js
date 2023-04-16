import React from 'react'
import AllEmployee from './AllEmployee'
import { useAuth } from '../../context/AuthContext'
import {Link, NavLink} from 'react-router-dom';
import './Admin.css'

const AdminPage = () => {
    const [auth, setAuth] = useAuth()
  return (
    <div className='container-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3' style={{minWidth:"20rem"}}>
            {auth?.user?.role === 1 ? <>
            <NavLink to='/dashboard/create-employee'>Create Employee</NavLink>
            <div className='' style={{marginTop: "20px"}}>
              <AllEmployee/>
            </div></> : <div style={{marginTop: "20px"}}>
              <AllEmployee/>
            </div> }

          </div>
          <div className='col-md-9 '>
            <div className='card w-75 p-3'>
              <h3>Name: {auth?.user?.name.toUpperCase()}</h3>
              <h3>Email: {auth?.user?.email}</h3>
              <h3>Phone: {auth?.user?.phone}</h3>          
            </div>
          </div>
        </div>
      </div>
  )
}

export default AdminPage
