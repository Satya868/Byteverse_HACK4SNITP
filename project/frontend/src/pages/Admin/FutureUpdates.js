import React from 'react'
import { useAuth } from '../../context/AuthContext'

const FutureUpdates = () => {
    const[auth, setAuth] = useAuth()
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
       
        <h4>Today's Guest</h4>
        <div>
            <ul style={{listStyle:"none", }}>
                <li>
                    <span>Name: {auth?.user?.role === 1 ? <input type='text' placeholder='Enter Available People'></input> : "Connect Randomly"}</span>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default FutureUpdates
