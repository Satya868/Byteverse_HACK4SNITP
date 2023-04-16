import React from 'react'
import EmployeeList from './EmployeeList'
import Misscellaneous from './Misscellaneous'
import FutureUpdates from '../Admin/FutureUpdates'
import './Home.css';
import student from '../../assets/Stu-removebg-preview.png'
import rocket from '../../assets/rockett.gif';

const Home = () => {
  return (
    <>
      <div className='home-intro cla' style={{display:"flex",minHeight:"100vh", flexDirection:"row"}}>
        <div className='intro' style={{minWidth:"80%",color:"white", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}> 
           <div className='slide-top' style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"90px"}}>
            {/*<FutureUpdates/>*/}
           <h3 style={{color:"violet"}}>Students Helper App</h3> 
           </div>
           <div className='slide-right ' style={{display:"flex", justifyContent:"center", paddingTop:"60px"}}>
            <span><h4>We Welcome You Here,</h4><br/>Get in touch with Professionals to take your first step in professional life</span>
           </div>
           <img height={"200px"} width={"200px"} src={student} alt='...'/>
        </div>
        <div className='Ad' style={{color:"white"}}>
          <div className='rocket' style={{display:"flex",justifyContent:"center", alignItems:"bottom"}}>
            <img src={rocket} style={{opacity:"1"}}/>
          </div>
        </div>
      </div>
      <div className='employee-list'>
        <EmployeeList/>
      </div>
      <div>
        <Misscellaneous/>
      </div>
    </>
  )
}

export default Home
